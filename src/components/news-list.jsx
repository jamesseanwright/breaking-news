import React from 'react';
import NewsItem from './news-item.jsx';
import NewsStore from '../stores/news-store';

class NewsList extends React.Component {
	constructor() {
		super();
		this.state = this._updateState();
	}

	_updateState() {
		return {
			items: NewsStore.getAll()
		}
	}

	_onChange() {
		this.setState(this._updateState());
	}

	componentDidMount() {
		NewsStore.addChangeListener(this._onChange.bind(this));
	}

	componentWillUnmount() {
		NewsStore.removeChangeListener(this._onChange.bind(this));
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.state.items !== nextState.items;
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
			<ul className="news-list">
				{nodes}
			</ul>
		);
	}
}

export default NewsList;