import AppDispatcher from '../dispatcher/app-dispatcher';

class NewsActions {
	static getAll() {
		AppDispatcher.dispatch({
			type: 'getAll'
		});
	}

	static listenToFirebase(eventData) {
		AppDispatcher.dispatch({
			type: 'listenToFirebase',
			data: eventData
		});
	}
}

export default NewsActions;