function ejercicio1(){
    let value1 = 4
    if (value1 % 2 == 0)
        console.log(`${value1} es par`)
    else
        console.log(`${value1} no es par`)
}
ejercicio1()
function ejercicio2(){
    let value1 = 5
    let value2 = 4
    if (value1 > value2)
        console.log(`${value1} es mayor a ${value2}`)
    else if (value1 < value2)
        console.log(`${value1} es menor a ${value2}`)
    else if (value1 = value2)
        console.log("Son iguales")
}
ejercicio2()
function ejercicio3(){
    let value = 20
    if (value % 5 === 0)
        console.log(`${value} es multiplo de 5`)
    else
        console.log(`${value} no es multiple de 5`)
}
ejercicio3()
function ejercicio4(){
    let value = 8
    for(let u = 0; u <= value; u++){
        console.log(u);
    }
}
ejercicio4()
function ejercicio5(){
    let palabra = "Alejo"
    let numero = 7
    for(i = 0; i < numero; i++)
    console.log(palabra)
}
ejercicio5()
function ejercicio6(){
    const value = [4, 5, 6, 7, 9]
    for(let i = 0; i <= value; i++){
        console.log(value)
    }
}
ejercicio6()
function ejercicio7(){
    const value1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for( let i = 0; i < value1; i++)
        if(i !==4){
            console.log(i)
        }
}
ejercicio7()
function ejercicio8(){
    let value1 = [1, 2, 3 ,4 ,5]
    let value2 = 2
    for(let i = 0; i < value1; i++){
        let resultado = value1[i] * value2
        console.log(resultado)
    }
}
ejercicio8()