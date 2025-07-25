import type { GlobalState } from "@mattermost/types/store";
import type { PluginRegistry } from "~/types/mattermost";
import type { Action, Store } from "redux";
import manifest from "~/../../plugin.json";
import boardsTS from "~/scripts/boards";
import logoTS from "~/scripts/logo"; // Добавляем новый импорт
import kinescopeTS from "~/scripts/kinescope"; // Добавляем импорт для Kinescope
import { initializeTranslator } from "~/scripts/translator";
import premiumCSS from "~/styles/premium.css?raw";
import boardsCSS from "~/styles/boards.css?raw";

// https://developers.mattermost.com/integrate/plugins/components/webapp
declare global {
	interface Window {
		registerPlugin(pluginId: string, plugin: Plugin): void;
	}
}

// https://developers.mattermost.com/integrate/reference/webapp/webapp-reference
class Plugin {
	public initialize(registry: PluginRegistry, _store: Store<GlobalState, Action<string>>) {
		// CSS INJECTION
		const style = document.createElement("style");
		style.textContent = [
			premiumCSS,
			boardsCSS,
		].join("\n");
		document.head.appendChild(style);

		// TS INJECTION
		registry.registerGlobalComponent(() => {
			// Вызываем скрипты
			boardsTS();
			logoTS(); // Добавляем вызов нового скрипта
			kinescopeTS(); // Добавляем вызов скрипта Kinescope
			initializeTranslator();

			return null;
		});
	}

	public uninitialize() {
		// Очищаем кастомные логотипы при деактивации плагина
		document.querySelectorAll('.custom-logo-freemium').forEach(el => el.remove());
	}
}

window.registerPlugin(manifest.id, new Plugin());
