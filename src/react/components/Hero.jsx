import Button from "./Button";
import Image from "./Image";
import Slider from "./Slider";

export default function Hero(props) {

	return (<>
		{(() => {
			switch (props.type) {
				case "slider":
					return (<section className="[ hero ] [ wrapped ]" data-type={props.type} aria-label="hero slider">
						<Slider data={props.slider} titleMain={true}/>
					</section>)
				default:
					return (<section className="[ hero ] [ wrapped ]">
						<Image dir={props.image.dir} name="hero" widths={props.image.widths} priority={props.image.priority ? props.image.priority : 'high'}
						       width={props.image.width} height={props.image.height}/>
						<div className="[ hero__content ] [ stack ] [ space-3 ]">
							{props.subtitle && <p className="[ title-4 ] [ fg-neutral-2 title-floated hide//below-md ]">{props.subtitle}</p>}
							<h1 className="[ title-2 ] [ title-border//above-md measure-1 ]">{props.title}</h1>
							{props.desc && <p className="[ desc-1 ] [ fg-neutral-5 measure-5 ]">{props.desc}</p>}
							{props.button ? <Button to={props.button.to} content={props.button.content} icon={props.button.icon}/> : null}
						</div>
					</section>)
			}
		})()}
	</>);
}