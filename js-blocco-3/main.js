// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

// Infine stampa separatamente i 3 array.


const auto = [
    {
        marca: "volskwagen",
        modello: "golf",
        alimentazione: "benzina",
    },
    {
        marca: "honda",
        modello: "civic",
        alimentazione: "diesel",
    },
    {
        marca: "fiat",
        modello: "500",
        alimentazione: "elettrica",
    },
    {
        marca: "Dacia",
        modello: "Duster",
        alimentazione: "benzina",
    },
    {
        marca: "Opel",
        modello: "Mokka",
        alimentazione: "diesel",
    },
    {
        marca: "Nissan",
        modello: "Skyline",
        alimentazione: "benzina",
    },
    {
        marca: "Ford",
        modello: "Mustang",
        alimentazione: "benzina",
    },
    {
        marca: "Volskwagen",
        modello: "Polo",
        alimentazione: "gpl",
    },
    {
        marca: "Alfa Romeo",
        modello: "Stelvio",
        alimentazione: "diesel",
    },
    {
        marca: "Lamborghini",
        modello: "Uracan",
        alimentazione: "benzina",
    },

];

const benzina = auto.filter((elm) => elm.alimentazione === "benzina");
const diesel = auto.filter((elm) => elm.alimentazione === "diesel");
const others = auto.filter((elm) => elm.alimentazione !== "diesel" && elm.alimentazione !== "benzina");

console.log(benzina);
console.log(diesel);
console.log(others);