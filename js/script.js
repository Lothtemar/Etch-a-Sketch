// GRAB THE HTML SECTION AMD ADD A LISTENER EVENT TO THE WHOLE DOCUMENT
const sctnHTML = document.querySelector("section");
document.addEventListener("click", eListener);

// CREATE THE START BUTTON FUNCTION

function startProgram(){
    const button = document.createElement("button");
    button.classList.add("test", "start");
    button.textContent = "Press here to start";
    sctnHTML.appendChild(button);

};

startProgram();

function eListener(e){
    let element = e.target;
    if (element.classList.contains("start")){
        element.style.display = "none";
        buildApp();
    };
};

function buildApp(){
    const div = document.createElement("div");
    div.classList.add("test", "container");
    sctnHTML.appendChild(div);
    const divSctnHTML = document.querySelector(".container");
    leftMenu();
};

// COLORS VARIABLES

let fillingSqareColor = "#000000";
let backgroundSquareColor = "#ffffff";


// MENU BUILD UP

function leftMenu(){
    // CONTAINER
    const divSctnHTML = document.querySelector(".container");
    const div = document.createElement("div");
    div.classList.add("test", "left-menu");
    // H3 INSIDE CONTAINER
    const h3 = document.createElement("H3");
    h3.textContent = "Interactive Menu";
    div.appendChild(h3);
    divSctnHTML.appendChild(div);
    buttonStructure();

};


function buttonStructure(){
    // FILLING COLOR
    const leftMenu = document.querySelector(".left-menu");
    const divFlngCtn = document.createElement("div");
    divFlngCtn.classList.add("test", "filling-color-ctn");
    const divFllngClr = document.createElement("div");
    divFllngClr.classList.add("test", "filling-color");

        // INPUT FILLING COLOR
    const inputFllnClr = document.createElement("input");
    inputFllnClr.classList.add("input-color")
    inputFllnClr.setAttribute("type", "color");
    inputFllnClr.setAttribute("value", "#000000");
    inputFllnClr.addEventListener("change", (e) => fillingSqareColor = e.target.value);
    divFllngClr.appendChild(inputFllnClr);

    const paraFllngclr= document.createElement("p");
    paraFllngclr.classList.add("test", "filling-color");
    paraFllngclr.textContent = "Filling Color";
    divFlngCtn.appendChild(divFllngClr);
    divFlngCtn.appendChild(paraFllngclr);
    leftMenu.appendChild(divFlngCtn);

    // BACKGROUND COLOR
    const divBgClrCnt = document.createElement("div");
    divBgClrCnt.classList.add("test", "background-color-ctn");
    const divInBgClrCnt = document.createElement("div");
    divInBgClrCnt.classList.add("test", "background-color");

        // INPUT BG COLOR
    const inputFllnBg = document.createElement("input");
    inputFllnBg.classList.add("input-color");
    inputFllnBg.setAttribute("type", "color");
    inputFllnBg.setAttribute("value", "#ffffff");
    inputFllnBg.addEventListener("change", (e) => {
        backgroundSquareColor = e.target.value;
        const td = document.querySelectorAll("td").forEach(ele => ele.style.backgroundColor = backgroundSquareColor);
    });
    divInBgClrCnt.appendChild(inputFllnBg);

    const paraBgCnt = document.createElement("p");
    paraBgCnt.classList.add("test", "background-color");
    paraBgCnt.textContent = "Background Color";
    divBgClrCnt.appendChild(divInBgClrCnt);
    divBgClrCnt.appendChild(paraBgCnt);
    leftMenu.appendChild(divBgClrCnt);
    //DIMENSION CANVAS
    const divDimensionSize = document.createElement("div");
    divDimensionSize.classList.add("test");
    divDimensionSize.textContent = "Canvas Size";
    const inputSizeCanvas = document.createElement("input");
    inputSizeCanvas.setAttribute("type", "range");
    inputSizeCanvas.setAttribute("min", "1");
    inputSizeCanvas.setAttribute("max", "4");
    inputSizeCanvas.classList.add("test", "dimmension-canvas");
    leftMenu.appendChild(divDimensionSize);
    leftMenu.appendChild(inputSizeCanvas);
    const canvasSize = document.querySelector(".dimmension-canvas");
    // EVENT LISTENER TO SEND CANVAS SIZE
    canvasSize.addEventListener("change", (e) => playingCanvas(e.target.value));
};




// PLAYING CANVAS BUILD UP

function playingCanvas(dimmension){

    if (document.contains(document.querySelector("table"))){
        document.querySelector("table").remove();
    };
    const divSctnHTML = document.querySelector(".container");
    const table = document.createElement("table");
    switch (dimmension) {
        case "1":

        for(let i = 0; i < 20; i++){
                const tr = document.createElement("tr");
                for (let j = 0; j < 20; j++){
                    tr.appendChild(document.createElement("td"))
                };
                table.appendChild(tr);
            };
            divSctnHTML.appendChild(table);
            break;
        case "2":

            for(let i = 0; i < 26; i++){
                const tr = document.createElement("tr");
                for (let j = 0; j < 26; j++){
                    tr.appendChild(document.createElement("td"))
                };
                table.appendChild(tr);
            };

            divSctnHTML.appendChild(table);
        break;
        case "3":
            for(let i = 0; i < 30; i++){
                const tr = document.createElement("tr");
                for (j = 0; j < 30; j++){
                    tr.appendChild(document.createElement("td"));
                };
                table.appendChild(tr);
            };
            divSctnHTML.appendChild(table);
        break;
        case "4":
            for (let i = 0; i < 36; i++){
                const tr = document.createElement("tr");
                for(let j = 0; j < 36; j++){
                    tr.appendChild(document.createElement("td"));
                };
                table.appendChild(tr);
            }
            divSctnHTML.appendChild(table);
        break;
    }
        const tdBgColorFollow = document.querySelectorAll("td").forEach(el => el.style.backgroundColor = backgroundSquareColor)
        const tdGrab = document.querySelectorAll("td").forEach(el => {el.addEventListener("mouseenter", (e) => {
            e.target.style.border = "1px solid red";
            e.target.addEventListener("mouseleave", (e) => e.target.style.border = "1px solid black" );
            e.target.addEventListener("click", (e) => e.target.style.backgroundColor = fillingSqareColor)
            })
        });

};

