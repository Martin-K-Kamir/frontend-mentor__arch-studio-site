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
			<div className="[ stack ] [ space-fluid-9 ]">
				<Hero type="slider"
				      slider={[
					      {
						      image: {name: 'hero-paramour', widths: [1110]},
						      title: "Project Paramour",
						      desc: "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
						      button: {to: "/portfolio", content: "See Our Portfolio"},
					      },
					      {
						      image: {name: 'hero-seraph', widths: [1110]},
						      title: "Seraph Station",
						      desc: "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
						      button: {to: "/portfolio", content: "See Our Portfolio"},
					      },
					      {
						      image: {name: 'hero-federal', widths: [1110]},
						      title: "Federal II Tower",
						      desc: "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
						      button: {to: "/portfolio", content: "See Our Portfolio"},
					      },
					      {
						      image: {name: 'hero-trinity', widths: [1110]},
						      title: "Trinity Bank Tower",
						      desc: "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
						      button: {to: "/portfolio", content: "See Our Portfolio"},
					      },
				      ]}
				      width={1110}
				      height={720}
				/>

				<section className="wrapped">
					<div className="[ wrapper ] [ relative ]">
						<div className="[ even-columns ] [ align-end ]">
							<div className="stack">
								<p className="[ title-4 ] [ fg-neutral-2 title-floated hide//below-lg ]">Welcome</p>
								<h2 className="[ title-2 ] [ title-border//below-lg ]">Welcome to Arch&nbsp;Studio</h2>
								<p className="[ desc-1 ] [ fg-neutral-5 measure-5 space-3 ]">
									We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large
									network put us in a strong position to deliver exceptional results.
								</p>
								<p className="[ desc-1 ] [ fg-neutral-5 measure-5 ]">
									Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and
									delight.
								</p>
								<p className="[ desc-1 ] [ fg-neutral-5 measure-5 ]">
									We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area
									to
									create truly stunning projects that will stand the test of time.
								</p>
							</div>
							<Image lazy={true} classes="[ hide//below-lg ]" dir="home" name="welcome" widths={[350]} width={395} height={641}/>
						</div>
					</div>
				</section>

				<Cover title="Small team, big ideas" button={{to: "/about-us", content: "About Us"}} image={{ lazy: true, dir: 'home', name: 'small-team', widths: [375, 573, 1110], width: 1110, height: 560 }}/>

				<section>
					<div className="wrapper">
						<div className="[ stack ] [ space-4 ]">
							<div className="[ even-columns ] [ align-center ]">
								<h2 className="title-2">Featured</h2>
								<Button to="/portfolio" utils="self-justify-end hide//below-md" content="See All"/>
							</div>
							<ul className="[ switcher ] [ measure-7 ]" data-counter={true} role="list">
								<li>
									<CardProject image={{dir: 'home', name: 'hero-seraph', widths: [375, 573, 1110], lazy: true, width: 348, height: 523}} title="Seraph Station" date="September 2019" to="/coming-soon"/>
								</li>
								<li>
									<CardProject image={{dir: 'home', name: 'hero-federal', widths: [375, 573, 1110], lazy: true, width: 348, height: 523}} title="Federal II Tower" date="March 2017" to="/coming-soon"/>
								</li>
								<li>
									<CardProject image={{dir: 'home', name: 'hero-trinity', widths: [375, 573, 1110], lazy: true, width: 348, height: 523}} title="Trinity Bank Tower" date="September 2010" to="/coming-soon"/>
								</li>
							</ul>
							<Button to="/portfolio" utils="hide//above-md" type="full" content="See All"/>
						</div>
					</div>
				</section>
			</div>
		</main>

	);
}