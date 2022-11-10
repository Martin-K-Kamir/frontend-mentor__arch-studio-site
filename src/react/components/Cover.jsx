import Button from "./Button";
import React from "react";
import Image from "./Image";

export default function Cover(props) {
	return (
		<section className={`[ cover ] [ wrapped stacked ] [ ${props.utils ? props.utils : 'bg-neutral-7 fg-neutral-1'} darken-image ]`}>
			{props.image?.name && <Image dir={props.image.dir} name={props.image.name} widths={props.image.widths}/>}
			<div className="[ wrapper ] [ self-align-center ]">
				<h2 className="title-2">{props.title}</h2>
				{props.desc ? <p className="desc-1">{props.desc}</p> : null}
				{props.button ? <Button href={props.button.href} content={props.button.content} icon={props.button.type}/> : null}
			</div>
		</section>
	);
}