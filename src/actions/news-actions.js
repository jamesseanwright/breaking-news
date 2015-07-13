import AppDispatcher from '../dispatcher/app-dispatcher';

class NewsActions {
	static getAll() {
		AppDispatcher.dispatch({
			actionType: 'getAll'
		});
	}
}

export default NewsActions;