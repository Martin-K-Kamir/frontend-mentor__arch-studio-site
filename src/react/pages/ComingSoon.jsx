import Cover from "../components/Cover";
import React from "react";

export default function ComingSoon() {
	return (
		<main className="singlepage">
			<Cover title="Coming soon" desc="This page is currently under construction" button={{href: "/", content: "Homepage"}}
			       image={{dir: 'home', name: 'small-team', widths: [375, 573, 1110]}}/>
			<section>
				<div className="wrapper">
					<div className="boxes">
						<div className="c">
							<div className="box space-1"></div>
							<div className="box space-2"></div>
							<div className="box space-3"></div>
							<div className="box space-4"></div>
							<div className="box space-5"></div>
							<div className="box space-6"></div>
							<div className="box space-7"></div>
							<div className="box space-8"></div>
							<div className="box space-9"></div>
						</div>
						<div className="c">
							<div className="box blue space-fluid-1"></div>
							<div className="box blue space-fluid-2"></div>
							<div className="box blue space-fluid-3"></div>
							<div className="box blue space-fluid-4"></div>
							<div className="box blue space-fluid-5"></div>
							<div className="box blue space-fluid-6"></div>
							<div className="box blue space-fluid-7"></div>
							<div className="box blue space-fluid-8"></div>
							<div className="box blue space-fluid-9"></div>
							<div className="box blue space-fluid-10"></div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}