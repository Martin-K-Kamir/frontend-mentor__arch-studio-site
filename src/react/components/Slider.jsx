import Tabs from "./Tabs";
import Image from "./Image";
import Button from "./Button";
import {useSwipeable} from "react-swipeable";
import React, {useEffect, useRef, useState} from "react";


export default function Slider(props) {
	const [showSwipeTip, setShowSwipeTip] = useState(true);
	const [slide, setSlide] = useState(1);
	const slider = useRef();
	const handlers = useSwipeable({
		onSwipedLeft: () => (handleSlider('next'), setShowSwipeTip(false)),
		onSwipedRight: () => handleSlider('prev'),
		swipeDuration: 500,
		trackMouse: true
	});

	const Title = `h${props.titleLevel ? props.titleLevel : 2}`;

	useEffect(() => {
		const interval = setInterval(() => {
			if (slide < props.data.length) {
				handleSlider('next');
			} else {
				handleSlider('start');
			}
		}, 70000);
		return () => clearInterval(interval);
	})

	function handleSlider(delta) {
		if (!slider.current || slide === delta) return;

		let move;
		const length = props.data.length;
		const width = slider.current.offsetWidth;

		if (delta === 'next') {
			if (slide < length) {
				move = (slide - slide) + 1;
				setSlide(slide + 1);
			} else {
				move = 0;
				setSlide(length);
			}
		} else if (delta === 'prev') {
			if (slide > 1) {
				move = (slide - slide) - 1;
				setSlide(slide - 1);
			}
		} else if (delta === 'start') {
			move = (length - 1) * -1;
			setSlide(1);
		} else if (delta === "end") {
			move = length;
			setSlide(length);
		} else if (slide < delta) {
			move = delta - slide;
			setSlide(delta);
		} else if (slide > delta) {
			move = (slide - delta) * -1;
			setSlide(delta);
		}

		slider.current.scrollTo(slider.current.scrollLeft + width * move, 0);
	}

	return (
		<div className="slider" {...handlers}>
			<p className="sr-only">Slider with one slide shown at a time. Do swipe left for Previous slide or swipe right to Next slide to navigate, or the slide tabs buttons to
				jump to slides.</p>
			<Tabs tabs={props.data} activeTab={slide} ariaControls="slide" srOnly="slide" handleClickTab={handleSlider}/>
			<div className="slider__container" ref={slider}>
				{props.data.map((curSlide, index) => (<div className="[ slider__slide ] [ stacked ] [ darken-image ]" key={`key${index}`} role="group" id={`slide${index + 1}`}
				                                           aria-label={`slide ${index + 1} of ${props.data.length}`} aria-hidden={!(slide === index + 1)}>
					<Image dir="home" name={curSlide.image.name} widths={curSlide.image.widths} priorityIndex={index} width={props.width} height={props.height}/>
					<div className="[ slider__content ] [ wrapper stack ] [ self-align-center ]">
						{props.titleMain && index === 0 ? <h1 className="[ title-3 ] [ fg-neutral-1 measure-1 ]">{curSlide.title}</h1>
							:
							<Title className="[ title-3 ] [ fg-neutral-1 measure-1 ]">{curSlide.title}</Title>
						}
						{curSlide.desc && <p className="[ desc-1 ] [ fg-neutral-1 ]">{curSlide.desc}</p>}
						{curSlide.button ? <Button to={curSlide.button.to} tabIndex={slide === index + 1 ? 0 : -1} content={curSlide.button.content} utils="space-4"
						                           icon={curSlide.button.icon}/> : null}
					</div>
				</div>))}
			</div>
			<div className="slider__swipe-tip" aria-hidden={true} data-visible={showSwipeTip}>swipe left</div>
		</div>
	);
}