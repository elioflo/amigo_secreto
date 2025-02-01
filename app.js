const listaDeAmigos = document.querySelector('#listaAmigos')
const input = document.querySelector('#amigo')
const resultado = document.querySelector('#resultado')

function agregarAmigo(event){
  const nombre = input.value
  const apretaronEnter = event.target.nodeName === 'INPUT' && event.key === 'Enter'
  const apretaronBoton = event.target.nodeName === 'BUTTON'
  if(apretaronEnter || apretaronBoton) {
    if(validarNombre(nombre.trim())) {
      const listaItem = document.createElement('li')
      listaItem.textContent = nombre
      listaDeAmigos.appendChild(listaItem)
    }else{
      alert('Ingrese un nombre valido!')
    }
    input.value = ''
  }
}

function reset(){
  listaDeAmigos.innerHTML = ''
  resultado.innerHTML = ''
}

function sortearAmigo() {
  const cantidad = listaDeAmigos.children.length
  const ganador = listaDeAmigos.children[Math.floor(Math.random()*cantidad)]
  resultado.innerHTML = `<li>El ganador es ${ganador.textContent}</li>`
}

function validarNombre(nombre) {
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/
  return regex.test(nombre) && !(nombre.length < 2) && !(nombre.length > 50) 
}