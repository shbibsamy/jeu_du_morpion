// Qui joue? J1: 1, J2: -1
let tour = -1;

document.addEventListener("DOMContentLoaded", (event) => {
    init()
})

function init() {
    // Trouver où on va afficher le jeu
    let tailleGrille = 3;
    let classJeu = document.getElementsByClassName("jeu-grille");
    let espaceJeu = classJeu[0];
    // Créer le table du jeu
    monTable = createTable(espaceJeu, tailleGrille);
    espaceJeu.appendChild(monTable);
}

function createTable(espaceJeu, taille) {
    // Créer le table et lui ajouter un titre
    let monTable = document.createElement("table");
    let monTableCaption = monTable.createCaption();
    monTableCaption.innerHTML = "Morpion";
    monTableCaption.classList.add("morpion-titre");
    // Créer les lignes et les cellules
    for (let rows = 0; rows < taille; rows++) {
        let row = document.createElement("tr");
        for (let cols = 0; cols < taille; cols++) {
            let cell = document.createElement("td");
            cell.id = [rows, cols];
            // Ajouter un event listener à chaque cellule. Si cliqué, appel la fonction jouer
            cell.addEventListener("click", (monEvent) => {
                play(cell.id);
            }, {once : true})
            row.appendChild(cell);
        }
        monTable.appendChild(row);
    }
    return monTable;
}

function jouer (cell) {
    tour *= -1;
    console.log(tour);
    console.log(cell);
}