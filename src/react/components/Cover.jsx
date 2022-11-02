import Button from "./Button";
import React from "react";

export default function Cover(props) {
	return (
		<section className="[ cover ] [ bg-neutral-7 fg-neutral-1 ]">
			<div className="wrapper stack">
				<h2 className="title-2">{props.title}</h2>
				{props.desc ? <p className="desc">{props.desc}</p> : null}
				{props.button ? <Button href={props.button.href} content={props.button.content} icon={props.button.type}/> : null}
			</div>
		</section>
	);
}