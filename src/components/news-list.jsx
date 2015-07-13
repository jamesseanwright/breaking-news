import React from 'react';
import NewsItem from './news-item.jsx';
import NewsStore from '../stores/news-store';
const newsStore = new NewsStore();

class NewsList extends React.Component {
	_onChange() {
		this.setState({
			items: this.getAll()
		});
	}

	getInitialState() {
		return {
			items: []
		};
	}

	componentDidMount() {
		newsStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		newsStore.removeChangeListener(this._onChange);
	}

	render() {
		var nodes = this.state.items.map(item => {
			return (
				<NewsItem title={item.name} source={item.source}>
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