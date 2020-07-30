//Primera parte:
//La función Math.random() retorna un número aleatorio entre 0 y 1 (excluyendo el 1).
//Si se quiere un entero aleatorio entre dos números min y max (excluyendo max), puede usarse el siguiente cálculo:
//Math.floor(Math.random() * (max - min) + min)
//Con esta información, escriba una función que retorne un string que tenga el siguiente formato:
//rgb(X, Y, Z)
//Donde X, Y y Z son números aleatorios entre 0 y 255 (incluyendo 255).



//se crea la función que se solicita, con sus respectivas variables de rgb y la fórmula
function rgb(){
    let red = Math.floor(Math.random()*(256 - 0)+0);
    let green = Math.floor(Math.random()*(256 - 0)+0);
    let blue = Math.floor(Math.random()*(256 - 0)+0);
    return `rgb(${red},${green},${blue})`;
    }


//Segunda parte:
//Una vez creada la función, utilícela para escribir un programa que asigne al texto de cada párrafo de un documento HTML un color aleatorio.

//la función va a cambiar los colores de los parrafos que esten dentro de la clase 'contenido'
let element = document.querySelectorAll('.Contenido p')

//se llama la función rgb en un ciclo para que vaya cambiando los colores de los parrafos dentro de 'contenido'
for(let contador = 0; contador < element.length; contador++){
    element[contador].style.color = rgb();
}

console.log(rgb());