import AppDispatcher from '../dispatcher/app-dispatcher';
import { EventEmitter } from 'events';
import Firebase from 'firebase';
const firebase = new Firebase('https://blistering-heat-5869.firebaseio.com/'); 
const changeEvent = 'change';

class NewsStore extends EventEmitter {
	constructor() {
		super();
		this._stories = [];
		this.register();
		this._getAllFromFirebase();
	}

	getAll() {
		return this._stories;
	}

	_getAllFromFirebase() {
		firebase.child('stories').on('value', data => {
			this._stories = data.val();
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
			this[action]();
		});
	}
}

export default new NewsStore();