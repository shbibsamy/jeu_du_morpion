// Qui joue? J1: 1, J2: -1
let tour = -1;
// Un objet pour suivre le jeu qui permet de tester si quelqu'un a gagné
let objJeu = {
    rows: [0, 0, 0],
    cols: [0, 0, 0],
    diags: [0, 0]
};

// Combien de fois on a joué
let tours = 0;

init()
function init() {
    // Trouver où on va afficher le jeu
    let tailleGrille = 3;
    let espaceJeu = document.querySelector(".jeu-grille");
    // Créer le table du jeu
    monTable = createTable(tailleGrille);
    espaceJeu.appendChild(monTable);
}

function createTable(taille) {
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
            // Ajouter un event listener à chaque cellule. Si cliqué, appel la fonction dessiner et jouer
            cell.addEventListener("click", e => {
                tour *= -1;
                // Met le joueur dans la className
                cell.classList.add(tour);
                // Continuer
                dessiner(cell);
                jouer(cell, rows, cols);
            }, {
                // Le bouton ne marche qu'une seule fois
                once: true
            })
            row.appendChild(cell);
        }
        monTable.appendChild(row);
    }
    return monTable;
}

// Fonction qui va déssiner dans la céllule
function dessiner(cell) {
    if (tour === 1) {
        cell.innerHTML = "X";
    } else {
        cell.innerHTML = "O";
    }
}

// Fonction qui va suivre le déroulement du jeu
function jouer(cell, row, col) {
    let cClass = parseInt(cell.classList.value, 10);
    // Met à jour l'objet qui suit le jeu en additionnant le numéro du joueur
    objJeu.rows[row] += cClass;
    objJeu.cols[col] += cClass;
    switch (row) {
        case 0:
            switch (col) {
                case 0:
                    objJeu.diags[0] += cClass;
                    break;
                case 2:
                    objJeu.diags[1] += cClass;
                    break;
                default:
            }
            break;
        case 1:
            if (col === 1) {
                objJeu.diags[0] += cClass;
                objJeu.diags[1] += cClass;
            }
            break;
        case 2:
            switch (col) {
                case 0:
                    objJeu.diags[1] += cClass;
                    break;
                case 2:
                    objJeu.diags[0] += cClass;
                    break;
                default:
            }
            break;
            default:
    }
    gagner();
}


function gagner() {
    // Faire un string de l'objet qui suit le jeu
    let resultat = JSON.stringify(objJeu);
    let boutonGagne = document.getElementById("gagne_bouton");
    let spanGagne = document.getElementById("gagne_span");
    // Cherche si l'objet contient le chiffre 3
    if (resultat.includes(3)) {
        monTable.classList.add("disabled");
        if (tour === 1) {
            spanGagne.innerHTML = "Joueur 1 a Gagné ! Bravo !";
        } else {
            spanGagne.innerHTML = "Joueur 2 a Gagné ! Bravo !";

        }
        boutonGagne.removeAttribute("hidden", "");
        boutonGagne.addEventListener("click", e => {
            location.reload();
        })
    } else {
        tours++;
        if (tours === 9) {
            boutonGagne.removeAttribute("hidden", "");
            spanGagne.innerHTML = "Oups!"
            boutonGagne.addEventListener("click", e => {
                location.reload();
            })
        }
    }

}