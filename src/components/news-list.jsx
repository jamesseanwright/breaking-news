import React from 'react';
import NewsItem from './news-item.jsx';
import NewsStore from '../stores/news-store';
import iso from '../iso';

class NewsList extends React.Component {
	constructor() {
		super();
		this._store = iso.hydrate(NewsStore);
		this.state = this._updateState();
	}

	_updateState() {
		return {
			items: this._store.getAll()
		}
	}

	_onChange() {
		this.setState(this._updateState());
	}

	componentDidMount() {
		this._store.addChangeListener(this._onChange.bind(this));
	}

	componentWillUnmount() {
		this._store.removeChangeListener(this._onChange.bind(this));
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.state.items !== nextState.items;
	}

	render() {
		const nodes = this.state.items.map(item => {
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