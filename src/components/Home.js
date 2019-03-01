import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";

import "./Home.css";

export default class Home extends Component {
	render() {
		return (
			<div className="Home">
				<div className="landing">
					<Jumbotron className="jumbo">
						<h2>Better connect your Business to the world!</h2>
						<p>
							Our success is based on the relationships we build with our
							clients. Every company will offer to be your “trusted advisor”,
							but we’re dedicated to being more than that.
						</p>
						<p>
							<Button bsStyle="primary">Learn more</Button>
						</p>
					</Jumbotron>
					<h2>Our Mission</h2>
					<p>
						Digital Cloud Service was founded to fill a void we saw in the
						Telecom and IT Market – a company whose first priority is its
						customer. We believed that there had to be a way to better serve our
						customers and make a living that wasn’t at odds with our values.
						After decades spent working for sales-driven corporations, we have
						chosen to focus our resources on hiring subject matter experts
						rather than a large team of salespeople. Our knowledgeable support
						staff have an average of 20 years of experience in
						Telecommunications and IT. We’re fortunate to have the opportunity
						to do what we love, and we’d like to help you return your focus to
						what you love too.
					</p>
					<p>
						Our success is based on the relationships we build with our clients.
						Every company will offer to be your “trusted advisor”, but we’re
						dedicated to being more than that. We’re the good friend who tells
						you when there’s spinach in your teeth. We will listen to your needs
						and devise detailed solutions. And like a good friend, we’re never
						afraid to let you know when something is not the right fit.
					</p>
				</div>
			</div>
		);
	}
}
