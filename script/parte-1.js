//Primera parte:
//La función Math.random() retorna un número aleatorio entre 0 y 1 (excluyendo el 1).
//Si se quiere un entero aleatorio entre dos números min y max (excluyendo max), puede usarse el siguiente cálculo:
//Math.floor(Math.random() * (max - min) + min)
//Con esta información, escriba una función que retorne un string que tenga el siguiente formato:
//rgb(X, Y, Z)
//Donde X, Y y Z son números aleatorios entre 0 y 255 (incluyendo 255).

function rgb(min, max){
    return parseInt(Math.random()*(max - min)+min);
}