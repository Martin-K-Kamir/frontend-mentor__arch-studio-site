import React from "react";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import Cards from "../components/Cards";
import data from "../../data";
import PageLabel from "../components/PageLabel";
import Map from "../components/Map";

export default function Contact() {
	return (<main>
		<PageLabel page="Contact"/>
		<div className="[ stack ] [ space-fluid-9 ]">
			<Hero image={{dir: 'contact', widths: [375, 573, 635]}}
			      title="Tell us about your project"
			      subtitle="Contact"
			      desc="We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!"
			/>

			<section>
				<div className="wrapper">
					<div className="[ switcher ] [ space-4 measure-7 ]">
						<h2 className="[ title-2 ] [ measure-1 ]">Contact Details</h2>
						<div><Cards type="office" utils="measure-3 space-4" data={data.offices}/></div>
					</div>
				</div>
			</section>

			<section>
				<div className="wrapped">
					<Map/>
				</div>
			</section>

			<section>
				<div className="wrapper">
					<div className="[ switcher ] [ space-5 measure-7 ]">
						<h2 className="[ title-2 ] [ measure-1 ]">Contact with&nbsp;us</h2>
						<ContactForm/>
					</div>
				</div>
			</section>
		</div>
	</main>);
}