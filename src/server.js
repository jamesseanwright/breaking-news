import express from 'express';
import swig from 'swig';

const port = process.env.PORT || 3000;
const app = express();

app.engine('swig', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);
app.set('view cache', false);
swig.setDefaults({ cache: false });
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.status(200).render('view.swig');
}).listen(port);

console.log('Listening on port', port, '...');