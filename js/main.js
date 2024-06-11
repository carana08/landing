/*let loaded = ( eventLoaded ) => {
  
    window.alert("landing page loaded");
    console.log( eventLoaded );
    debugger;
  
}*/
let completarFormulario = () => {
  let myform = document.getElementById('formulario');
  myform.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('correo').value;
	const cat = document.getElementById('categoria').value;

    if (!nombre || !email || !cat) {
      // Si los campos están vacíos, mostrar una alerta y no enviar los datos
      alert('Por favor, completa todos los campos.');
      return;
    }

    const datos = {
      nombre: nombre,//nombre.value
      email: email,
	  competición: cat,//cat.options[cat.selectIndex].value    
	  };

    fetch('https://primerproyecto-e8b07-default-rtdb.firebaseio.com/colection.json', {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(respuesta => respuesta.json())
      .then(datos => {
        console.log(datos);
        alert('Datos Enviados'); // Imprimir la respuesta del servidor
		obtenerDatos();
      })
      .catch(error => console.error(error));
  });
};

// Llama a la función completarFormulario cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', completarFormulario);

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
	nombre: false,
	correo: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "categoria":
			validarCampo(expresiones.correo, e.target, 'categoria');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.nombre &&  campos.correo &&bterminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});

async function obtenerDatos() {
	const url = "https://primerproyecto-e8b07-default-rtdb.firebaseio.com/colection.json"; // Reemplaza con la URL real
	const respuesta = await fetch(url);
	if (!respuesta.ok) {
	console.error("Error:", respuesta.status);
	return;
	}
	const datos = await respuesta.json();
	loadVotes();
  
	console.log(datos);
	 // Procesar o mostrar los datos obtenidos
	}	
obtenerDatos();
let loadVotes = async() => {
	const url = "https://primerproyecto-e8b07-default-rtdb.firebaseio.com/colection.json"; // Reemplaza con la URL real
	const respuesta = await fetch(url);
	if (!respuesta.ok) {
	console.error("Error:", respuesta.status);
	return;
	}
	const datos = await respuesta.json();
	
	// const tabla = document.getElementById('tabla');

	let votesMap = new Map();

	// tabla.innerHTML = '';
	

	for(const key in datos){
		let vote= datos[key];
		let categoria = vote['competición'];
		let conteo = votesMap.get(categoria)? votesMap.get(categoria) + 1 : 1;
		votesMap.set(categoria, conteo);
	}
	total = 0;
	tableBody.innerHTML = '';

	for (let [key, value] of votesMap) {
		total += value;
		tableBody.innerHTML += `
		<tr>
			<td>${key}</td>
			<td>${value}</td>
		</tr>
		`;
	}
	tableBody.innerHTML += `
	<tr>
		<td><strong>Total de Suscriptores</strong></td>
		<td><Strong>${total}<Strong></td>
	</tr>
	`;

}



