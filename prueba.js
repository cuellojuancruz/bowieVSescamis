const block1 = document.getElementById("block1");
const block2 = document.getElementById("block2");
const block3 = document.getElementById("block3");
const block4 = document.getElementById("block4");
const block5 = document.getElementById("block5");
const block6 = document.getElementById("block6");
const block7 = document.getElementById("block7");
const block8 = document.getElementById("block8");
const block9 = document.getElementById("block9");
const reset = document.getElementById("PlayAgain");
const fullScreen = document.getElementById("fullScreen")
const spaces = [
  block1,
  block2,
  block3,
  block4,
  block5,
  block6,
  block7,
  block8,
  block9,
];

function getRandomInt() {
  const numRandom = Math.floor(Math.random() * 9);
  return numRandom;
}

const onePlayerwinHorizontally = () => {
  if (
    spaces[0].querySelector(".game-image")?.src ===
      "http://127.0.0.1:5500/assets/WhatsApp%20Image%202023-08-21%20at%2011.13.57%20PM.jpeg" &&
    spaces[1].querySelector(".game-image")?.src ===
      "http://127.0.0.1:5500/assets/WhatsApp%20Image%202023-08-21%20at%2011.13.57%20PM.jpeg" &&
    spaces[2].querySelector(".game-image")?.src ===
      "http://127.0.0.1:5500/assets/WhatsApp%20Image%202023-08-21%20at%2011.13.57%20PM.jpeg"
  ) {
    return true;
  } else if (
    spaces[3].querySelector(".game-image")?.src ===
      "http://127.0.0.1:5500/assets/WhatsApp%20Image%202023-08-21%20at%2011.13.57%20PM.jpeg" &&
    spaces[4].querySelector(".game-image")?.src ===
      "http://127.0.0.1:5500/assets/WhatsApp%20Image%202023-08-21%20at%2011.13.57%20PM.jpeg" &&
    spaces[5].querySelector(".game-image")?.src ===
      "http://127.0.0.1:5500/assets/WhatsApp%20Image%202023-08-21%20at%2011.13.57%20PM.jpeg"
  ) {
    console.log('entro a este if');
    return true;
  } else if (
    spaces[6].querySelector(".game-image")?.src ===
      "http://127.0.0.1:5500/assets/WhatsApp%20Image%202023-08-21%20at%2011.13.57%20PM.jpeg" &&
    spaces[7].querySelector(".game-image")?.src ===
      "http://127.0.0.1:5500/assets/WhatsApp%20Image%202023-08-21%20at%2011.13.57%20PM.jpeg" &&
    spaces[8].querySelector(".game-image")?.src ===
      "http://127.0.0.1:5500/assets/WhatsApp%20Image%202023-08-21%20at%2011.13.57%20PM.jpeg"
  ) {
    return true;
  } else {
    return false;
  }
};

const twoPlayerwinHorizontally = () => {
  if (
    spaces[0].innerHTML === "O" &&
    spaces[1].innerHTML === "O" &&
    spaces[2].innerHTML === "O"
  ) {
    return true;
  } else if (
    spaces[3].innerHTML === "O" &&
    spaces[4].innerHTML === "O" &&
    spaces[5].innerHTML === "O"
  ) {
    return true;
  } else if (
    spaces[6].innerHTML === "O" &&
    spaces[7].innerHTML === "O" &&
    spaces[8].innerHTML === "O"
  ) {
    return true;
  } else {
    return false;
  }
};

const onePlayerwinVertically = () => {
  if (
    spaces[0].querySelector(".game-image")?.src ===
      "http://127.0.0.1:5500/assets/WhatsApp%20Image%202023-08-21%20at%2011.13.57%20PM.jpeg" &&
    spaces[3].querySelector(".game-image")?.src ===
      "http://127.0.0.1:5500/assets/WhatsApp%20Image%202023-08-21%20at%2011.13.57%20PM.jpeg" &&
    spaces[6].querySelector(".game-image")?.src ===
      "http://127.0.0.1:5500/assets/WhatsApp%20Image%202023-08-21%20at%2011.13.57%20PM.jpeg"
  ) {
    return true;
  } else if (
    spaces[1].querySelector(".game-image")?.src ===
      "http://127.0.0.1:5500/assets/WhatsApp%20Image%202023-08-21%20at%2011.13.57%20PM.jpeg" &&
    spaces[4].querySelector(".game-image")?.src ===
      "http://127.0.0.1:5500/assets/WhatsApp%20Image%202023-08-21%20at%2011.13.57%20PM.jpeg" &&
    spaces[7].querySelector(".game-image")?.src ===
      "http://127.0.0.1:5500/assets/WhatsApp%20Image%202023-08-21%20at%2011.13.57%20PM.jpeg"
  ) {
    return true;
  } else if (
    spaces[2].querySelector(".game-image")?.src ===
      "http://127.0.0.1:5500/assets/WhatsApp%20Image%202023-08-21%20at%2011.13.57%20PM.jpeg" &&
    spaces[5].querySelector(".game-image")?.src ===
      "http://127.0.0.1:5500/assets/WhatsApp%20Image%202023-08-21%20at%2011.13.57%20PM.jpeg" &&
    spaces[8].querySelector(".game-image")?.src ===
      "http://127.0.0.1:5500/assets/WhatsApp%20Image%202023-08-21%20at%2011.13.57%20PM.jpeg"
  ) {
    return true;
  } else {
    return false;
  }
};

const twoPlayerwinVertically = () => {
  if (
    spaces[0].innerHTML === "O" &&
    spaces[3].innerHTML === "O" &&
    spaces[6].innerHTML === "O"
  ) {
    return true;
  } else if (
    spaces[1].innerHTML === "O" &&
    spaces[4].innerHTML === "O" &&
    spaces[7].innerHTML === "O"
  ) {
    return true;
  } else if (
    spaces[2].innerHTML === "O" &&
    spaces[5].innerHTML === "O" &&
    spaces[8].innerHTML === "O"
  ) {
    return true;
  } else {
    return false;
  }
};

const onePlayercrossWin = () => {
  if (
    spaces[0].querySelector(".game-image")?.src ===
      "http://127.0.0.1:5500/assets/WhatsApp%20Image%202023-08-21%20at%2011.13.57%20PM.jpeg" &&
    spaces[4].querySelector(".game-image")?.src ===
      "http://127.0.0.1:5500/assets/WhatsApp%20Image%202023-08-21%20at%2011.13.57%20PM.jpeg" &&
    spaces[8].querySelector(".game-image")?.src ===
      "http://127.0.0.1:5500/assets/WhatsApp%20Image%202023-08-21%20at%2011.13.57%20PM.jpeg"
  ) {
    return true;
  } else if (
    spaces[2].querySelector(".game-image")?.src ===
      "http://127.0.0.1:5500/assets/WhatsApp%20Image%202023-08-21%20at%2011.13.57%20PM.jpeg" &&
    spaces[4].querySelector(".game-image")?.src ===
      "http://127.0.0.1:5500/assets/WhatsApp%20Image%202023-08-21%20at%2011.13.57%20PM.jpeg" &&
    spaces[6].querySelector(".game-image")?.src ===
      "http://127.0.0.1:5500/assets/WhatsApp%20Image%202023-08-21%20at%2011.13.57%20PM.jpeg"
  ) {
    return true;
  } else {
    return false;
  }
};

const twoPlayercrossWin = () => {
  if (
    spaces[0].innerHTML === "O" &&
    spaces[4].innerHTML === "O" &&
    spaces[8].innerHTML === "O"
  ) {
    return true;
  } else if (
    spaces[2].innerHTML === "O" &&
    spaces[4].innerHTML === "O" &&
    spaces[6].innerHTML === "O"
  ) {
    return true;
  } else {
    return false;
  }
};

const onePlayer = () => {
  if (onePlayerwinHorizontally()) {
    return true;
  } else if (onePlayerwinVertically()) {
    return true;
  } else if (onePlayercrossWin()) {
    return true;
  } else {
    return false;
  }
};

const twoPlayer = () => {
  if (twoPlayerwinHorizontally()) {
    return true;
  } else if (twoPlayerwinVertically()) {
    return true;
  } else if (twoPlayercrossWin()) {
    return true;
  } else {
    return false;
  }
};

const Ofunction = () => {
  let flag = true;
  let numRandom;
  let attempts = 0;

  while (flag && attempts < 10) {
    numRandom = getRandomInt();
    if (spaces[numRandom].innerHTML.length === 0) {
      const imagen = document.createElement("img");

      imagen.src = "./assets/WhatsApp Image 2023-08-21 at 11.13.56 PM.jpeg";
      imagen.alt = "Descripción de la imagen";
      imagen.style.width = "140px";
      imagen.style.height = "140px";
      spaces[numRandom].innerHTML = "";
      spaces[numRandom].appendChild(imagen);
      flag = false;
    } else {
      attempts++;
    }
  }
  if (onePlayer()) {
    alert("player one winner, here your gift (watch out,he eat a lot)")
    const img = document.createElement("img")
    img.src = "./assets/WhatsApp Image 2023-08-21 at 11.13.57 PM (1).jpeg"
    img.style.width = "600px"
    img.style.height = "600px"
    img.style.position = "absolute"
    img.id = "gift"
    img.innerHTML = ""
    fullScreen.appendChild(img)
    return;
  }
  if (twoPlayer()) {
    console.log("ganador player two");
    return;
  }
};

const Xfunction = (num) => {
  const block = spaces[num - 1];
  const imagen = document.createElement("img");

  imagen.src = "./assets/WhatsApp Image 2023-08-21 at 11.13.57 PM.jpeg";
  imagen.alt = "Descripción de la imagen";
  imagen.style.width = "140px";
  imagen.style.height = "140px";
  imagen.classList.add("game-image");
  block.innerHTML = "";
  block.appendChild(imagen);
  Ofunction();
};

const resetFunction = () => {
  for (let i = 0; i < spaces.length; i++) {
    spaces[i].innerHTML = "";
  }
  const deleteImg = fullScreen.querySelector("img");
  deleteImg.remove();
};
