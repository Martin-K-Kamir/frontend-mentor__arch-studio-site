import Slider from "./Slider";
import Button from "./Button";
import Image from "./Image";

export default function Hero(props) {

	return (
		<section className="hero">
			{props.image.names ?
				<Slider dir={props.image.dir} names={props.image.names} widths={props.image.widths}/>
				:
				<Image dir={props.image.dir} name="hero" widths={props.image.widths}/>}
			<div className="wrapper">
				<div className={props.image.names ? 'hero__stacked' : 'hero__box'}>
					{props.subtitle && <p className="title-4">{props.subtitle}</p>}
					<h1 className={props.image.names ? 'title-3' : 'title-2'}>{props.title}</h1>
					{props.desc && <p className="desc">{props.desc}</p>}
					{props.button ? <Button href={props.button.href} content={props.button.content} icon={props.button.icon}/> : null}
				</div>
			</div>
		</section>
	);
}