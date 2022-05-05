// Qui joue? 1: premier joueur. -1: deuxieme joueur
let playerTurn = -1;

document.addEventListener("DOMContentLoaded", (event) => {
    init()
})

function init() {
    // Get div to store game and how big the game area is
    let tailleGrille = 3;
    let classJeu = document.getElementsByClassName("jeu-grille");
    let espaceJeu = classJeu[0];
    // Make the game table
    monTable = createTable(espaceJeu, tailleGrille);
    espaceJeu.appendChild(monTable);

}

function createTable(espaceJeu, taille) {
    // Create a table and give it a title
    let monTable = document.createElement("table");
    let monTableCaption = monTable.createCaption();
    monTableCaption.innerHTML = "Morpion";
    monTableCaption.classList.add("morpion-titre");
    // Create rows and cells
    for (let rows = 0; rows < taille; rows++) {
        let row = document.createElement("tr");
        for (let cols = 0; cols < taille; cols++) {
            let cell = document.createElement("td");
            cell.id = [rows, cols];
            // add event listener if player clicks here. This calls the PLAY function and sends this cell's ID.
            cell.addEventListener("click", (monEvent) => {
                play(cell.id);
            }, {once : true})
            row.appendChild(cell);
        }
        monTable.appendChild(row);
    }
    return monTable;
}

function play (cell) {
    playerTurn *= -1;
    console.log(playerTurn);
    console.log(cell);
}



// document.addEventListener("DOMContentLoaded", function yes() {
//     let cells = document.querySelectorAll("td");
//     console.log(cells.length)
//     for (const elements of cells) {
//         elements.addEventListener("click", event => {
//             alert("Clicked on cell");
//         })
//     }

// })