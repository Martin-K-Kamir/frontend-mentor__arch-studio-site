import Navigation from "./Navigation";
import Logo from "../elements/Logo";
import Button from "../elements/Button";


export default function Footer() {
	return (
		<footer className="footer">
			<div className="wrapper">
				<a href="#"><Logo/></a>
				<Navigation label="footer"/>
				<Button href="#" content="See Our Portfolio"/>
			</div>
		</footer>
	);
}