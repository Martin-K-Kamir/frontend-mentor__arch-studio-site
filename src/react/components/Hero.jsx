import Slider from "./Slider";
import Button from "./Button";
import Image from "./Image";

export default function Hero(props) {

	return (
		<section className={`[ hero ] [ wrapped ${props.type === 'slider' ? 'stacked' : ''} ]`} data-type={props.type}>
			{props.type === 'slider' ?
				<Slider dir={props.image.dir} names={props.image.names} widths={props.image.widths}/>
				:
				<Image dir={props.image.dir} name="hero" widths={props.image.widths}/>}
			<div className="hero__content">
				{props.subtitle && <p className="[ title-4 ] [ fg-neutral-3 title-floated hide//below-md ]">{props.subtitle}</p>}
				<h1 className={props.type === 'slider' ? 'title-3' : '[ title-2 ] [ title-border//above-md ]'}>{props.title}</h1>
				{props.desc && <p className="[ desc-1 ] [ fg-neutral-5 ]">{props.desc}</p>}
				{props.button ? <Button href={props.button.href} content={props.button.content} icon={props.button.icon}/> : null}
			</div>
		</section>
	);
}