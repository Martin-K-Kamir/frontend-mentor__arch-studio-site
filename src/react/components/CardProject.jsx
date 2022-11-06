import Image from "./Image";

export default function CardProject(props) {
	return (
		<a href={props.href} className="[ card-project ] [ stacked ] [ darken-image ]">
			<Image dir={props.image.dir} name={props.image.name} widths={props.image.widths} sizes={props.image.sizes}/>
			<div className="[ card-project__content ] [ fg-neutral-1 self-align-end ]">
					<p className="title-1">{props.title}</p>
					<p className="desc">{props.date}</p>
			</div>
		</a>
	);
}