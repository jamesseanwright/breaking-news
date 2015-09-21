import React, { Component } from 'react';

class NewsItem extends Component {
	shouldComponentUpdate() {
		return false;
	}

	render() {
		const { url, title, source, children } = this.props; 
		
		return (
			<li className="news-item">
				<h2 className="news-item__title"><a href={url}>{title}</a></h2>
				<p className="news-item__source">{source}</p>
				<p className="news-item__text">{children}</p>
			</li>
		);
	}
}

export default NewsItem;