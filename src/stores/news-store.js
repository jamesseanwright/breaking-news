import AppDispatcher from '../dispatcher/app-dispatcher';
import { EventEmitter } from 'events';
import Firebase from 'firebase';
import { List } from 'immutable';

const firebase = new Firebase('https://blistering-heat-5869.firebaseio.com/'); 
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

	listenToFirebase(eventData) {
		firebase.child('stories')[eventData.type](eventData.name, data => {
			var newData = data.val();

			if (newData.length) {
				this._stories = this._stories.concat(newData.reverse());
			} else {
				this._stories = this._stories.unshift(newData);
			}

			this.emit(changeEvent);
		});
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