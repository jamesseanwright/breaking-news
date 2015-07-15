import React from 'react';
import NewsActions from '../actions/news-actions';
import NewsList from '../components/news-list.jsx';
import NewsStore from '../stores/news-store';
import '../components/news-item.jsx';
import '../dispatcher/app-dispatcher';

const newsListFactory = React.createFactory(NewsList);
var initialised = false;

NewsStore.addChangeListener(() => {
	if (initialised) {
		return;
	}

	React.render(
		newsListFactory(),
		document.querySelector('section[role="main"]')
	);

	initialised = true;
});

NewsActions.listenToFirebase({
	type: 'on',
	name: 'child_added'
});