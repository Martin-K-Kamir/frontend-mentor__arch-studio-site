import {Link} from 'react-router-dom'
import React, {useState, useEffect} from 'react'


export default function Navigation(props) {
	const [activeLink, setActiveLink] = useState('')
	const links = props.links ? props.links : ['portfolio', 'about-us', 'contact'];

	useEffect(() => {
		setActiveLink(props.activeLink)
	})

	return (
		<nav className="[ navigation ] [ space-fluid-4 ]" id={`navigation-${props.label}`} data-open={props.open}>
			<ul className="direction-column//below-md" aria-label={`navigation ${props.label}`} role="list">
				{links.map((link, index) => <li key={`key${index}`} data-type={activeLink === link} onClick={() => props.handleLinkClick(link)}><Link to={`/${link}`}>{link.replace('-', ' ')}</Link></li>)}
			</ul>
		</nav>
	);
}