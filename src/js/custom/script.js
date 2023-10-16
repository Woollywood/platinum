// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from './functions.js';

// Подключение списка активных модулей
import { flsModules } from './modules.js';

import { gsap } from 'gsap/all.js';

document.addEventListener('DOMContentLoaded', (event) => {
	headerMenuItemHover();

	headerHeight();
	window.addEventListener('resize', headerHeight);

	floatingBallsInitStyle();
	window.addEventListener('resize', floatingBallsInitStyle);
});

function headerHeight() {
	const header = document.querySelector('.header');
	const headerBox = header.getBoundingClientRect();
	document.documentElement.style.cssText += `--header-height: ${headerBox.height}px`;
}

function floatingBallsInitStyle() {
	document.documentElement.style.cssText += `--window-height: ${window.innerWidth}px`;
}

function headerMenuItemHover() {
	const headerItems = document.querySelectorAll('[data-header-link]');
	headerItems.forEach((item) => {
		const hoverItemLeft = document.createElement('div');
		const hoverItemRight = document.createElement('div');

		hoverItemLeft.classList.add('menu__hover-item', 'menu__hover-item--left');
		hoverItemRight.classList.add('menu__hover-item', 'menu__hover-item--right');

		hoverItemLeft.innerHTML = '-';
		hoverItemRight.innerHTML = '-';

		item.append(hoverItemLeft);
		item.append(hoverItemRight);

		item.addEventListener('mouseenter', (e) => {
			e.target.classList.remove('_mouse-leave');
			e.target.classList.add('_mouse-enter');
		});

		item.addEventListener('mouseleave', (e) => {
			e.target.classList.remove('_mouse-enter');
			e.target.classList.add('_mouse-leave');
		});
	});
}
