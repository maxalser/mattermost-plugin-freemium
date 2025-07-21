// Вставляет кастомный логотип рядом с иконкой меню
function injectCustomLogo() {
	const customLogoSvg = `
		<svg width="110" height="26" viewBox="0 0 110 26" fill="none" xmlns="http://www.w3.org/2000/svg" class="custom-logo-freemium-svg">
			<g clip-path="url(#clip0_291_32)">
				<path d="M23.6475 8.24219H35.4875V24.2422H31.3275V12.1695H27.1965L26.2365 17.9876C25.4802 22.7295 23.4729 24.5913 20.5638 24.5913C19.9238 24.5913 19.2256 24.504 18.6147 24.3876V20.6349C18.9929 20.6931 19.342 20.7222 19.6911 20.7222C21.1165 20.7222 21.7275 20.0531 22.1347 17.5804L23.6475 8.24219Z" fill="white"/>
				<path d="M74.6891 24.2422H69.3655L62.82 17.2603V24.2422H58.66V8.24216H62.82V14.904L68.9 8.24216H74.1946L66.8928 15.864L74.6891 24.2422Z" fill="white"/>
				<path d="M83.0223 24.5912C78.2223 24.5912 74.7023 20.984 74.7023 16.2422C74.7023 11.5003 78.2223 7.89307 83.0514 7.89307C86.9496 7.89307 90.4114 10.2494 91.0223 14.3222H86.7459C86.2514 12.5767 84.7387 11.7331 83.0514 11.7331C80.5205 11.7331 78.8914 13.5949 78.9205 16.2422C78.8914 18.9185 80.5787 20.7512 83.0223 20.7512C84.7387 20.7512 86.2514 19.8785 86.7459 18.1331H91.0223C90.3823 22.3512 86.8623 24.5912 83.0223 24.5912Z" fill="white"/>
				<path d="M104.191 8.24216H108.962V24.2422H104.802V18.5694L105.064 13.8276L98.46 24.2422H93.66V8.24216H97.82V13.9149L97.6164 18.5985L104.191 8.24216Z" fill="white"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M56.026 10.5199C56.5433 10.6585 56.8502 11.1903 56.7116 11.7076L53.0307 25.4452C52.892 25.9625 52.3603 26.2695 51.843 26.1309L38.1054 22.4499C37.5881 22.3113 37.2811 21.7795 37.4197 21.2622L41.1007 7.52463C41.2393 7.00733 41.771 6.70034 42.2883 6.83895L56.026 10.5199ZM45.0311 11.5895C44.5138 11.4509 43.982 11.7579 43.8434 12.2752L42.1703 18.5195C42.0316 19.0368 42.3386 19.5685 42.8559 19.7072L49.1003 21.3803C49.6176 21.5189 50.1493 21.2119 50.2879 20.6946L51.9611 14.4503C52.0997 13.933 51.7927 13.4013 51.2754 13.2626L45.0311 11.5895Z" fill="#D9D9D9"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M56.026 10.5199C56.5433 10.6585 56.8502 11.1903 56.7116 11.7076L53.0307 25.4452C52.892 25.9625 52.3603 26.2695 51.843 26.1309L38.1054 22.4499C37.5881 22.3113 37.2811 21.7795 37.4197 21.2622L41.1007 7.52463C41.2393 7.00733 41.771 6.70034 42.2883 6.83895L56.026 10.5199ZM45.0311 11.5895C44.5138 11.4509 43.982 11.7579 43.8434 12.2752L42.1703 18.5195C42.0316 19.0368 42.3386 19.5685 42.8559 19.7072L49.1003 21.3803C49.6176 21.5189 50.1493 21.2119 50.2879 20.6946L51.9611 14.4503C52.0997 13.933 51.7927 13.4013 51.2754 13.2626L45.0311 11.5895Z" fill="url(#paint0_linear_291_32)"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M17.9747 3.9915H6.98484C10.8159 6.32768 13.7518 8.45148 15.2658 9.8649C16.9346 11.3761 17.9747 13.5642 17.9747 16.1127C17.9747 21.0018 14.2077 24.5656 9.39425 24.5657C4.61064 24.5657 0.84343 20.9724 0.84343 16.1127C0.84343 12.1865 3.31141 9.11549 6.72979 8.05787L0.84343 3.9915V0.323242H17.9747V3.9915ZM9.39425 11.6654C7.00244 11.6654 5.14867 13.462 5.14867 16.1127C5.14867 18.7929 7.00244 20.56 9.39425 20.56C11.786 20.56 13.6395 18.7929 13.6395 16.1127C13.6395 13.462 11.786 11.6654 9.39425 11.6654Z" fill="white"/>
			</g>
			<defs>
				<linearGradient id="paint0_linear_291_32" x1="56.8148" y1="7.53617" x2="37.0079" y2="7.94779" gradientUnits="userSpaceOnUse">
					<stop stop-color="#FEA26E"/>
					<stop offset="1" stop-color="#FC781F"/>
				</linearGradient>
				<clipPath id="clip0_291_32">
					<rect width="110" height="26" fill="white"/>
				</clipPath>
			</defs>
		</svg>
	`;

	// Функция для добавления логотипа в главное меню (рядом с иконкой гамбургера)
	function addLogoToMainMenu() {
		// Ищем кнопку с продуктовым меню
		const productButton = document.querySelector('#product_switch_menu, [class*="ProductMenuButton"]') as HTMLElement;
		
		if (!productButton || productButton.querySelector('.custom-logo-freemium-svg')) {
			return; // Уже добавлен или кнопка не найдена
		}

		// Скрываем span с брендингом Mattermost
		const brandingSpan = productButton.querySelector('[class*="ProductBrandingTeamEditionContainer"]');
		if (brandingSpan) {
			(brandingSpan as HTMLElement).style.display = 'none';
		}

		// Добавляем уникальный ID для градиента
		const uniqueLogoSvg = customLogoSvg.replace(/paint0_linear_291_32/g, `paint0_linear_291_32_main`);
		
		// Вставляем логотип после первого SVG (иконки меню)
		const existingSvg = productButton.querySelector('svg');
		if (existingSvg) {
			existingSvg.insertAdjacentHTML('afterend', uniqueLogoSvg);
		}
	}

	// Функция для замены логотипа на странице входа
	function replaceLoginLogo() {
		const loginLogo = document.querySelector('.header-logo-link');
		if (!loginLogo || loginLogo.querySelector('.custom-logo-freemium-svg')) {
			return;
		}

		// Добавляем уникальный ID для градиента
		const uniqueLogoSvg = customLogoSvg.replace(/paint0_linear_291_32/g, `paint0_linear_291_32_login`);
		
		// Заменяем содержимое
		loginLogo.innerHTML = uniqueLogoSvg;
		loginLogo.setAttribute('style', 'display: flex; align-items: center; justify-content: center; padding: 8px;');
	}

	// Функция для других возможных мест
	function replaceOtherLogos() {
		// Логотип в сайдбаре (если есть)
		const sidebarLogo = document.querySelector('.sidebar-header-logo, .team-sidebar-logo');
		if (sidebarLogo && !sidebarLogo.querySelector('.custom-logo-freemium-svg')) {
			const uniqueLogoSvg = customLogoSvg.replace(/paint0_linear_291_32/g, `paint0_linear_291_32_sidebar`);
			sidebarLogo.innerHTML = uniqueLogoSvg;
		}
	}

	// Запускаем все функции
	addLogoToMainMenu();
	replaceLoginLogo();
	replaceOtherLogos();
}

export default function main() {
	// Запускаем замену при загрузке
	injectCustomLogo();

	// Наблюдаем за изменениями DOM
	const observer = new MutationObserver((mutations) => {
		let shouldReplace = false;
		
		for (const mutation of mutations) {
			if (mutation.type === 'childList') {
				// Проверяем, добавились ли элементы, которые нас интересуют
				const addedNodes = Array.from(mutation.addedNodes);
				for (const node of addedNodes) {
					if (node.nodeType === Node.ELEMENT_NODE) {
						const element = node as Element;
						if (element.matches('#product_switch_menu, [class*="ProductMenuButton"], .header-logo-link') ||
							element.querySelector('#product_switch_menu, [class*="ProductMenuButton"], .header-logo-link')) {
							shouldReplace = true;
							break;
						}
					}
				}
			}
		}
		
		if (shouldReplace) {
			setTimeout(injectCustomLogo, 100);
		}
	});

	observer.observe(document.body, {
		childList: true,
		subtree: true,
	});
}