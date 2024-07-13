const intro = document.getElementById("intro");
const easyBtn = document.getElementById("easy-btn");
const hardBtn = document.getElementById("hard-btn");

const lvl1 = document.getElementById("lvl1");
const lvl2 = document.getElementById("lvl2");
const lvl3 = document.getElementById("lvl3");
const lvl4 = document.getElementById("lvl4");
const lvl5 = document.getElementById("lvl5");
const lvlArr = [lvl1, lvl2, lvl3, lvl4, lvl5];
const lvl1Miko = document.getElementById("lvl1-miko");
const lvl2Miko = document.getElementById("lvl2-miko");
const lvl3Miko = document.getElementById("lvl3-miko");
const lvl4Miko = document.getElementById("lvl4-miko");
const lvl5Miko = document.getElementById("lvl5-miko");
const mikoArr = [lvl1Miko, lvl2Miko, lvl3Miko, lvl4Miko, lvl5Miko];

const win = document.getElementById("win");
const winMiko = document.getElementById("win-miko");
const next = document.getElementById("next");
const winMsgArr = [
	document.getElementById("win-1"),
	document.getElementById("win-2"),
	document.getElementById("win-3"),
	document.getElementById("win-4"),
	document.getElementById("win-5"),
	document.getElementById("win-6"),
	document.getElementById("win-7"),
	document.getElementById("win-8"),
];
const winMiko1 = "./images/mikoforsnowfull.png";
const winMiko2 = "./images/mikoforforestfull.png";
const winMiko3 = "./images/mikofortheaterfull.png";
const winMiko4 = "./images/mikofortownfull.png";
const winMiko5 = "./images/mikoforbeachfull.png";
const winMikoArr = [winMiko1, winMiko2, winMiko3, winMiko4, winMiko5];

const end = document.getElementById("end");
const again = document.getElementById("again");

const giveUp = document.getElementById("give-up");

console.log("THIS IS LIVE 102");

// EASY MODE TRIGGER

easyBtn.onclick = () => {
	easyMode = true;
	intro.style.display = "none";
	lvl1.style.display = "block";
	giveUp.style.display = "block";

	if (!mikoArr[0].classList.contains("cursor-pointer")) {
		for (let i = 0; i < mikoArr.length; i++) {
			mikoArr[i].classList.add("cursor-pointer");
		}
	}
};

// HARD MODE TRIGGER

hardBtn.onclick = () => {
	easyMode = false;
	intro.style.display = "none";
	lvl1.style.display = "block";
	giveUp.style.display = "block";

	if (mikoArr[0].classList.contains("cursor-pointer")) {
		for (let i = 0; i < mikoArr.length; i++) {
			mikoArr[i].classList.remove("cursor-pointer");
		}
	}
};

// CLICK ON MIKO = WIN

for (let i = 0; i < mikoArr.length; i++) {
	mikoArr[i].onclick = () => {
		lvlArr[i].style.display = "none";
		win.style.display = "grid";
		winMiko.src = winMikoArr[i];
		let j = Math.floor(Math.random() * 8);
		winMsgArr[j].style.display = "inline";

		mikoArr[i].classList.remove("gave-up");
	};
}

// NEXT LEVEL TO END

let lvlCount = 1;

next.onclick = () => {
	for (let i = 0; i < winMsgArr.length; i++) {
		winMsgArr[i].style.display = "none";
	}

	win.style.display = "none";

	if (lvlCount < 5) {
		lvlArr[lvlCount].style.display = "block";
		lvlCount += 1;
	} else {
		end.style.display = "flex";
		lvlCount = 1;
	}
};

// PLAY AGAIN

again.onclick = () => {
	end.style.display = "none";
	intro.style.display = "grid";
	giveUp.style.display = "none";
};

// GIVE UP

giveUp.onclick = () => {
	if (!mikoArr[lvlCount - 1].classList.contains("gave-up")) {
		mikoArr[lvlCount - 1].classList.add("gave-up");
	}
};
