import React from "react";
import Hero from "../components/Hero";
import Cover from "../components/Cover";
import Button from "../components/Button";
import PageLabel from "../components/PageLabel";
import Cards from "../components/Cards";
import data from "../../data";
import Image from "../components/Image";

export default function Home() {

	return (
		<main>
			<PageLabel page="home"/>
			<Hero image={{dir: 'home', names: ['hero-federal', 'hero-paramour', 'hero-seraph', 'hero-trinity'], widths: [375, 573, 1110]}}
			      title="Project Paramour"
			      desc="Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture."
			      button={{href: "/portfolio", content: "See Our Portfolio"}}
			/>

			<section>
				<div className="wrapper">
					<div className="columns">
						<div className="stack">
							<p className="title-4">Welcome</p>
							<h2 className="title-2">Welcome to Arch Studio</h2>
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
						<Image dir="home" name="welcome" widths={[350]}/>
					</div>
				</div>
			</section>

			<Cover title="Small team, big ideas" button={{href: "/about-us", content: "About Us"}}/>

			<section>
				<div className="wrapper stack">
					<div className="columns">
						<h2 className="title-2">Featured</h2>
						<Button href="/portfolio" content="See All"/>
					</div>
					<Cards type="project" data={[data.portfolio[0], data.portfolio[1], data.portfolio[2]]}/>
					<Button href="/portfolio" content="See All"/>
				</div>
			</section>
		</main>

	);
}