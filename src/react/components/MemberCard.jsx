export default function MemberCard(props) {
	return (
		props.cards.map((card, index) => (
			<a href={card.href} >
			</a>
		))
	);
}