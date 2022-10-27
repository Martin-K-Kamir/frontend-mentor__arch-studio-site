import ProjectCard from "../components/ProjectCard";
import React from "react";


export default function Portfolio() {
	return (
		<main>
			<ProjectCard cards={[
				{href: '#', img: 'cat.jpg', title: 'Project Del Sol', desc: 'View All Projects'},
				{href: '#', img: 'cat.jpg', title: '228B Tower', desc: 'View All Projects'},
				{href: '#', img: 'cat.jpg', title: 'Le Prototype', desc: 'View All Projects'},
			]}/>
		</main>
	);
}