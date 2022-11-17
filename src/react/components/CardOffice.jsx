import Button from "./Button";

export default function CardOffice(props) {
	return (
		<address className="[ card-office ] [ stack ]">
			<p className="fw-4">{props.title}</p>
			<div className="[ card-office__content ] [ stack ]">
				<ul className="fg-neutral-5 self-align-start" role="list">
					<li><p className="desc-1">Mail : <a href={`mailto:${props.email}`}>{props.email}</a></p></li>
					<li><p className="desc-1">Address : {props.address}</p></li>
					<li><p className="desc-1">Phone : <a href={`tel:${props.phone}`}>{props.phone}</a></p></li>
				</ul>
				<Button href={props.href} type="ghost" utils="space-4" content="View on Map"/>
			</div>
		</address>
	);
}