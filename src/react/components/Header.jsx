import React, {useEffect, useState} from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
import {Link} from "react-router-dom";


export default function Header(props) {
	const [navOpen, setNavOpen] = useState(false);
	const [activeLink, setActiveLink] = useState('')

	useEffect(() => {
		setActiveLink(props.activeLink)
	})

	function handleToggleNav() {
		setNavOpen(!navOpen);
	}

	return (<header className="header">
		<div className="[ header__container ] [ bg-neutral-1 ]">
			<div className="[ header__content ] [ wrapper ] [ align-center ]">
				<Link onClick={() => props.handleLinkClick('home')} to="/" aria-label="homepage"><Logo/></Link>
				<button className="btn-hamburger" aria-controls="navigation-primary" aria-expanded={navOpen} aria-label="menu" onClick={handleToggleNav}>
					<span aria-hidden={true}></span>
					<span aria-hidden={true}></span>
					<span aria-hidden={true}></span>
					<span aria-hidden={true}></span>
				</button>
				<Navigation label="primary" handleLinkClick={props.handleLinkClick} activeLink={activeLink} open={navOpen}/>
			</div>
		</div>
	</header>);
};
