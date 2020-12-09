function verificaPalindromo(lin) {
    const linRev = [...lin].reverse().join("");

    if (lin == linRev) {
        console.log("É um palíndromo")
    }
};
