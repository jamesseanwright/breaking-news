'use strict';

const nodeStatic = require('node-static');
const http = require('http');
const file = new nodeStatic.server('./public');

http.createServer((req, res) => {
	request.addListener('end', () => {
		file.serve(req, res);
	}).resume();
}).listen(3000);