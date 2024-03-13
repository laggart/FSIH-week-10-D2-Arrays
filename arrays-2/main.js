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

function topUserInput() {
    let listBand = document.getElementsByClassName("topUser") 
    let arrayUser = []
    for (let i=0; i < listBand.length; i++){
        arrayUser[i] = listBand[i].value
        console.log (listBand[i].value)
    }
} 




function borrarPrimerElemento() {
    topArtist.shift()
    console.log(topArtist)
};

function borrarUltimoElemento() {
    topArtist.pop()
    console.log(topArtist)
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

function mostrarTodos() {
    topArtist.forEach(mostrar)
    function mostrar() {
        
        console.log()
    }
}


