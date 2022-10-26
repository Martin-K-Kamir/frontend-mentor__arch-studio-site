export default function Button(props) {
	return (
		<>
			{props.href ? <a href={props.href}>{props.content}</a>
			:
			<button>{props.content}</button>}
		</>
	);
}