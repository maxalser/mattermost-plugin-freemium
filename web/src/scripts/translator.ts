const translations: { [key: string]: string } = {
    "Set custom status": "Установить статус",
    "Online": "В сети",
    "Away": "Неактивен",
    "Do not disturb": "Не беспокоить",
    "Disables all notifications": "Отключает все уведомления",
    "Offline": "Не в сети",
    "Profile": "Профиль",
    "1 hour": "1 час",
    "30 mins": "30 минут",
    "2 hours": "2 часа",
    "Log out": "Выйти",
    "Channels": "Каналы",
    "Create new channel": "Создать новый канал",
    "Browse channels": "Просмотреть каналы",
    "Open a direct message": "Открыть личное сообщение",
    "Create new category": "Создать новую категорию",
    "Invite people": "Пригласить людей",
    "Add people to the team": "Добавить людей в команду",
    "В избранное": "Добавить",
    "В избранном": "Убрать",
    "ИД:": "ID:",
    "Изменить заголовок": "Заголовок",
    "Add a channel header": "Добавить заголовок",
    "Установить заголовок": "Заголовок",
    "понедельник": "Понедельник",
    "вторник": "Вторник",
    "среда": "Среда",
    "четверг": "Четверг",
    "пятница": "Пятница",
    "суббота": "Суббота",
    "воскресенье": "Воскресенье",
    "Type to find a channel. Use": "Введите название канала. Используйте: ",
    "to browse,": " для просмотра, ",
    "to select,": " для выбора, ",
    "to dismiss.": " для отмены.",
    "Search messages": "Поиск сообщений",
    "Search files": "Поиск файлов",
    "Filter your search with:": "Фильтр поиска:",
    "Добавить людей": "Добавить",
    "All Teams": "Все команды",
    "Mute": "Выключить звук",
    "Unmute": "Включить звук",
    "Direct Messages": "Личные сообщения",
};

const translateNode = (node: Node) => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent) {
        const trimmedText = node.textContent.trim();
        if (translations[trimmedText]) {
            node.textContent = translations[trimmedText];
        }
    } else {
        node.childNodes.forEach(translateNode);
    }
};

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        mutation.addedNodes.forEach(translateNode);
    });
});

export const initializeTranslator = () => {
    translateNode(document.body);
    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
};