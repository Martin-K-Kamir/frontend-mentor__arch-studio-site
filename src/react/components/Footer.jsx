import Navigation from "./Navigation";
import Logo from "./Logo";
import Button from "./Button";
import {Link} from "react-router-dom";
import Icon from "./Icon";
import {useEffect, useState} from "react";


export default function Footer(props) {
	const [activeLink, setActiveLink] = useState('')

	useEffect(() => {
		setActiveLink(props.activeLink)
	})
	return (
		<footer className="footer">
			<div className="[ footer__container ] [ bg-neutral-2 align-center direction-column//below-md ]">
				<Link onClick={() => props.handleLinkClick('home')} to="/" aria-label="homepage"><Logo type="box"/></Link>
				<div className="[ footer__lists ] [ direction-column align-center//below-md text-center//below-md ]">
					<Navigation handleLinkClick={props.handleLinkClick} activeLink={activeLink} label="footer"/>
					<p className="fs-1 fg-neutral-4">Challenge by <a href="https://www.frontendmentor.io/home">Frontend&nbsp;Mentor</a>. Coded&nbsp;by&nbsp;Martin&nbsp;Kamír.</p>
					<ul className="[ cluster ] [ space-3 ]" role="list">
						<li>
							<a rel="noreferrer" target="_blank" href="https://martinkamir.com/" aria-label="author's website">
								<Icon type="mkk"/>
							</a>
						</li>
						<li>
							<a rel="noreferrer" target="_blank" href="https://github.com/Martin-K-Kamir" aria-label="github">
								<Icon type="github"/>
							</a>
						</li>
						<li>
							<a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/martin-kam%C3%ADr-2967aa222/" aria-label="linkedin">
								<Icon type="linkedin"/>
							</a>
						</li>
					</ul>
				</div>
				<Button href="#" content="See Our Portfolio"/>
			</div>
		</footer>
	);
}