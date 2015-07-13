import React from 'react';
import NewsItem from './news-item.jsx';

class NewsList extends React.Component {
	render() {
		return (
			<div className="items">
				<NewsItem title="Title" author="Bob">
					Some text for da news item lol
				</NewsItem>

				<NewsItem title="Title 2" author="Greg">
					Some text for da news item lol
				</NewsItem>
			</div>
		);
	}
}

export default NewsList;