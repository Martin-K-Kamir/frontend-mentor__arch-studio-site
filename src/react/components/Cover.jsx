import Button from "./Button";
import React from "react";
import Image from "./Image";

export default function Cover(props) {
	return (
		<section className="cover">
			{props.image?.name && <Image dir={props.image.dir} name={props.image.name} widths={props.image.widths}/>}
			<div className={`[ cover__content ] [ ${props.utils ? props.utils : 'fg-neutral-1'} ]`}>
				<h2 className="title-2">{props.title}</h2>
				{props.desc ? <p className="desc">{props.desc}</p> : null}
				{props.button ? <Button href={props.button.href} content={props.button.content} icon={props.button.type}/> : null}
			</div>
		</section>
	);
}