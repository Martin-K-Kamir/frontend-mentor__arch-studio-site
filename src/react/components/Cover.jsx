import Button from "../elements/Button";
import React from "react";

export default function Cover(props) {
	return (
		<section className="cover">
			<div className="wrapper stack">
				<h2>{props.title}</h2>
				{props.desc ? <p>{props.desc}</p> : null}
				{props.button ? <Button href={props.button.href} content={props.button.content}/> : null}
			</div>
		</section>
	);
}