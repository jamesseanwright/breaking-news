import http from 'http';
import React from 'react';
import NewsList from './components/news-list.jsx';
import NewsStore from './stores/news-store';

const port = process.env.PORT || 3000;
const newsListFactory = React.createFactory(NewsList);

http.createServer((req, res) => {
	if (!NewsStore.getAll()) {
		NewsStore.addChangeListener(() => {
			onDataRetrieved(res);
		});
	} else {
		onDataRetrieved(res);
	}
}).listen(port);

function onDataRetrieved(res) {
	res.writeHead(200);
	res.write(React.renderToStaticMarkup(newsListFactory()));
	res.end();
}

console.log(`listening on port ${port}`);