export default function Image(props) {

	function fetchPriority() {
		if (props.priorityIndex === 0 || props.priority) {
			return 'high';
		} else if (props.priorityIndex > 1) {
			return 'low';
		} else {
			return 'auto'
		}
	}

	return (
		<picture className={props.classes}>
			{props.widths && <>
				<source sizes={props.sizes ? props.sizes : ''} type="image/webp" srcSet={`${props.widths.map(width => (
					`assets/images/${props.dir}/${props.name}-${width}.webp ${width}w`))}`}/>
				<source sizes={props.sizes ? props.sizes : ''} type="image/jpeg" srcSet={`${props.widths.map(width => (
					`assets/images/${props.dir}/${props.name}-${width}.jpg ${width}w`))}`}/>
			</>
			}

			<img loading={props.lazy ? "lazy" : "eager"} fetchpriority={fetchPriority()}
			     src={`assets/images/${props.dir}/${props.widths ? props.name + '-' + Math.max(...props.widths) : props.name}.jpg`}
			     alt={props.alt ? props.alt : ""}
			     width={props.width}
			     height={props.height}
			     aria-hidden={props.alt ? false : true}/>
		</picture>
	);
}