const Bandas = { Name:" Ray Charles", Genre: "Rock"
} 

const topArtist =[
"The Beatles", 
"Bob Dylan", 
"Elvis Presley", 
"Rolling Stones", 
"Chuck Berry", 
"Jimmy Hendrix", 
"James Brown", 
"Little Richard", 
"Aretha Franklin", 
"Rey Charles"  
]
console.log(topArtist)
const arrayUser = []

function rellenar() {
    for (let i=0; i < arrayUser.length; i++){
        
    }    
}

function topUserInput() {
    let listBand = document.getElementsByClassName("topUser") 
    for (let i=0; i < listBand.length; i++){
        arrayUser[i] = listBand[i].value
        console.log (listBand[i].value)
    }
} 

function mostrarTodos() {
    arrayUser.forEach(function(artist, index){
    let listItem = document.getElementById("top" + index);
    listItem.textContent = artist;
    } )
};

function borrarPrimerElemento() {
    arrayUser.shift()
    console.log(arrayUser)
    mostrarTodos()
};

function borrarUltimoElemento() {
    arrayUser.pop()
    console.log(arrayUser)
    mostrarTodos()
}

function cambiarIndice() {

}

function buscarIndice() {
    let banda = document.getElementById("BandaName").value
    console.log(topArtist.indexOf(banda))
}

function mostrarIndice() {
    let indiceUser = document.getElementById("indexUser").value
    let indice = (indiceUser+1)
    console.log(topArtist[indice])
}


function mostrar() {        
    console.log()}

