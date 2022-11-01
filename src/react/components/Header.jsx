import React, {useState} from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
import {Link} from "react-router-dom";


export default function Header() {
	const [navOpen, setNavOpen] = useState(false);

	function handleToggleNav() {
		setNavOpen(!navOpen);
	}


	return (<header className="header">
		<div className="[ header__container ] [ bg-neutral-1 ]">
			<div className="[ header__content ] [ wrapper align-center ]">
				<Link to="/" aria-label="homepage"><Logo/></Link>
				<button className="btn-hamburger" aria-controls="navigation-primary" aria-expanded={navOpen} aria-label="menu" onClick={handleToggleNav}>
					<span aria-hidden={true}></span>
					<span aria-hidden={true}></span>
					<span aria-hidden={true}></span>
					<span aria-hidden={true}></span>
				</button>
				<Navigation label="primary" open={navOpen}/>
			</div>
		</div>
	</header>);
};
