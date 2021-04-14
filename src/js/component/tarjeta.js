import React from "react";
import { Card, CardDeck, Button, Container } from "react-bootstrap";
import rigoImage from "../../img/rigo-baby.jpg";

export const Tarjeta = () => {
	return (
		<Container>
			<CardDeck>
				<Card style={{ width: "10rem" }}>
					<Card.Img variant="top" src={rigoImage} />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title
							and make up the bulk of the cards content.
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
				<Card style={{ width: "10rem" }}>
					<Card.Img variant="top" src={rigoImage} />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title
							and make up the bulk of the cards content.
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
				<Card style={{ width: "10rem" }}>
					<Card.Img variant="top" src={rigoImage} />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title
							and make up the bulk of the cards content.
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
				<Card style={{ width: "10rem" }}>
					<Card.Img variant="top" src={rigoImage} />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title
							and make up the bulk of the cards content.
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
			</CardDeck>
		</Container>
	);
};
