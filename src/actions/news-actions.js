import AppDispatcher from '../dispatcher/app-dispatcher';
import Firebase from 'firebase';

const firebase = new Firebase('https://blistering-heat-5869.firebaseio.com/');

class NewsActions {
	static getAll() {
		AppDispatcher.dispatch({
			type: 'getAll'
		});
	}

	static listenToFirebase(eventData) {
		var child = firebase.child('stories');

		firebase.child('stories')[eventData.type](eventData.name, data => {
			AppDispatcher.dispatch({
				type: 'newDataReceived',
				data: data
			});
		});
	}
}

export default NewsActions;