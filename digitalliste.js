    //ELEMENTE HELVETE
    //tittel elementer
    const tittelInputEl = document.getElementById("listTitle");
    const tittelButtonEl = document.getElementById("buttonTitle");
    const tittelOutputEl = document.getElementById("outputTitle");
    //dato elementer
    const datoEl = document.getElementById("listDateTime");
    //body elementer
    let bodyEl = document.querySelector("body");
    let bakgrunnsfargeEl = document.getElementById("bakgrunnsfarge");
    let farge = bakgrunnsfargeEl.value;
    //innhold elementer
    const innholdInputEL = document.getElementById("listContent")
    const innholdOutputEL = document.getElementById("outputInnhold");
    let contentButtonEl = document.getElementById("buttonContent");
    contentButtonEl.addEventListener("click", addToList);
    const money = document.getElementById("kostnad");
    //kategori elementer
    const category = document.getElementById("listCategory");
    const subcategory = document.getElementById("subListCategory");
    //containers
    const leftContainer = document.getElementById("containerLeft");
    const middleContainer = document.getElementById("containerMiddle");
    const rightContainer = document.getElementById("containerRight");
    //SORTERINGSELEMENTERDERDDJL#N
    const sortByNameLeftEl = document.getElementById("sortLeftAlfa");
    const sortByNameMiddleEl = document.getElementById("sortMiddleAlfa");
    const sortByNameRightEl = document.getElementById("sortRightAlfa");
    const sortByPriceLeftEl = document.getElementById("sortLeftNumi");
    const sortByPriceMiddleEl = document.getElementById("sortMiddleNumi");
    const sortByPriceRightEl = document.getElementById("sortRightNumi");
    
    //BUTTON HEAVEN
    //tittle
    tittelButtonEl.addEventListener("click", CheckTittel);
    //SORTERINGSBUTTONFW 
    sortByNameLeftEl.addEventListener("click", sortByNameLeft);
    sortByNameMiddleEl.addEventListener("click", sortByNameMiddle);
    sortByNameRightEl.addEventListener("click", sortByNameRight);
    sortByPriceLeftEl.addEventListener("click", sortByPriceLeft);
    sortByPriceMiddleEl.addEventListener("click", sortByPriceMiddle);
    sortByPriceRightEl.addEventListener("click", sortByPriceRight);

    //objekter
    let listLeft = [];
    let listMiddle =  [];
    let listRight = [];

//LAGE LISTE FUNSKJONER (DE TRE UNDER!!)
function showListLeft(){
    leftContainer.innerHTML = "";

    for (let i = 0; i < listLeft.length; i++) {
        let left = listLeft[i];

        let divEl = document.createElement("div");
        let pEl = document.createElement("p");
        pEl.innerHTML = "˚ʚ♡ɞ˚ " + left.name + " - " + left.price + " kr - " + left.subcategory + " - " + left.date;

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Fjern";
        deleteBtn.id = i;
        deleteBtn.addEventListener("click", function() { removeFromList(i, "en") }); 

        divEl.appendChild(pEl);
        divEl.appendChild(deleteBtn);
        leftContainer.appendChild(divEl);
    }
}

function showListMiddle(){
    middleContainer.innerHTML = "";

    for (let i = 0; i < listMiddle.length; i++) {
        let middle = listMiddle[i];
       
        let divEl = document.createElement("div");
        let pEl = document.createElement("p");
        pEl.innerHTML = "˚ʚ♡ɞ˚ " + middle.name + " - " + middle.price + " kr - " + middle.subcategory + " -" + middle.date;

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Fjern";
        deleteBtn.id = i; 
        deleteBtn.addEventListener("click", function() { removeFromList(i, "to") } ); 
       
        divEl.appendChild(pEl);
        divEl.appendChild(deleteBtn);
        middleContainer.appendChild(divEl);
    }
}

function showListRight(){
    rightContainer.innerHTML = "";

    for (let i = 0; i < listRight.length; i++) {
        let right = listRight[i];

        let divEl = document.createElement("div");
        let pEl = document.createElement("p");
        pEl.innerHTML = "˚ʚ♡ɞ˚ " + right.name + " - " + right.price + " kr - " + right.subcategory + " -" + right.date;;

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Fjern";
        deleteBtn.id = i; 
        deleteBtn.addEventListener("click", function() { removeFromList(i, "tre") }); 
       
        divEl.appendChild(pEl);
        divEl.appendChild(deleteBtn);
        rightContainer.appendChild(divEl);
    }
}

//LEGGER TILLLL LISTE FUNSKJON 
function addToList(){
    let n = innholdInputEL.value;
    let p = Number(money.value);
    let c = subcategory.value;
    let d = datoEl.value;
    
    let pluslist = {
        name: n,
        price: p,
        subcategory: c,
        date: d};
    
    if(category.value == "en"){
        listLeft.push(pluslist);
    }
    else if(category.value == "to"){
        listMiddle.push(pluslist);
    }
    else if(category.value == "tre"){
        listRight.push(pluslist);
    }
      
    showListLeft()
    showListRight()
    showListMiddle()
}

//FJERNER FRA LISTE FUNKSJOOOOOON!
function removeFromList(id, liste) {
    if (liste == "en") {
        listLeft.splice(id, 1);
        showListLeft()
    } else if (liste == "to") {
        listMiddle.splice(id, 1);
        showListMiddle()
    } else if (liste == "tre") {
        listRight.splice(id, 1);
        showListRight()
    }
}

//LITT BASIC KODING MEN AIGHT/DE KJEDELIGE FUNKSJONENE
function CheckTittel(){
    title = tittelInputEl.value;
    output = title;
    tittelOutputEl.innerHTML = output;
}

function changeBackgroundColor(){
    const farge = document.getElementById("bakgrunnsfarge").value;
    bodyEl.style.backgroundColor = farge;
}

//SORTER FUNKSJON ALFA BETA DELTA
function sortByNameLeft() {
    listLeft.sort(compareName);
    showListLeft();
}

function sortByNameMiddle() {
    listMiddle.sort(compareName);
    showListMiddle();
}

function sortByNameRight() {
    listRight.sort(compareName);
    showListRight();
}
 
function compareName(a, b) {
    return a.name.localeCompare(b.name);
} 


//PRICE FUNKSJONER
function sortByPriceLeft(){
    listLeft.sort(comparePrice);
    showListLeft()
}

function sortByPriceMiddle(){
    listMiddle.sort(comparePrice);
    showListMiddle()
}

function sortByPriceRight(){
    listRight.sort(comparePrice);
    showListRight()
}

function comparePrice (a, b){
    return (a.price)-(b.price)
}
 
 
