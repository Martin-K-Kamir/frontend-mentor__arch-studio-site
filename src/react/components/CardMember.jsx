import Image from "./Image";
import Icon from "./Icon";

export default function CardMember(props) {

	function renderSocials() {
		return <div className="card-member__socials">
			{props.socials.map((social, index) => (
				<a href={social.href} key={`icon${index}`} rel="noreferrer" target="_blank" aria-label={social.icon}>
					<Icon type={social.icon}/>
				</a>
			))}
		</div>
	}

	return (
		<div className="[ card-member ] [ stack ]">
			<div className="card-member__image">
				<Image dir={props.image.dir} name={props.image.name} widths={props.image.widths} alt={props.name} lazy={props.image.lazy} width={props.image.width} height={props.image.height}/>

				{props.socials && renderSocials()}
			</div>
			<div className="card-member__content">
				<div>
					<p className="title-1">{props.name}</p>
					<p className="desc-1 fg-neutral-5">{props.role}</p>
				</div>

				{props.socials && renderSocials()}
			</div>
		</div>
	);
}