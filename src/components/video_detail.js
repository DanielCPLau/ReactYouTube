import React, { Component } from 'react';
import { connect } from 'react-redux';

class VideoDetail extends Component {
	constructor() {
		super();
		this.state= {
			expanded: true
		};
	}
	render() {

		while (!this.props.video) {
			return <div> Loading... </div>;
		}

		const videoId = this.props.video.id.videoId;
		const url = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

		return (
			<div className="video-detail">
				<div className="embed-responsive embed-responsive-16by9" style={{width: '100%'}}>
					<iframe className="embed-responsive-item" src={url}></iframe>
				</div>
				<div className="details">
					<div className='videoTitle' onClick={() => {
						this.setState({
							expanded: !this.state.expanded
						})
					}} style={{cursor: 'pointer'}}>{this.props.video.snippet.title}</div>
					{ this.state.expanded && <div>{this.props.video.snippet.description}</div>}
				</div>
			</div>
		)
	}
};

function mapStateToProps(state) {
	return {
		video: state.video.selectedVideo
	}
}

export default connect(mapStateToProps)(VideoDetail);
