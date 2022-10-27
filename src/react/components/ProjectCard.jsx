export default function ProjectCard(props) {

	function renderContent(data) {
		return (
			<div style={{backgroundImage: data.img}}>
				<p>{data.title}</p>
				<p>{data.desc}</p>
			</div>
		)
	}

	function RenderCard(data) {
		return (
			<a href={data.href}>
				{renderContent(data)}
			</a>
		)
	}

	function RenderCards(data) {
		return (
			<ul className="grid" role="list">
				{data.map((card, index) => (
					<li>
						<RenderCard key={index} href={card.href} img={card.img} title={card.title} desc={card.desc}/>
					</li>
				))}
			</ul>
		)
	}

	return (
		props.cards ? RenderCards(props.cards) : RenderCard(props)
	);
}