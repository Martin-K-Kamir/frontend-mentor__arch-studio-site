import Icon from "./Icon";
import {Link} from 'react-router-dom'
import React, {useEffect, useState} from "react";

export default function Button(props) {
	const [iconType, setIconType] = useState('');

	const Anchor = props.href ? 'a' : Link;

	useEffect(() => {
		setIconType(props.icon?.type ? props.icon.type : 'arrow-right')
	})

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
			{props.href || props.to ?
				<Anchor href={props.href}
						to={props.to}
				        rel="noreferrer"
				        target={props.newTab ? '_blank' : '_self'}
				        aria-label={props.label}
				        className={props.utils ? `[ btn ] [ ${props.utils} ]` : 'btn'}
				        data-type={props.type}
				        tabIndex={props.tabIndex}
				>
					{renderContent(props)}
				</Anchor>
				:
				<button
					aria-label={props.label}
					className={props.utils ? `[ btn ] [ ${props.utils} ]` : 'btn'}
					data-type={props.type}
					tabIndex={props.tabIndex}
				>
					{renderContent(props)}
				</button>}
		</>
	);
}