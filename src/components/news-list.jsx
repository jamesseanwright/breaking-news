import React from 'react';
import NewsItem from './news-item.jsx';
import NewsStore from '../stores/news-store';

class NewsList extends React.Component {
	constructor() {
		super();
		this.state = this._getState();
	}

	_getState() {
		return {
			items: NewsStore.getAll()
		}
	}

	_onChange() {
		this.setState(this._getState());
	}
	componentDidMount() {
		NewsStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		NewsStore.removeChangeListener(this._onChange);
	}

	render() {
		var nodes = this.state.items.map(item => {
			return (
				<NewsItem key={item.id} title={item.title} source={item.source} url={item.url}>
					{item.text}
				</NewsItem>
			);
		});

		return (
			<div className="items">
				{nodes}
			</div>
		);
	}
}

export default NewsList;