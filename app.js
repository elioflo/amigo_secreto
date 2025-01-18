const nombres = []
const listaDeAmigos = document.querySelector('#listaAmigos')
const input = document.querySelector('#amigo')

function agregarAmigo(){
  const nombre = input.value
  if(validarNombre(nombre)) {
    nombres.push(input.value)
    const listaItem = document.createElement('li')
    listaItem.textContent = input.value
    listaDeAmigos.appendChild(listaItem)
  }else{
    alert('Ingrese un nombre valido!')
  }
}

function sortearAmigo() {
  const ganador = nombres[Math.floor(Math.random()*nombres.length)]
  const resultado = document.querySelector('#resultado')
  resultado.innerHTML = `<li>El ganador es ${ganador}</li>`
}

function validarNombre(nombre) {
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/
  return regex.test(nombre) && !(nombre.length < 1) && !(nombre.length > 50) 
}