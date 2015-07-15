import React from 'react';

class NewsItem extends React.Component {
	render() {
		return (
			<li className="news-item">
				<h2><a href={this.props.url}>{this.props.title}</a></h2>
				<p>{this.props.source}</p>
				<p>{this.props.children}</p>
			</li>
		);
	}
}

export default NewsItem;