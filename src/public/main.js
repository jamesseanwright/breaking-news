import React from 'react';

import '../actions/news-actions';

import '../components/news-item.jsx';
import NewsList from '../components/news-list.jsx';

import '../dispatcher/app-dispatcher';

import '../stores/news-store';

const newsListFactory = React.createFactory(NewsList);


setTimeout(() => { // TODO: window.onload?
	React.render(
		newsListFactory(),
		document.querySelector('section[role="main"]')
	);
}, 5000);