import Hero from "../components/Hero";
import React from "react";
import Cards from "../components/Cards";
import data from "../../data";
import PageLabel from "../components/PageLabel";
import Image from "../components/Image";

export default function About() {
	return (
		<main>
			<PageLabel page="about us"/>
			<div className="[ stack ] [ space-fluid-9 ]">
				<Hero image={{dir: 'about', widths: [375, 573, 635]}}
				      title="Your team of professionals"
				      subtitle="About"
				      desc="Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings."
				/>

				<section>
					<div className="wrapper">
						<div className="even-columns">
							<div className="stack">
								<h2 className="[ title-2 ] [ title-border measure-1 ]">Our Heritage</h2>
								<p className="[ desc-1 ] [ fg-neutral-5 measure-5 ]">
									Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the
									most
									sought after boutique firms in the country.
								</p>
								<p className="[ desc-1 ] [ fg-neutral-5 measure-5 ]">
									Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider
									every
									detail from every surrounding element to inform our designs.
								</p>
								<p className="[ desc-1 ] [ fg-neutral-5 measure-5 ]">
									Our small team of world-class professionals provides input on every project.
								</p>
							</div>
							<Image classes="[ hide//below-lg ]" dir="about" name="heritage" widths={[540]}/>
						</div>
					</div>
				</section>

				<section>
					<div className="wrapper">
						<div className="[ switcher ] [ space-4 measure-7 ]">
							<h2 className="[ title-2 ] [ measure-1 ]">The<br/>Leaders</h2>
							<div>
								<Cards type="member" utils="space-4 measure-2" data={data.members}/>
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}