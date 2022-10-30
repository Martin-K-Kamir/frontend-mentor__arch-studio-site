export default function Image(props) {
	return (
		<picture className={props.classes}>
			{props.widths && <source srcSet={`${props.widths.map(width => (
						`assets/images/${props.dir}/${props.name}-${width}.webp ${width}w,
						assets/images/${props.dir}/${props.name}-${width}.jpg ${width}w,`
					))}`}/>
			}

			<img src={`assets/images/${props.dir}/${props.widths ? props.name + '-' + Math.max(...props.widths) : props.name}.jpg`}
			     alt={props.alt ? props.alt : ""}
			     aria-hidden={props.alt ? false : true}/>
		</picture>
	);
}