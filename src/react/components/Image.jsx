export default function Image(props) {


	return (
		<picture className={props.classes}>
			{props.widths && <>
				<source sizes={props.sizes ? props.sizes : ''} type="image/webp" srcSet={`${props.widths.map(width => (
						`assets/images/${props.dir}/${props.name}-${width}.webp ${width}w`))}`}/>
				<source sizes={props.sizes ? props.sizes : ''} type="image/jpeg" srcSet={`${props.widths.map(width => (
						`assets/images/${props.dir}/${props.name}-${width}.jpg ${width}w`))}`}/>
			</>
			}

			<img src={`assets/images/${props.dir}/${props.widths ? props.name + '-' + Math.max(...props.widths) : props.name}.jpg`}
			     alt={props.alt ? props.alt : ""}
			     aria-hidden={props.alt ? false : true}/>
		</picture>
	);
}