let dataGlasses = [
  {
    id: "G1",
    src: "./img/g1.jpg",
    virtualImg: "./img/v1.png",
    brand: "Armani Exchange",
    name: "Bamboo wood",
    color: "Brown",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
  },
  {
    id: "G2",
    src: "./img/g2.jpg",
    virtualImg: "./img/v2.png",
    brand: "Arnette",
    name: "American flag",
    color: "American flag",
    price: 150,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G3",
    src: "./img/g3.jpg",
    virtualImg: "./img/v3.png",
    brand: "Burberry",
    name: "Belt of Hippolyte",
    color: "Blue",
    price: 100,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G4",
    src: "./img/g4.jpg",
    virtualImg: "./img/v4.png",
    brand: "Coarch",
    name: "Cretan Bull",
    color: "Red",
    price: 100,
    description: "In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G5",
    src: "./img/g5.jpg",
    virtualImg: "./img/v5.png",
    brand: "D&G",
    name: "JOYRIDE",
    color: "Gold",
    price: 180,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
  },
  {
    id: "G6",
    src: "./img/g6.jpg",
    virtualImg: "./img/v6.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Blue, White",
    price: 120,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G7",
    src: "./img/g7.jpg",
    virtualImg: "./img/v7.png",
    brand: "Ralph",
    name: "TORTOISE",
    color: "Black, Yellow",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
  },
  {
    id: "G8",
    src: "./img/g8.jpg",
    virtualImg: "./img/v8.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Red, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
  },
  {
    id: "G9",
    src: "./img/g9.jpg",
    virtualImg: "./img/v9.png",
    brand: "Coarch",
    name: "MIDNIGHT VIXEN REMIX",
    color: "Blue, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
  },
];

let renderGlassesUI = () => {
  let contentHTMl = ``;
  for (let value of dataGlasses) {
    let str = JSON.stringify(value);
    contentHTMl += `
    <div class="col-4 .vglasses__items">
        <img src="${value.src}" onclick="btnShowGlasses('ygughjg')"  alt="" />
    </div>
    `;
    console.log("str", str);
  }
  document.querySelector("#vglassesList").innerHTML = contentHTMl;
};

window.btnShowGlasses = (str) => {
  // let value = JSON.parse(str);
  console.log("value", value);
  let imgGlasses = `
    <img src="${value.virtualImg}" alt="" />
    `;
  let contentGlasses = `
  <h3>${value.name} - ${value.brand}(${value.color})</h3>
  <span>$${value.price}</span>
  <p>
  ${value.description}
  </p>
    `;
  document.querySelector("#avatar").innerHTML = imgGlasses;
  document.querySelector("#avatar img").style.opacity = 0.8;

  document.querySelector("#glassesInfo").innerHTML = contentGlasses;
  document.querySelector("#glassesInfo").style.display = "block";
};

let removeGlasses = () => {
  document.querySelector("#avatar img").style.opacity = 0;
  document.querySelector("#glassesInfo").style.display = "none";
};

let addGlasses = () => {
  document.querySelector("#avatar img").style.opacity = 0.8;
  document.querySelector("#glassesInfo").style.display = "block";
};

window.onload = () => {
  renderGlassesUI();
};
