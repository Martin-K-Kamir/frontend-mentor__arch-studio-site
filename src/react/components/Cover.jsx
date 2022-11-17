import Button from "./Button";
import React from "react";
import Image from "./Image";

export default function Cover(props) {
	return (
		<section className={`[ cover ] [ wrapped stacked ] [ ${props.utils ? props.utils : 'bg-neutral-7 fg-neutral-1'} darken-image ]`}>
			{props.image?.name && <Image lazy={props.image.lazy} dir={props.image.dir} name={props.image.name} widths={props.image.widths} width={props.image.width} height={props.image.height}/>}
			<div className="[ wrapper stack ] [ self-align-center ]">
				<h2 className="[ title-2 ] [ measure-1 ]">{props.title}</h2>
				{props.desc ? <p className="desc-1">{props.desc}</p> : null}
				{props.button ? <Button href={props.button.href} content={props.button.content} utils="space-4" icon={props.button.type}/> : null}
			</div>
		</section>
	);
}