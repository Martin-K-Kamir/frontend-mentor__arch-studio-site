import CardProject from "./CardProject";
import CardMember from "./CardMember";
import CardOffice from "./CardOffice";


export default function Cards(props) {
	function renderCard(data) {
		switch (props.type) {
			case "project":
				return (
					<CardProject image={data.image} title={data.title} date={data.date} href={data.href}/>
				)
			case "member":
				return (
					<CardMember image={data.image} name={data.name} role={data.role} socials={data.socials}/>
				)
			case "office":
				return (
					<CardOffice title={data.title} email={data.email} address={data.address} phone={data.phone} href={data.href}/>
				)
			default:
				return (
					<div>🤔</div>
				)
		}
	}

	return (
		<ul className={props.utils ? `[ grid ] [ ${props.utils} ]` : 'grid'} data-counter={props.counter} role="list">
			{props.data.map((card, index) => (
				<li key={`card${index}`}>
					{renderCard(card)}
				</li>
			))}
		</ul>
	);
}