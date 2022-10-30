import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


import ScrollToTop from "./react/utilities/ScrollToTop";
import Header from "./react/components/Header";
import Footer from "./react/components/Footer";
import Home from "./react/pages/Home";
import About from "./react/pages/About";
import Portfolio from "./react/pages/Portfolio";
import Contact from "./react/pages/Contact";
import ComingSoon from "./react/pages/ComingSoon";


export default function App() {
	return (
		<div className="App">
			<Router>
				<ScrollToTop>
					<Header/>
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

		</div>
	)
		;
}

