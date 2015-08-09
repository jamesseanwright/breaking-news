import AppDispatcher from '../dispatcher/app-dispatcher';
import { EventEmitter } from 'events';
import { List } from 'immutable';

const changeEvent = 'change';

class NewsStore extends EventEmitter {
	constructor() {
		super();
		this.register();
		this._stories = new List();
	}

	getAll() {
		return this._stories;
	}

	newDataReceived(data) {
		var newData = data.val();

		if (newData.length) {
			this._stories = this._stories.concat(newData.reverse());
		} else {
			this._stories = this._stories.unshift(newData);
		}

		console.log(this._stories);

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
}

export default new NewsStore();