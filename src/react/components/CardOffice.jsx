import Button from "./Button";

export default function CardOffice(props) {
	return (
		<address className="[ card-address ] [ stack ]">
			<p>{props.title}</p>
			<p className="desc">Mail : <a href={`mailto:${props.email}`}>{props.email}</a></p>
			<p className="desc">Address : {props.address}</p>
			<p className="desc">Phone : <a href={`tel:${props.phone}`}>{props.phone}</a></p>
			<Button href={props.href} type="ghost" newTab={true} content="View on Map"/>
		</address>
	);
}