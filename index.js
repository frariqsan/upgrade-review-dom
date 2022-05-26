//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const listCountries =document.createElement('ul');
document.body.appendChild(listCountries);

countries.forEach((country) => {
    const liCountry = document.createElement('li');
    liCountry.innerText = country;
    listCountries.appendChild(liCountry);
    
});

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const erase = document.querySelector('.fn-remove-me');
erase.remove();

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divContainer = document.querySelector('div[data-function="printHere"]');
const ulDiv = document.createElement('ul');
divContainer.appendChild(ulDiv);
cars.forEach((car) => {
    const liDiv = document.createElement('li');
    liDiv.innerText = car;
    ulDiv.appendChild(liDiv);
    
});

//1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
//h4 para el titulo y otro elemento img para la imagen.
const countries1 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const list = document.createElement('ul'); //creamos ul
document.body.appendChild(list); //crea un ul vacio al HTML
countries1.forEach((country) => {
    const liContainer = document.createElement('li');
    list.appendChild(liContainer);//añade el li dentro del ul
    const divContainer = document.createElement('div');
    liContainer.appendChild(divContainer);//añade el div dentro del li
    const h4 = document.createElement('h4');
    h4.innerText = country.title;
    const img = document.createElement('img');
    img.setAttribute('src',country.imgUrl);//elige el atributo para añadir la imagen
    divContainer.appendChild(h4);
    divContainer.appendChild(img);
});

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
//elemento de la lista.
buttonStyle = (h,w,text,element) => { //Le ponemos estilo a los botones que se generan

    element.style.height = h;
    element.style.width = w;
    element.innerText = text;
}

const button = document.createElement('button');
const lastUl = document.querySelectorAll('ul'); //¿Cuando poner un querySelectorAll?
let pos = lastUl.length -1;
buttonStyle('80px','80px', "Borrar último", button);
document.body.appendChild(button);
button.addEventListener('click', function(event){
    (lastUl[pos].lastChild) ? //comprueba que sigue existiendo el último elemento
        lastUl[pos].removeChild(lastUl[pos].lastChild)
        : console.log('Error, ya se han borrado todos los elementos');
})

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
//elementos de las listas que elimine ese mismo elemento del html.
const container = document.querySelectorAll('ul li div');
container.forEach((item) => {
    const button = document.createElement('button');
    buttonStyle('40px', '60px',"Borrar Div", button);
    item.appendChild(button);
    button.addEventListener('click', function(event){
        item.parentNode.remove();
    })
});