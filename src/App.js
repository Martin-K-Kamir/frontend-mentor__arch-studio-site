import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import ScrollToTop from "./react/utilities/ScrollToTop";
import SiteHead from "./react/components/SiteHead";
import Footer from "./react/components/Footer";
import Home from "./react/pages/Home";
import About from "./react/pages/About";
import Portfolio from "./react/pages/Portfolio";
import Contact from "./react/pages/Contact";
import ComingSoon from "./react/pages/ComingSoon";
import {useState} from "react";


export default function App() {

	return (<div className="App">
		<Router>
			<ScrollToTop>
				<SiteHead/>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/portfolio" element={<Portfolio/>}/>
					<Route path="/about-us" element={<About/>}/>
					<Route path="/contact" element={<Contact/>}/>
					<Route path="/coming-soon" element={<ComingSoon/>}/>
				</Routes>
				<Footer/>
			</ScrollToTop>
		</Router>
	</div>);
}

