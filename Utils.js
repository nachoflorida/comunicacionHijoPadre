export default function calculaLetraNif(unDni) {
    let arrayDeLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    let pos = unDni % 23;
    return arrayDeLetras[pos];
}
