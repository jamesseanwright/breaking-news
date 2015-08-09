import React from 'react';

class NewsItem extends React.Component {
	render() {
		return (
			<li className="news-item">
				<h2 className="news-item__title"><a href={this.props.url}>{this.props.title}</a></h2>
				<p className="news-item__source">{this.props.source}</p>
				<p className="news-item__text">{this.props.children}</p>
			</li>
		);
	}
}

export default NewsItem;