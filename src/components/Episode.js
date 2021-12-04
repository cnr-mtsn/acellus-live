import React from "react";

class Episode extends React.Component {
	constructor(props) {
		super(props);
		this.logWatchOnClick = this.logWatchOnClick.bind(this);
	}

	logWatchOnClick(url) {
		// TODO: Send an async message to the API letting it know that this video has been watched
		window.openPopup(url);
		return false;
	}

	render() {
		return (
			<div
				onClick={() => this.logWatchOnClick(this.props.WatchUrl)}
				className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
			>
				<div className="flex-shrink-0">
					<img className="h-55 w-100" src={this.props.ImagePath} alt={this.props.EpisodeName} />
				</div>
				<div className="flex-1 min-w-0">
					<a href="#" className="focus:outline-none video_popup">
						<span className="absolute inset-0" aria-hidden="true"></span>
						<p className="text-sm font-medium text-gray-900">{this.props.EpisodeName}</p>
						<p className="text-sm text-gray-500 truncate">
							{this.props.EpisodeDate} - {this.props.WatchCnt}
						</p>
					</a>
				</div>
			</div>
		);
	}
}

export default Episode;
