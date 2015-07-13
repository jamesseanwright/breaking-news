import React from 'react';

class NewsItem extends React.Component {
	render() {
		return (
			<div className="news-item">
				<h2>{this.props.title}</h2>
				<p>{this.props.source}</p>
				<p>{this.props.children}</p>
			</div>
		);
	}
}

export default NewsItem;