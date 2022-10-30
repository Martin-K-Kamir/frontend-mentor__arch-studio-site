import Icon from "./Icon";
import React, {useState} from "react";

export default function Button(props) {
	const [iconName, setIconName] = useState(props.icon?.name ? props.icon.name : 'arrow');

	function renderContent(props) {
		return (
			<>
				{(props.icon?.lead && !(props.icon === 'none')) && <Icon name={iconName} lead={props.icon?.lead}/>}
				{props.content}
				{(!props.icon?.lead && !(props.icon === 'none')) && <Icon name={iconName} rear={!props.icon?.lead}/>}
			</>
		);
	}


	return (
		<>
			{props.href ? <a href={props.href} target={props.newTab ? '_blank' : ''} aria-label={props.label} className="btn" data-type={props.type}>{renderContent(props)}</a>
			:
			<button aria-label={props.label} className="btn" datatype={props.type}>{renderContent(props)}</button>}
		</>
	);
}