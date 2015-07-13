import AppDispatcher from '../dispatcher/app-dispatcher';

class NewsActions {
	static getAll(callback) {
		AppDispatcher.dispatch({
			actionType: 'getAll',
			callback: callback
		});
	}
}

export default NewsActions;