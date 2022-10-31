import Navigation from "./Navigation";
import Logo from "./Logo";
import Button from "./Button";
import {Link} from "react-router-dom";
import Icon from "./Icon";


export default function Footer() {
	return (
		<footer className="footer">
			<div className="[ footer__container ] [ bg-neutral-2 ]">
				<Link to="/" aria-label="homepage"><Logo type="box"/></Link>
				<div>
					<Navigation label="footer"/>
					<p className="fg-neutral-5 fs-1 fw-2">Challenge by <a href="https://www.frontendmentor.io/home">Frontend Mentor</a>. Coded by Martin Kamír.</p>
					<ul className="socials" role="list">
						<li>
							<a target="_blank" href="https://martinkamir.com/" aria-label="author's website">
								<Icon name="martinkamir"/>
							</a>
						</li>
						<li>
							<a target="_blank" href="https://github.com/Martin-K-Kamir" aria-label="github">
								<Icon name="github"/>
							</a>
						</li>
						<li>
							<a target="_blank" href="https://www.linkedin.com/in/martin-kam%C3%ADr-2967aa222/" aria-label="linkedin">
								<svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="icon-linkedin">
									<path fill="#1B1D23"
									      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
								</svg>
							</a>
						</li>
					</ul>
				</div>
				<Button href="#" content="See Our Portfolio"/>
			</div>
		</footer>
	);
}