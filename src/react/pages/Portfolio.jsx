import React from "react";
import Cards from "../components/Cards";
import data from "../../data";
import PageLabel from "../components/PageLabel";


export default function Portfolio() {
	return (
		<main>
			<PageLabel page="portfolio"/>
			<div className="[ wrapper ] [ space-4 ]">
				<Cards type="project" data={data.portfolio} utils="measure-3"/>
			</div>
		</main>
	);
}