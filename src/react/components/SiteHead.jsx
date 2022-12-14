import React, {useEffect, useState} from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
import {Link} from "react-router-dom";
import useScrollbarSize from "react-scrollbar-size";

export default function SiteHead() {
	const {width} = useScrollbarSize();
	const [navOpen, setNavOpen] = useState(false);
	const [disableScroll, setDisableScroll] = useState(false);

	useEffect(() => {
		const html = document.querySelector("html");
		if (html && disableScroll) {
			html.style.position = navOpen ? "fixed" : "";
			html.style.overflowY = navOpen ? "scroll" : "";
			html.style.width = navOpen ? "100%" : "";
		}
	}, [navOpen]);

	function handleToggleNav() {
		if (!(window.document.body.clientWidth < 768 - width)) return;
		setDisableScroll(true)
		setNavOpen(!navOpen);
	}

	return (<header className="site-head">
		<div className="[ site-head__container ] [ bg-neutral-1 ]">
			<div className="[ site-head__content ] [ wrapper ] [ align-center ]">
				<Link onClick={() => (setNavOpen(false))} to="/" aria-label="homepage"><Logo/></Link>
				<button className="btn-hamburger" aria-controls="navigation-primary" aria-expanded={navOpen} aria-label="menu" onClick={handleToggleNav}>
					<span aria-hidden={true}></span>
					<span aria-hidden={true}></span>
					<span aria-hidden={true}></span>
					<span aria-hidden={true}></span>
				</button>
				<Navigation label="primary" handleToggleNav={handleToggleNav} navOpen={navOpen}/>
			</div>
		</div>
	</header>);
};
