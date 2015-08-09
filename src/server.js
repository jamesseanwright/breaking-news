import express from 'express';
import swig from 'swig';
import React from 'react';
import NewsList from './components/news-list.jsx';
import NewsStore from './stores/news-store';
import NewsActions from './actions/news-actions';

const port = process.env.PORT || 3000;
const newsListFactory = React.createFactory(NewsList);
const app = express();

var listening = false;

app.engine('swig', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);
app.set('view cache', false);
swig.setDefaults({ cache: false });
app.use(express.static(__dirname + '/public'));

var stories = 'Waiting for stories...';

app.get('/', (req, res) => {
	res.status(200).render('view.swig', { stories: stories });
}).listen(port);

NewsStore.addChangeListener(() => {
	stories = React.renderToStaticMarkup(newsListFactory());
});

NewsActions.listenToFirebase({
	type: 'once',
	name: 'value'
});

NewsActions.listenToFirebase({
	type: 'on',
	name: 'child_added'
});

console.log('Listening on port', port, '...');