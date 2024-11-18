const emotions = [
    { emoji: "😊", name: "Радость" },
    { emoji: "😢", name: "Грусть" },
    { emoji: "😲", name: "Удивление" },
    { emoji: "😡", name: "Злость" },
    { emoji: "😱", name: "Страх" },
    { emoji: "😌", name: "Спокойствие" },
    { emoji: "😳", name: "Смущение" },
    { emoji: "🤔", name: "Любопытство" },
    { emoji: "🤮", name: "Отвращение" },
    { emoji: "😔", name: "Разочарование" },
    { emoji: "😎", name: "Гордость" },
    { emoji: "🤨", name: "Обеспокоенность" },
    { emoji: "🤗", name: "Восторг" },
    { emoji: "🙄", name: "Неловкость" }
];


const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];


document.getElementById("sticker").textContent = randomEmotion.emoji;
document.getElementById("emotion").textContent = randomEmotion.name;
