// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from './functions.js';

// Подключение списка активных модулей
import { flsModules } from './modules.js';

import { gsap } from 'gsap/all.js';

document.addEventListener('DOMContentLoaded', (event) => {
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
