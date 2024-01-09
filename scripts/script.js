let tablinks = document.getElementsByClassName("tab-links"); //cria variável let (não pode ser usada novamente)
let tabcontents = document.getElementsByClassName("tab-contents");


function opentab(tabname) { //estrutura de uma função, com um parâmetro 'tabname'
    for(tablink of tablinks){ //laço for - of (ver docs)
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link"); //adiciona um evento (ver docs)
    document.getElementById(tabname).classList.add("active-tab");
}