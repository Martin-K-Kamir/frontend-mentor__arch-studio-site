import {NavLink} from 'react-router-dom'


export default function Navigation(props) {
	const links = props.links ? props.links : ['portfolio', 'about-us', 'contact'];

	function handleLinkClick() {
		props.handleToggleNav()
	}

	function handleNavClick(e) {
		if (e.target === e.currentTarget) {
			props.handleToggleNav()
		}
	}

	return (
		<nav className="[ navigation ] [ space-fluid-4 ]" id={`navigation-${props.label}`} onClick={e => handleNavClick(e)} data-open={props.navOpen}>
			<ul className="direction-column//below-md" aria-label={`navigation ${props.label}`} role="list">
				{links.map((link, index) => <li key={`key${index}`}>
					<NavLink exact="true" to={`/${link}`} onClick={handleLinkClick}>
						{link.replace('-', ' ')}
					</NavLink>
				</li>)}
			</ul>
		</nav>
	);
}