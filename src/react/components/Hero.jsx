import Slider from "./Slider";
import Button from "./Button";
import Image from "./Image";
import React from "react";
import Tabs from "./Tabs";

export default function Hero(props) {


	return (<>
		{(() => {
			switch (props.type) {
				case "slider":
					return (<section className="[ hero ] [ wrapped ]" data-type={props.type}>
						<div className="slider">
							<div className="slider__container">
								{props.slider.map((slide, index) => (<div className="[ slider__slide ] [ stacked ] [ darken-image ]" key={`key${index}`}>
									<Image dir="home" name={slide.image.name} widths={slide.image.widths} priorityIndex={index} width={props.width} height={props.height}/>
									<div className="[ slider__content ] [ wrapper stack ] [ self-align-center ]">
										<h1 className="[ title-3 ] [ fg-neutral-1 measure-1 ]">{slide.title}</h1>
										{slide.desc && <p className="[ desc-1 ] [ fg-neutral-1 ]">{slide.desc}</p>}
										{slide.button ? <Button href={slide.button.href} content={slide.button.content} utils="space-4" icon={slide.button.icon}/> : null}
									</div>
								</div>))}
							</div>
							<Tabs tabs={props.slider}/>
						</div>
					</section>)
				default:
					return (<section className="[ hero ] [ wrapped ]">
						<Image dir={props.image.dir} name="hero" widths={props.image.widths} priority={props.image.priority ? props.image.priority : 'high'} width={props.image.width} height={props.image.height} />
						<div className="[ hero__content ] [ stack ] [ space-3 ]">
							{props.subtitle && <p className="[ title-4 ] [ fg-neutral-2 title-floated hide//below-md ]">{props.subtitle}</p>}
							<h1 className="[ title-2 ] [ title-border//above-md measure-1 ]">{props.title}</h1>
							{props.desc && <p className="[ desc-1 ] [ fg-neutral-5 measure-5 ]">{props.desc}</p>}
							{props.button ? <Button href={props.button.href} content={props.button.content} icon={props.button.icon}/> : null}
						</div>
					</section>)
			}
		})()}
	</>);
}