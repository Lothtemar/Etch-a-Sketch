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

// MENU BUILD UP

function leftMenu(){
    // CONTAINER
    const divSctnHTML = document.querySelector(".container");
    const div = document.createElement("div");
    div.classList.add("test", "left-menu");
    // H3 INSIDE CONTAINER
    const h3 = document.createElement("H3");
    h3.textContent = "Menu Izquierda";
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
    console.log(dimmension);
    if (document.contains(document.querySelector("table"))){
        document.querySelector("table").remove();
    };
    const divSctnHTML = document.querySelector(".container");
    const table = document.createElement("table");
    switch (dimmension) {
        case "1":
            const tr = document.createElement("tr");
            tr.appendChild(document.createElement("td"));
            tr.appendChild(document.createElement("td"));
            tr.appendChild(document.createElement("td"));
            tr.appendChild(document.createElement("td"));

            for (let i = 0; i < 4; i++){
                table.appendChild(tr.cloneNode(true));
            };

            divSctnHTML.appendChild(table);
            break;
        case "2":

            for(let i = 0; i < 8; i++){
                const tr = document.createElement("tr");
                for (let j = 0; j < 8; j++){
                    tr.appendChild(document.createElement("td"))
                };
                table.appendChild(tr);
            };
            divSctnHTML.appendChild(table);
        break;
        case "3":
            for(let i = 0; i < 16; i++){
                const tr = document.createElement("tr");
                for (j = 0; j < 16; j++){
                    tr.appendChild(document.createElement("td"));
                };
                table.appendChild(tr);
            };
            divSctnHTML.appendChild(table);
        break;
        case "4":
            for (let i = 0; i < 32; i++){
                const tr = document.createElement("tr");
                for(let j = 0; j < 32; j++){
                    tr.appendChild(document.createElement("td"));
                };
                table.appendChild(tr);
            }
            divSctnHTML.appendChild(table);
        break;
    }
    const tdGrab = document.querySelectorAll("td").forEach(el => {el.addEventListener("mouseover", (e) => {e.target.style.backgroundColor = "black"})});


};

