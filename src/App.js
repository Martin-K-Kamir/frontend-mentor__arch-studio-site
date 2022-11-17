import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import ScrollToTop from "./react/utilities/ScrollToTop";
import Header from "./react/components/Header";
import Footer from "./react/components/Footer";
import Home from "./react/pages/Home";
import About from "./react/pages/About";
import Portfolio from "./react/pages/Portfolio";
import Contact from "./react/pages/Contact";
import ComingSoon from "./react/pages/ComingSoon";
import {useState} from "react";


export default function App() {
	const [activeLink, setActiveLink] = useState('')

	function handleLinkClick(link) {
		setActiveLink(link)
	}

	return (<div className="App">
		<Router>
			<ScrollToTop>
				<Header handleLinkClick={handleLinkClick} activeLink={activeLink}/>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/portfolio" element={<Portfolio/>}/>
					<Route path="/about-us" element={<About/>}/>
					<Route path="/contact" element={<Contact/>}/>
					<Route path="/coming-soon" element={<ComingSoon/>}/>
				</Routes>
				<Footer handleLinkClick={handleLinkClick} activeLink={activeLink}/>
			</ScrollToTop>
		</Router>
	</div>);
}

