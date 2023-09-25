const title = document.querySelector(".main h1"),
	btn = document.querySelector(".luck-btn"),
	hideParagraph = document.querySelector(".text-btn");

let isHide = true;

const DATA = [
	// "+998 91 343 0668",
	// "+998 90 695 0451",
	// "+998 91 185 8424",
	// "+998 94 007 2207",
	// "+998 91 293 3164",
	// "+998 93 409 1208",
	// "+998 94 504 2207",
	// "закон",
	// "статья",
	// "адвокат",
	// "ловить мячь",
	// "пинать мячь",
	// "нести мячь",
	// "играть мячь головой",
	// "бросать мячь",
	// "бить мячь",
	// "катать мячь",
	// "держать мячь",
	// "првила",
	// "линия",
	// "ракета",
	// "потом/затем",
	// "команда",
	// "оброщать внимания",
	// "гадать",
	// "игроки",
	// "шайба",
	// "шлем",
	// "очередь",
	// "перчатки",

	["слушать", "listen"],
	["знаменитый", "famous"],
	["родиться", "born"],
	["художник", "artist"],
	["танцор", "dancer"],
	["создатель/изобретатель", "inventor"],
	["писатель", "writer"],
	["учённый", "scientist"],
	["узновать", "find out"],
	["рисовать", "paint"],
	["обнаружение", "discovery"],
	["певец", "singer"],
	["спортсмен", "athlete"],
	["астроном", "astronomer"],
	["королева", "queen"],
	["музыкант", "musician"],
	["занятие/профессия", "occupation"]

	// ["прошлый", "past"],
	// ["играть", "play"],
	// ["использовать", "use"],
	// ["космос", "space"],
	// ["ходить на лыжах", "ski"],
	// ["гора", "mountain"],
	// ["ездить на велосипеде", "cycle"],
	// ["проверять", "check"],
	// ["спрашивать", "ask"],
	// ["отвечать", "answer"],
	// ["любить", "like"],
	// ["выбирать", "choose"],
	// ["делать", "make"],
	// ["о/про", "about"],
	// ["путиществие", "travel"],
	// ["выходные", "weekens"],
	// ["звонить/телефон", "phone"],
	// ["вопрос", "question"],
	// ["должить", "report back"],
	// ["кино", "cinema"]
];

btn.addEventListener("click", () => {
	btn.classList.add("btn-hide");
	let interval = setInterval(() => {
		let index = Math.floor(Math.random() * DATA.length);
		title.innerHTML = `${DATA[index][0]}`;
		hideParagraph.innerHTML = `${DATA[index][1]}`;
	}, 1000);
	hideParagraph.classList.add("hide");

	setTimeout(() => {
		clearInterval(interval);
		btn.classList.remove("btn-hide");
	}, 1000);
});

hideParagraph.addEventListener("click", () => {
	isHide = !isHide;
	if (isHide == true) {
		hideParagraph.classList.remove("hide");
	} else {
		hideParagraph.classList.add("hide");
	}
});
