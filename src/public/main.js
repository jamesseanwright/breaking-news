import React from 'react';

import '../actions/news-actions';

import '../components/news-item.jsx';
import NewsList from '../components/news-list.jsx';

import '../dispatcher/app-dispatcher';

import '../stores/news-store';

const newsListFactory = React.createFactory(NewsList);

React.render(
	newsListFactory(),
	document.querySelector('section[role="main"]')
);

window.React = React;