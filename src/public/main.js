import React from 'react';
import NewsActions from '../actions/news-actions';
import NewsList from '../components/news-list.jsx';
import NewsStore from '../stores/news-store';
import '../components/news-item.jsx';
import '../dispatcher/app-dispatcher';

const newsListFactory = React.createFactory(NewsList);

React.render(
	newsListFactory(),
	document.querySelector('section[role="main"]')
);

NewsActions.listenToFirebase({
	type: 'on',
	name: 'child_added'
});