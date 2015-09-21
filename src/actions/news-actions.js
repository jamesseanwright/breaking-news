import AppDispatcher from '../dispatcher/app-dispatcher';
import Firebase from 'firebase';

class NewsActions {
	static getFirebase() {
		if (!this._firebase)
			this._firebase = new Firebase('https://blistering-heat-5869.firebaseio.com/');
	
		return this._firebase;
	}

	static listenToFirebase(eventData) {
		const firebase = this.getFirebase();

		firebase.child('stories')[eventData.type](eventData.name, data => {
			AppDispatcher.dispatch({
				type: 'newDataReceived',
				data: data
			});
		});
	}
}

export default NewsActions;