import Hero from "../components/Hero";
import React from "react";

export default function About() {
	return (
		<main>
			<Hero hasBox={true}
			      title="Your team of professionals"
			      subtitle="About"
			      desc="Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings."
			/>


			<section>
				<div className="wrapper">
					<div className="columns">
						<div className="stack">
							<p className="subtitle">Welcome</p>
							<h2 className="title">Welcome to Arch Studio</h2>
							<p className="desc">
								We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large
								network put us in a strong position to deliver exceptional results.
							</p>
							<p className="desc">
								Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.
							</p>
							<p className="desc">
								We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to
								create truly stunning projects that will stand the test of time.
							</p>
						</div>
						<img src="" alt=""/>
					</div>
				</div>
			</section>
		</main>
	);
}