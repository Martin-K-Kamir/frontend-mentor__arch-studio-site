import React from "react";
import Image from "./Image";
import Tabs from "./Tabs";

export default function Slider(props) {
	return (
		<>
			<div className="slider">
				{props.names.map((name, index) => <Image key={`image${index}`} dir={props.dir} name={name} widths={props.widths}/>)}
			</div>
			<Tabs tabs={props.names}/>
		</>
	);
}