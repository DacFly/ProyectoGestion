
var objetos = [
  {
    titulo: 'Evento',
    id: 'ID',
    fechaPublicacion: 'Fecha de publicación',
    fechaEvento: 'Fecha del evento',
    hora: 'Hora 1',
    descripcion: 'Descripción',
    direccion: 'Dirección'
  },
  {
    titulo: 'Evento',
    id: 'ID',
    fechaPublicacion: 'Fecha de publicación',
    fechaEvento: 'Fecha del evento',
    hora: 'Hora 1',
    descripcion: 'Descripción',
    direccion: 'Dirección'
  },
  {
    titulo: 'Evento',
    id: 'ID',
    fechaPublicacion: 'Fecha de publicación',
    fechaEvento: 'Fecha del evento',
    hora: 'Hora 1',
    descripcion: 'Descripción',
    direccion: 'Dirección'
  },
  {
    titulo: 'Evento',
    id: 'ID',
    fechaPublicacion: 'Fecha de publicación',
    fechaEvento: 'Fecha del evento',
    hora: 'Hora 1',
    descripcion: 'Descripción',
    direccion: 'Dirección'
  },
  {
    titulo: 'Evento',
    id: 'ID',
    fechaPublicacion: 'Fecha de publicación',
    fechaEvento: 'Fecha del evento',
    hora: 'Hora 1',
    descripcion: 'Descripción',
    direccion: 'Dirección'
  },
  {
    titulo: 'Evento',
    id: 'ID',
    fechaPublicacion: 'Fecha de publicación',
    fechaEvento: 'Fecha del evento',
    hora: 'Hora 1',
    descripcion: 'Descripción',
    direccion: 'Dirección'
  }
];



var cardContainer = document.getElementById('card-container');

for (var i = 0; i < objetos.length; i++) {
  var objeto = objetos[i];
  
  var cardColumn = document.createElement('div');
  cardColumn.classList.add('col-md-4', 'mb-4');
  
  var card = document.createElement('div');
  card.classList.add('card');
  card.style.width = '20rem';

  
  var cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  
  var cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = objeto.titulo;
  
  var cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.textContent = objeto.descripcion;
  
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  
  var listGroup = document.createElement('ul');
  listGroup.classList.add('list-group', 'list-group-flush');
  
  var listItem1 = document.createElement('li');
  listItem1.classList.add('list-group-item');
  listItem1.textContent = 'ID: ' + objeto.id;
  
  var listItem2 = document.createElement('li');
  listItem2.classList.add('list-group-item');
  listItem2.textContent = 'Fecha de publicación: ' + objeto.fechaPublicacion;
  
  var listItem3 = document.createElement('li');
  listItem3.classList.add('list-group-item');
  listItem3.textContent = 'Fecha del evento: ' + objeto.fechaEvento;
  
  var listItem4 = document.createElement('li');
  listItem4.classList.add('list-group-item');
  listItem4.textContent = 'Hora: ' + objeto.hora;
  
  var listItem5 = document.createElement('li');
  listItem5.classList.add('list-group-item');
  listItem5.textContent = 'Dirección: ' + objeto.direccion;
  
  listGroup.appendChild(listItem1);
  listGroup.appendChild(listItem2);
  listGroup.appendChild(listItem3);
  listGroup.appendChild(listItem4);
  listGroup.appendChild(listItem5);
  
  var cardBody2 = document.createElement('div');
  cardBody2.classList.add('card-body');
  
  var inscribirseButton = document.createElement('button');
  inscribirseButton.classList.add('btn', 'btn-lg');
  inscribirseButton.setAttribute('type', 'button');
  
  inscribirseButton.style.backgroundColor = "#9dd1cd";
  inscribirseButton.textContent = 'Inscribirse';
  
  cardBody2.appendChild(inscribirseButton);
  
  card.appendChild(cardBody);
  card.appendChild(listGroup);
  card.appendChild(cardBody2);
  
  cardColumn.appendChild(card);
  
  cardContainer.appendChild(cardColumn);
}


function validateLogin()
{
    console.log( )
    if (sessionStorage.getItem("sesion")==null) {
        window.location.href="login.html";
    }
} 

validateLogin();