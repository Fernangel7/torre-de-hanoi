console.log("Bienvenido a el programa de torre de hanoi");

let numDiscos = parseInt(prompt("Ingrese el numero de discos que desea mover: "));

function hanoi(n, origen, destino, auxiliar) {
    if (n === 1) {
        console.log(`Mover disco 1 desde ${origen} hasta ${destino}`);
        return;
    }

    hanoi(n - 1, origen, auxiliar, destino);
    console.log(`Mover disco ${n} desde ${origen} hasta ${destino}`);
    hanoi(n - 1, auxiliar, destino, origen);
}
hanoi(numDiscos, 'A', 'C', 'B');
