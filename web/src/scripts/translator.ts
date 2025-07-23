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
    "We need your permission to show notifications in the browser.": "Нам нужно ваше разрешение, чтобы показывать уведомления в браузере.",
    "Manage notification preferences": "Управление настройками уведомлений",
    "Clear after:": "Убрать после:",
    "Don't clear": "Не убирать",
    "Tomorrow": "Завтра",
    "Choose date and time": "Выберите дату и время",
    "Открыт в канале": "Открыть в канале",
    "Channel Settings": "Настройки канала",
    "Members": "Участники",
    "More actions": "Ещё действия",
    "Archive Channel": "Архивировать канал",
    "Describe how this channel should be used.": "Опишите, как этот канал должен использоваться.",
    "This is the text that will appear in the header of the channel beside the channel name. You can use markdown to include links by typing [Link Title](http://example.com).": "Этот текст будет отображаться в заголовке канала рядом с названием канала.",
    "Info": "Информация",
    "Любой может присоединиться": "Доступен для всех",
    "Только приглашенные участники": "Только для приглашенных",
    "Reset": "Сбросить",
    "Вид": "Смотреть",
    "Discussion Items": "Обсуждения",
    "Boards": "Доски",
    "Create new board": "Создать новую доску",
    "+ Добавить свойство": "Новое свойство",
    "Редактировать профиль": "Редактировать",
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