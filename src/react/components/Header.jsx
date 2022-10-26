import Navigation from "./Navigation";
import Logo from "../elements/Logo";


export default function Header() {
	return (
		<header className="header">
			<div className="wrapper">
				<a href="#"><Logo/></a>
				<Navigation label="primary"/>
				<button className="button-hamburger" aria-controls="navigation-primary" aria-expanded="false">
					<span className="sr-only">menu</span>
				</button>
			</div>
		</header>
	);
}