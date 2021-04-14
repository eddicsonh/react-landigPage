import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Menu } from "./menu.js";
import { Main } from "./main.js";
import { Tarjeta } from "./tarjeta.js";
import { Footer } from "./footer.js";
//create your first component
export function Home() {
	return (
		<div>
			<Menu />
			<Main />
			<Tarjeta />
			<Footer />
		</div>
	);
}
