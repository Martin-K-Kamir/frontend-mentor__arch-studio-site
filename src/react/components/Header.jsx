import React, {useEffect, useState} from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
import {Link} from "react-router-dom";
import useScrollbarSize from "react-scrollbar-size";

export default function Header(props) {
	const {height, width} = useScrollbarSize();
	const [navOpen, setNavOpen] = useState(false);
	const [activeLink, setActiveLink] = useState('')
	const [isScrolling, setIsScrolling] = useState(false);

	useEffect(() => {
		setActiveLink(props.activeLink)
	}, [props.activeLink])

	useEffect(() => {
		const html = document.querySelector("html");
		if (html && isScrolling) {
			html.style.position = navOpen ? "fixed" : "";
			html.style.overflowY = navOpen ? "scroll" : "";
			html.style.width = navOpen ? "100%" : "";
		}
	}, [navOpen]);

	function handleToggleNav() {
		if (window.document.body.clientWidth < 768 - width) {
			setIsScrolling(true)
			setNavOpen(!navOpen);
		}
	}

	return (<header className="header">
		<div className="[ header__container ] [ bg-neutral-1 ]">
			<div className="[ header__content ] [ wrapper ] [ align-center ]">
				<Link onClick={() => (props.handleLinkClick('home'), setNavOpen(false))} to="/" aria-label="homepage"><Logo/></Link>
				<button className="btn-hamburger" aria-controls="navigation-primary" aria-expanded={navOpen} aria-label="menu" onClick={handleToggleNav}>
					<span aria-hidden={true}></span>
					<span aria-hidden={true}></span>
					<span aria-hidden={true}></span>
					<span aria-hidden={true}></span>
				</button>
				<Navigation label="primary" handleLinkClick={props.handleLinkClick} handleToggleNav={handleToggleNav} activeLink={activeLink} open={navOpen}/>
			</div>
		</div>
	</header>);
};
