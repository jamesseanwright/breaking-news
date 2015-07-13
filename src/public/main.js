import React from 'react';

import '../actions/news-actions';

import '../components/news-item.jsx';
import NewsList from '../components/news-list.jsx';

import '../dispatcher/app-dispatcher';

import '../stores/news-store';

React.render(
	NewsList,
	document.querySelector('section[role="main"]')
);