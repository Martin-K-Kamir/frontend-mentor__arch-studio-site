import React from "react";
import Hero from "../components/Hero";
import Cover from "../components/Cover";
import Button from "../components/Button";
import PageLabel from "../components/PageLabel";
import Image from "../components/Image";
import CardProject from "../components/CardProject";

export default function Home() {

	return (
		<main>
			<PageLabel page="home"/>
			<Hero type="slider"
			      image={{dir: 'home', names: ['hero-federal', 'hero-paramour', 'hero-seraph', 'hero-trinity'], widths: [375, 573, 1110]}}
			      title="Project Paramour"
			      desc="Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture."
			      button={{href: "/portfolio", content: "See Our Portfolio"}}
			/>

			<section className="wrapped">
				<div className="[ wrapper ] [ relative ]">
					<div className="[ even-columns ] [ align-end ]">
						<div className="stack">
							<p className="[ title-4 ] [ fg-neutral-3 title-floated hide//below-md ]">Welcome</p>
							<h2 className="[ title-2 ] [ title-border//below-md ]">Welcome to Arch Studio</h2>
							<p className="[ desc-1 ] [ fg-neutral-5 ]">
								We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large
								network put us in a strong position to deliver exceptional results.
							</p>
							<p className="[ desc-1 ] [ fg-neutral-5 ]">
								Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.
							</p>
							<p className="[ desc-1 ] [ fg-neutral-5 ]">
								We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to
								create truly stunning projects that will stand the test of time.
							</p>
						</div>
						<Image classes="[ hide//below-lg ]" dir="home" name="welcome" widths={[350]}/>
					</div>
				</div>
			</section>

			<Cover title="Small team, big ideas" button={{href: "/about-us", content: "About Us"}} image={{dir : 'home', name : 'small-team', widths : [375, 573, 1110]}}/>

			<section>
				<div className="wrapper stack">
					<div className="[ even-columns ] [ align-center ]">
						<h2 className="title-2">Featured</h2>
						<Button href="/portfolio" utils="self-justify-end hide//below-md" content="See All"/>
					</div>
					<ul className="[ switcher ] [ measure-7 ]" role="list">
						<li>
							<CardProject image={{dir : 'home', name : 'hero-seraph', widths : [375, 573, 1110]}} title="Seraph Station" date="September 2019" href="/coming-soon"/>
						</li>
						<li>
							<CardProject image={{dir : 'home', name : 'hero-federal', widths : [375, 573, 1110]}} title="Federal II Tower" date="March 2017" href="/coming-soon"/>
						</li>
						<li>
							<CardProject image={{dir : 'home', name : 'hero-trinity', widths : [375, 573, 1110]}} title="Trinity Bank Tower" date="September 2010" href="/coming-soon"/>
						</li>
					</ul>
					<Button href="/portfolio" utils="hide//above-md" type="full" content="See All"/>
				</div>
			</section>
		</main>

	);
}