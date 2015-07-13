import http from 'http';
import NewsList from './components/news-list';

const port = process.env.PORT || 3000;

http.createServer((req, res) => {
	res.writeHead(200);
	res.write(React.renderToString(NewsList));
	res.end();
}).listen(port);

console.log(`listening on port ${port}`);