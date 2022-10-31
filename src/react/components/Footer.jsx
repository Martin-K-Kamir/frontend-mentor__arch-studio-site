import Navigation from "./Navigation";
import Logo from "./Logo";
import Button from "./Button";
import {Link} from "react-router-dom";


export default function Footer() {
	return (
		<footer className="footer">
			<div className="[ footer__container ] [ bg-neutral-2 ]">
				<Link to="/" aria-label="homepage"><Logo type="box"/></Link>
				<Navigation label="footer"/>
				<Button href="#" content="See Our Portfolio"/>
			</div>
		</footer>
	);
}