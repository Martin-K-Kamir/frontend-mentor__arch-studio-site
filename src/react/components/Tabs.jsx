export default function Tabs(props) {
	return (
		<ul>
			{props.tabs.map((tab, index) => (
				<li key={index}>
						<button>{index}</button>
				</li>
				))}
		</ul>
	);
}