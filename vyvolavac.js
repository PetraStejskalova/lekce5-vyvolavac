let jmena = [
    "Markéta",
    "Kateřina",
    "Júlia",
    "Lucie",
    "Aneta",
    "Veronika",
    "Petra",
    "Olga",
    "Naďa",
    "Nikola",
    "Eva",
    "Anísa",
    "Terezia",
    "Diana",
    "Anna",
    "Iva",
    "Denisa",
    "Zuzana",
    "Jana",
    "Martina",
    "Lenka",
    "Iveta",
    "Pavla",
    "Lucie",
    "Kamila",
    "Soňa"
];

let tazenaJmena = [];

function tahnoutJmeno() {
    if (jmena.length === 0) {
        return;
    }

    // Generujeme náhodný index
    let vyherniIndex = Math.floor(Math.random() * jmena.length);

    // Získáme výherní jméno na patřičném indexu
    let vyherniJmeno = jmena[vyherniIndex];

    // Vyřadíme vylosované jméno z osudí
    jmena.splice(vyherniIndex, 1);

    // Výherní jméno si uložíme do pole k ostatním výherním
    tazenaJmena.unshift(vyherniJmeno);

    console.log(tazenaJmena);

    let vyherce = document.querySelector('#vyherka');
    vyherce.textContent = vyherniJmeno;

    let seznam = document.querySelector('#seznam');
    seznam.textContent = tazenaJmena;

    // počet vybraných holek
    pocitadlo();

}

function pocitadlo() {
    let pocitadlo = document.querySelector('#pocitadlo');
    pocitadlo.textContent = tazenaJmena.length;
}


function restartovatVyvolavac() {

    // odeberu všechna tažená jména z pole
    tazenaJmena.splice(0, 100);

    console.log(tazenaJmena);

    let vyherce = document.querySelector('#vyherka');
    vyherce.textContent = '';

    // vrátím seznam vyvolených do původní podoby
    let seznam = document.querySelector('#seznam');
    seznam.textContent = 'Seznam vyvolaných';

    pocitadlo();
}
