import express from 'express';
import swig from 'swig';
import React from 'react';
import NewsList from './components/news-list.jsx';
import NewsStore from './stores/news-store';

const port = process.env.PORT || 3000;
const newsListFactory = React.createFactory(NewsList);
const app = express();

app.engine('swig', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);
app.set('view cache', false);
swig.setDefaults({ cache: false });

app.get('/', (req, res) => {
	if (!NewsStore.getAll()) {
		NewsStore.addChangeListener(() => {
			onDataRetrieved(res);
		});
	} else {
		onDataRetrieved(res);
	}
}).listen(port);

function onDataRetrieved(res) {
	res.status(200).render('view.swig', { stories: React.renderToStaticMarkup(newsListFactory()) });
}

console.log(`listening on port ${port}`);