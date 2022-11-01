import {Link} from 'react-router-dom'


export default function Navigation(props) {
	return (
		<nav className="navigation" id={`navigation-${props.label}`} data-open={props.open}>
			<ul className="fw-4 line-height-1 direction-column//below-md" aria-label={`navigation ${props.label}`} role="list">
				<li><Link to="/portfolio">Portfolio</Link></li>
				<li><Link to="/about-us">About Us</Link></li>
				<li><Link to="/contact">Contact</Link></li>
			</ul>
		</nav>
	);
}