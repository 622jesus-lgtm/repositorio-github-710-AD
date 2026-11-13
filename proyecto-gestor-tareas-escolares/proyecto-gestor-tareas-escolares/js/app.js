// Gestor de tareas escolares: agregar, terminar y eliminar tareas.
// Las tareas se guardan en el navegador (localStorage).

const form = document.getElementById('form-tarea');
const lista = document.getElementById('lista-tareas');

let tareas = JSON.parse(localStorage.getItem('tareas') || '[]');

function guardar() {
  localStorage.setItem('tareas', JSON.stringify(tareas));
}

function mostrar() {
  lista.innerHTML = '';
  tareas.forEach((tarea, i) => {
    const li = document.createElement('li');
    if (tarea.terminada) li.className = 'terminada';
    li.textContent = tarea.titulo + ' — ' + tarea.materia + ' — ' + tarea.fecha + ' ';
    const btnTerminar = document.createElement('button');
    btnTerminar.textContent = 'Terminar';
    btnTerminar.onclick = () => { tareas[i].terminada = true; guardar(); mostrar(); };
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.onclick = () => { tareas.splice(i, 1); guardar(); mostrar(); };
    li.appendChild(btnTerminar);
    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  tareas.push({
    titulo: document.getElementById('titulo').value,
    materia: document.getElementById('materia').value,
    fecha: document.getElementById('fecha').value,
    terminada: false
  });
  guardar();
  mostrar();
  form.reset();
});

mostrar();
