import Image from "./Image";

export default function CardProject(props) {
	return (
		<a href={props.href} className="card-project">
			<Image dir={props.image.dir} name={props.image.name} widths={props.image.widths}/>
			<p className="title-1">{props.title}</p>
			<p className="desc">{props.date}</p>
		</a>
	);
}