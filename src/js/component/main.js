import React from "react";
import PropTypes from "prop-types";
import { Jumbotron, Button, Container } from "react-bootstrap";

export const Main = () => {
	return (
		<Container className="container">
			<Jumbotron>
				<h1>A Warm Welcome!</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Perferendis quibusdam similique perspiciatis, iste quae aut
					nemo dolore nostrum velit labore! Lorem ipsum dolor sit amet
					consectetur adipisicing elit.
				</p>
				<p>
					<Button variant="primary">Call to action!</Button>
				</p>
			</Jumbotron>
		</Container>
	);
};
