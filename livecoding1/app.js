// Escribe tu código aquí.
let arreglo = ['asdf','asdafga','2as','assgs','as','asdasdas'];
let string = 'dfgd';
ul = document.getElementById("ul2");
btn = document.getElementById("btn1");
campo = document.getElementById("texto");
btn.addEventListener('click',function(e){
    string = campo.value;
    let arreglo2 = sacarMayor(arreglo,string);
    ul.innerHTML="";
    arreglo2.forEach(element => {
        console.log(element);
        ul.innerHTML+= `<li>${element}</li>`;
    });
})
function sacarMayor(array,string) {
    arreglo= [] ;
    for (let i = 0; i < array.length; i++) {
            if(array[i].length>string.length){
                arreglo.push(array[i]);
            }
    }
    return arreglo;
}

