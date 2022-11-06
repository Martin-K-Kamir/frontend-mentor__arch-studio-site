import Icon from "./Icon";
import React, {useState} from "react";

export default function Button(props) {
	const [iconType, setIconType] = useState(props.icon?.type ? props.icon.type : 'arrow-right');

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
			{props.href ?
				<a href={props.href} rel="noreferrer" target={props.newTab ? '_blank' : '_self'} aria-label={props.label}
				   className={props.utils ? `[ btn ] [ ${props.utils} ]` : 'btn'} data-type={props.type}>{renderContent(props)}</a>
				:
				<button aria-label={props.label} className={props.utils ? `[ btn ] [ ${props.utils} ]` : 'btn'} data-type={props.type}>{renderContent(props)}</button>}
		</>
	);
}