import AppDispatcher from '../dispatcher/app-dispatcher';
import { EventEmitter } from 'events';
import { List } from 'immutable';
import iso from '../iso';

const changeEvent = 'change';

class NewsStore extends EventEmitter {
	constructor(stories) {
		super();
		this.register();
		this._stories = new List(stories);
	}

	getAll() {
		return this._stories;
	}

	newDataReceived(data) {
		const newData = data.val();

		if (newData.length) {
			this._stories = this._stories.concat(newData.reverse());
		} else {
			this._stories = this._stories.unshift(newData);
		}

		iso.update(this);
		this.emit(changeEvent);
	}

	addChangeListener(callback) {
		this.on(changeEvent, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(changeEvent, callback);
	}

	register() {
		AppDispatcher.register(action => {
			this[action.type](action.data);
		});
	}

	serialise() {
		return this._stories;
	}
}

export default NewsStore;