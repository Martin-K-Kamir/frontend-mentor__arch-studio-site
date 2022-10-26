import React, {useState} from "react";

import Button from "../elements/Button";

export default function Hero(props) {
	const [hasBox, setHasBox] = useState(props.hasBox ? props.hasBox : false);

	return (
		<section className="hero">
			<div className="wrapper">
				{props.imgSrc && <img src={props.imgSrc} alt={props.imgAlt} aria-hidden={props.imgAlt ? true : false}/>}
				<div className={`${hasBox ? 'hero__box' : 'hero__stacked'}`}>
					{props.subtitle && <h1>{props.subtitle}</h1>}
					<h1>{props.title}</h1>
					{props.desc && <p>{props.desc}</p>}
					{props.button ? <Button href={props.button.href} content={props.button.content}/> : null}
				</div>
			</div>
		</section>
	);
}