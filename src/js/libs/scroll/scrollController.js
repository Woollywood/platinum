import { gsap, ScrollTrigger } from 'gsap/all.js';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

init();

function init() {
	parallax();
	splitTextInit();
	splitText();
	scrollScale();
	gsapFromTimeline();
}

function splitTextInit() {
	const splitTypes = document.querySelectorAll('[data-reveal-init]');
	splitTypes.forEach((char, i) => {
		const text = new SplitType(char, {
			types: 'chars, words',
		});

		gsap.from(text.words, {
			y: 100,
			opacity: 0,
			stagger: 0.06,
			duration: 0.1,

			scrollTrigger: {
				trigger: char,
				start: 'top 80%',
				end: 'top 20%',
			},
		});
	});
}

function splitText() {
	const splitTypes = document.querySelectorAll('[data-reveal-type]');
	splitTypes.forEach((char, i) => {
		const text = new SplitType(char, {
			types: 'chars, words',
		});

		gsap.from(text.words, {
			y: 100,
			opacity: 0,
			stagger: 0.1,

			scrollTrigger: {
				trigger: char,
				start: 'top 80%',
				end: 'top 20%',
			},
		});
	});
}

function scrollScale() {
	const scaleBlocks = document.querySelectorAll('[data-gsap-scale]');
	scaleBlocks.forEach((scaleBlock) => {
		gsap.from(scaleBlock, {
			scale: 0.8,
			scrollTrigger: {
				trigger: scaleBlock,
				start: 'top 70%',
				end: 'top 50%',
			},
		});
	});
}

function gsapFromTimeline() {
	const gsapTimelineItems = document.querySelectorAll('[data-timeline]');
	gsapTimelineItems.forEach((timelineItem) => {
		const gsapItems = timelineItem.querySelectorAll('[data-timeline-from]');
		if (gsapItems) {
			const timeline = gsap.timeline();
			gsapItems.forEach((item) => {
				const direction = item.dataset.timelineFrom;
				switch (direction) {
					case 'right':
						timeline.from(item, {
							opacity: 0,
							xPercent: 60,
						});
						break;
					case 'left':
						timeline.from(item, {
							opacity: 0,
							xPercent: -60,
						});
						break;
					default:
						throw new Error('unknown direction');
				}
			});

			ScrollTrigger.create({
				trigger: timelineItem,
				start: 'top 70%',
				end: 'top 50%',
				animation: timeline,
			});
		}
	});
}

function gsapFrom() {
	const gsapItems = document.querySelectorAll('[data-from]');
	gsapItems.forEach((item) => {
		console.log(item);

		gsap.from(item, {
			opacity: 0,
			xPercent: 60,
			duration: 1,
			scrollTrigger: {
				trigger: item,
				start: 'top 70%',
				end: 'top 50%',
			},
		});
	});
}

function parallax() {
	const items = document.querySelectorAll('[data-parallax-item]');
	items.forEach((item) => {
		gsap.to(item.querySelector('[data-parallax-image]'), {
			scale: 1.4,
			scrollTrigger: {
				trigger: item,
				start: 'top 50%',
				end: 'top 20%',
				scrub: true,
			},
		});
	});
}
