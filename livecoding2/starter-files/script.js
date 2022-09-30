// API
const API_ENDPOINT = 'https://yesno.wtf/api';
answer = document.getElementById("answer");
question = document.getElementById("input");
btn = document.getElementById("button");


btn.addEventListener('click',function name(e) {
    if(question.value.length >0){
    let promesa =  fetch('https://yesno.wtf/api',{
    method:"GET"
});
    promesa.then((response)=>{
        response.json().then((data)=>{
            console.log(data.answer);
            answer.innerText = data.answer;
            answer.inerHTML += `<img src="${data.image}" alt=""> `;
            const myTimeout = setTimeout(clear, 3000);

        }).catch((error)=>{
            console.error("Error al recopilar datos "+error);
        })
    }).catch((error)=>{
        console.error("error en la solicitud "+error);
    });}else{console.log("campo de pregunta esta vacio");}
})

function clear() {
    answer.innerText = "";
    question.value = '';
}



/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
