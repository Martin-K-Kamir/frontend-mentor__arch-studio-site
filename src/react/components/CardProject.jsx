import Image from "./Image";

export default function CardProject(props) {

	console.log(props)
	return (
		<a href={props.href} className="[ card-project ] [ stacked ] [ darken-image ]">
			<Image priority={props.image.priority} lazy={props.image.lazy} dir={props.image.dir} name={props.image.name} widths={props.image.widths} sizes={props.image.sizes} width={props.image.width} height={props.image.height}/>
			<div className="[ card-project__content ] [ self-align-end ]">
					<p className="[ title-1 ] [ fg-neutral-1 ]">{props.title}</p>
					<p className="[ desc-1 ] [ fg-neutral-3 ]">{props.date}</p>
			</div>
		</a>
	);
}