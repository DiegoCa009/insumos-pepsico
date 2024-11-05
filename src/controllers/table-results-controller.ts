const rangeInput = document.getElementById('myRange') as HTMLInputElement;
const rangeValue = document.getElementById('rangeValue') as HTMLSpanElement;

const thCollection = document.getElementsByTagName('th') as HTMLCollectionOf<HTMLElement>;
const tdCollection = document.getElementsByTagName('td') as HTMLCollectionOf<HTMLElement>;

const menu = document.getElementById('menu') as HTMLElement;
const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement;
 
toggleButton.addEventListener('click', () => {
    // Alternar la clase 'hidden' en el menú
    menu.classList.toggle('hidden');
    // Cambiar el texto del botón
    if (menu.classList.contains('hidden')) {
        toggleButton.textContent = 'Mostrar Menú';
    } else {
        toggleButton.textContent = 'Ocultar Menú';
    }
});


function updateRangeValue() {
    rangeValue.textContent = `${rangeInput.value}px`;
    changePadding(tdCollection, rangeInput.value);
    changePadding(thCollection, rangeInput.value);
  }
  
  // Escucha el evento de cambio en el rango para actualizar el valor en tiempo real
  rangeInput.addEventListener('input', updateRangeValue);



const changePadding = (collection: HTMLCollectionOf<HTMLElement>, padding: (string | number))=>{
    Array.from(collection).forEach((element)=>{
        if (element instanceof HTMLElement) {
            element.style.padding = `${padding}px`;
        }
    })
}