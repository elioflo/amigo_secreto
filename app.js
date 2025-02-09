const listaDeAmigos = document.querySelector('#listaAmigos')
const input = document.querySelector('#amigo')
const resultado = document.querySelector('#resultado')
const sortearBoton = document.querySelector('#sortearBoton')
const resetBoton = document.querySelector('#resetBoton')

function agregarAmigo(event){
  const nombre = input.value
  const apretaronEnter = event.target.nodeName === 'INPUT' && event.key === 'Enter'
  const apretaronBoton = event.target.nodeName === 'BUTTON'
  if(apretaronEnter || apretaronBoton) {
    if(validarNombre(nombre.trim())) {
      const listaItem = crearItem(nombre)
      listaDeAmigos.appendChild(listaItem)
      sortearBoton.disabled = false
      resetBoton.disabled = false      
    }else{
      alert('Ingrese un nombre valido!')
    }
    input.value = ''
  }
}

function habilitarSorteo(){
  sortearBoton.disabled = !Array.from(listaDeAmigos.children).some(item => item.querySelector('input').checked)
}

function crearItem(nombre) {
  const item = document.createElement('li')
  const input = document.createElement('input')
  input.type = 'checkbox'
  input.name = 'nombre'
  input.id = listaDeAmigos.childElementCount+1
  input.value = `${listaDeAmigos.childElementCount+1} ${nombre}`
  input.checked = true
  input.addEventListener('change', habilitarSorteo)
  const label = document.createElement('label')
  label.htmlFor = input.id
  label.innerHTML = `<span>${listaDeAmigos.childElementCount+1}</span> ${nombre}`
  item.append(input, label)
  return item
}

function reset(){
  listaDeAmigos.innerHTML = ''
  resultado.innerHTML = ''
  sortearBoton.disabled = true
  resetBoton.disabled = true
}

function sortearAmigo() {
  const habilitados = Array.from(listaDeAmigos.children).filter(item => item.querySelector('input').checked)
  const cantidad = habilitados.length
  const ganador = habilitados[Math.floor(Math.random()*cantidad)]
  resultado.innerHTML = `<li>El ganador es ${ganador.textContent}</li>`
  ganador.querySelector('input').checked = false
  habilitarSorteo()
}

function validarNombre(nombre) {
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/
  return regex.test(nombre) && !(nombre.length < 2) && !(nombre.length > 50) 
}