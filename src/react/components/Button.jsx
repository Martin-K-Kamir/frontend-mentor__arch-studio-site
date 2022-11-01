import Icon from "./Icon";
import React, {useState} from "react";

export default function Button(props) {
	const [iconType, setIconType] = useState(props.icon?.type ? props.icon.type : 'arrow');

	function renderContent(props) {
		return (
			<>
				{(props.icon?.lead && !(props.icon === 'none')) && <Icon type={iconType} lead={props.icon?.lead}/>}
				{props.content}
				{(!props.icon?.lead && !(props.icon === 'none')) && <Icon type={iconType} rear={!props.icon?.lead}/>}
			</>
		);
	}


	return (
		<>
			{props.href ? <a href={props.href} rel={props.newTab ? 'noreferrer' : ''} target={props.newTab ? '_blank' : ''} aria-label={props.label} className="btn" data-type={props.type}>{renderContent(props)}</a>
			:
			<button aria-label={props.label} className="btn" datatype={props.type}>{renderContent(props)}</button>}
		</>
	);
}