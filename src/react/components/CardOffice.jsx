import Button from "./Button";

export default function CardOffice(props) {
	return (
		<address className="[ card-office ] [ stack ]">
			<p className="fw-4">{props.title}</p>
			<div className="card-office__content">
				<div className="fg-neutral-5">
					<p className="desc">Mail : <a href={`mailto:${props.email}`}>{props.email}</a></p>
					<p className="desc">Address : {props.address}</p>
					<p className="desc">Phone : <a href={`tel:${props.phone}`}>{props.phone}</a></p>
				</div>
				<Button href={props.href} type="ghost" newTab={true} content="View on Map"/>
			</div>
		</address>
	);
}