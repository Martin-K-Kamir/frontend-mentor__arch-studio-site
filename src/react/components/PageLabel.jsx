export default function PageLabel(props) {
	return (
		<div className="page-label" aria-hidden={true}>
			<div>{props.page}</div>
		</div>
	);
}