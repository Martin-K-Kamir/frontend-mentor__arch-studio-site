export default function PageLabel(props) {
	return (
		<div className="page-label" aria-hidden={true}>
			<div className="page-label__container">
				<div className="[ page-label__content ] [ fg-neutral-3 fw-2 ]">
					{props.page}
				</div>
			</div>
		</div>
	);
}