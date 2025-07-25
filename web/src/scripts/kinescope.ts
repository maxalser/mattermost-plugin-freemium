// Автоматическое преобразование ссылок Kinescope в встраиваемые плееры
function processKinescopeLinks() {
	// Регулярное выражение для поиска ссылок Kinescope
	const kinescopeRegex = /https:\/\/kinescope\.io\/([a-zA-Z0-9_-]+)/;
	
	// Функция для создания iframe из ID видео
	function createKinescopeEmbed(videoId: string): HTMLElement {
		const iframe = document.createElement('iframe');
		iframe.src = `https://kinescope.io/embed/${videoId}`;
		iframe.allow = 'autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;';
		iframe.frameBorder = '0';
		iframe.allowFullscreen = true;
		iframe.width = '640';
		iframe.height = '360';
		iframe.className = 'kinescope-embed-freemium';
		
		return iframe;
	}
	
	// Функция для обработки ссылок
	function processLinks() {
		// Ищем все ссылки на Kinescope, которые еще не обработаны
		const links = document.querySelectorAll('a[href*="kinescope.io"]:not(.kinescope-processed)');
		
		links.forEach(link => {
			const href = (link as HTMLAnchorElement).href;
			const match = href.match(kinescopeRegex);
			
			if (match) {
				const videoId = match[1];
				const embedElement = createKinescopeEmbed(videoId);
				
				// Заменяем ссылку на iframe
				const parent = link.parentNode;
				if (parent) {
					parent.replaceChild(embedElement, link);
				}
			} else {
				// Помечаем ссылку как обработанную, даже если она не подходит
				link.classList.add('kinescope-processed');
			}
		});
	}
	
	// Запускаем обработку ссылок
	processLinks();
}

export default function main() {
	// Запускаем обработку при загрузке
	processKinescopeLinks();
	
	// Наблюдаем за изменениями DOM для обработки новых сообщений
	const observer = new MutationObserver((mutations) => {
		let shouldProcess = false;
		
		for (const mutation of mutations) {
			if (mutation.type === 'childList') {
				// Проверяем, добавились ли новые сообщения
				const addedNodes = Array.from(mutation.addedNodes);
				for (const node of addedNodes) {
					if (node.nodeType === Node.ELEMENT_NODE) {
						const element = node as Element;
						// Проверяем, является ли добавленный элемент сообщением или содержит сообщения
						if (element.matches('.post, .post-message__text, .markdown__paragraph') ||
							element.querySelector('.post, .post-message__text, .markdown__paragraph')) {
							shouldProcess = true;
							break;
						}
					}
				}
			}
		}
		
		if (shouldProcess) {
			// Небольшая задержка для того, чтобы DOM успел обновиться
			setTimeout(processKinescopeLinks, 100);
		}
	});
	
	observer.observe(document.body, {
		childList: true,
		subtree: true,
	});
}