import Cover from "../components/Cover";
import React from "react";

export default function ComingSoon() {
	return (
		<main>
			<Cover title="Coming soon" desc="This page is currently under construction" button={{to: "/", content: "Homepage"}}
			       image={{dir: 'home', name: 'small-team', widths: [375, 573, 1110]}}/>
			<section>
			</section>
		</main>
	);
}