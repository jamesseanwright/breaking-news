import http from 'http';
import React from 'react';
import NewsList from './components/news-list.jsx';

const port = process.env.PORT || 3000;
const newsListFactory = React.createFactory(NewsList);

http.createServer((req, res) => {
	res.writeHead(200);
	res.write(React.renderToStaticMarkup(newsListFactory()));
	res.end();
}).listen(port);

console.log(`listening on port ${port}`);