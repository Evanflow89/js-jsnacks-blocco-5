// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.


const zucchine = [
    {
        nome: "zucchina uno",
        peso: 300,
        lunghezza: 13,
    },
    {
        nome: "zucchina due",
        peso: 395,
        lunghezza: 15.5,
    },
    {
        nome: "zucchina tre",
        peso: 454,
        lunghezza: 18.7,
    },
    {
        nome: "zucchina quattro",
        peso: 236,
        lunghezza: 9.7,
    },
    {
        nome: "zucchina cinque",
        peso: 144,
        lunghezza: 8.6,
    },
    {
        nome: "zucchina sei",
        peso: 388,
        lunghezza: 15.4,
    },
    {
        nome: "zucchina sette",
        peso: 409,
        lunghezza: 17.3,
    },
    {
        nome: "zucchina otto",
        peso: 367,
        lunghezza: 10.5
    },
    {
        nome: "zucchina nove",
        peso: 189,
        lunghezza: 8.7,
    },
    {
        nome: "zucchina dieci",
        peso: 398,
        lunghezza: 9.6,
    },
];

const zucchineSmall = [];
const zucchineBig = [];
let pesoSmall = 0;
let pesoBig = 0;


for (let i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza < 15) {
        zucchineSmall.push(zucchine[i]);
    } else {
        zucchineBig.push(zucchine[i]);
    }
}

for (let i = 0; i < zucchineSmall.length; i++) {
    pesoSmall += zucchineSmall[i].peso;
}

for (let i = 0; i < zucchineBig.length; i++) {
    pesoBig += zucchineBig[i].peso;
}


console.log(pesoSmall);
console.log(pesoBig);