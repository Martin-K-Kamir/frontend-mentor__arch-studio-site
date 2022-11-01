import Image from "./Image";

export default function CardProject(props) {
	return (
		<a href={props.href} className="card-project">
			<Image dir={props.image.dir} name={props.image.name} widths={props.image.widths}/>
			<div className="[ card-project__content ] [ fg-neutral-1 ]">
				<p className="title-1">{props.title}</p>
				<p className="desc">{props.date}</p>
			</div>
		</a>
	);
}