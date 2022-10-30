
export default function Icon(props) {
	return (
		<>
			<svg className="icon" data-lead={props.lead} data-rear={props.rear} aria-hidden="true">
				<use xlinkHref={`assets/icons/sprite.svg#icon-${props.name}`} />
			</svg>
		</>
	);
}