import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav } from "react-bootstrap";

export const Menu = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
				<Nav className="ml-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#about">About</Nav.Link>
					<Nav.Link href="#services">Services</Nav.Link>
					<Nav.Link href="#contact">Contact</Nav.Link>
				</Nav>
			</Navbar>
		</>
	);
};
