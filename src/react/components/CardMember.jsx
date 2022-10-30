import Image from "./Image";
import Icon from "./Icon";

export default function CardMember(props) {
	return (
		<div className="card-member">
			<Image dir={props.image.dir} name={props.image.name} widths={props.image.widths} alt={props.name}/>
			<p className="title-1">{props.name}</p>
			<p className="desc">{props.role}</p>
			{props.socials && <div>
				{props.socials.map((social, index) => (
					<a href={social.href} key={`icon${index}`} aria-label={social.icon}>
						<Icon name={social.icon}/>
					</a>
				))}
			</div>}
		</div>
	);
}