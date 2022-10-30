import Navigation from "./Navigation";
import Logo from "./Logo";
import Button from "./Button";
import {Link} from "react-router-dom";


export default function Footer() {
	return (
		<footer className="footer">
			<div className="wrapper">
				<Link to="/" aria-label="homepage"><Logo/></Link>
				<Navigation label="footer"/>
				<Button href="#" content="See Our Portfolio"/>
			</div>
		</footer>
	);
}