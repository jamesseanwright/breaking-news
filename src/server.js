import { Server } from 'node-static';
import http from 'http';
const file = new Server('./public');
const port = process.env.PORT || 3000;

http.createServer((req, res) => {
	request.addListener('end', () => {
		file.serve(req, res);
	}).resume();
}).listen();

console.log(`listening on port ${port}`);