/*
   Selectores JavaScript*/

/*
 * . getElementById Elemento: <div id="color-box">Tarea: Cambia el color 
de fondo del div al pulsar cada botón de color.*/
function changeColor(bg, text) {
  const box = document.getElementById('color-box');
  box.style.background = bg;
  box.style.color = text;
  box.textContent = 'Color: ' + bg;
}

/*  . querySelectorElemento: <p id="counter-num"> Tarea: Selecciona el párrafo del
 contador y actualiza su valor numérico (+1 / -1 / reset).*/
let count = 0;

function updateCounter(op) {
  const el = document.querySelector('#counter-num');
  if (op === 0) {
    count = 0;
  } else {
    count += op;
  }
  el.textContent = count;
  el.style.color =
    count < 0 ? 'var(--accent2)' :
    count > 0 ? 'var(--accent3)' :
                'var(--accent)';
}

/*  . querySelectorAll Elemento: <li class="item-pill">
Tarea: Obtiene todos los ítems y permite activar y desactivar cada etiqueta individualmente. Muestra en el output las seleccionadas. */
function togglePill(el) {
  el.classList.toggle('active');
  updatePillOutput();
}

function clearPills() {
  document.querySelectorAll('.item-pill').forEach(p => {
    p.classList.remove('active');
  });
  updatePillOutput();
}

function updatePillOutput() {
  const selected = [...document.querySelectorAll('.item-pill.active')]
    .map(p => p.textContent);
  document.getElementById('pill-output').textContent =
    selected.length
      ? 'Seleccionadas: ' + selected.join(', ')
      : 'Ninguna seleccionada';
}

/* . getElementsByTagNameElemento: <p> dentro de #paragraph-areaTarea: 
Selecciona todos los párrafos del área y cambia su tamaño de fuente y color */
function styleParas(mode) {
  const area  = document.getElementById('paragraph-area');
  const paras = area.getElementsByTagName('p');

  for (let p of paras) {
    if (mode === 'big')   { p.style.fontSize = '1.05rem'; p.style.color = 'var(--text)'; }
    if (mode === 'color') { p.style.color = 'var(--accent3)'; }
    if (mode === 'reset') { p.style.fontSize = ''; p.style.color = ''; }
  }
}

/*  . getElementsByClassName Elemento: <span class="highlight-able">
 * Tarea: Resalta o quita el resaltado de todas las palabras clave de la sección. */
function highlightWords(on) {
  const words = document.getElementsByClassName('highlight-able');

  for (let w of words) {
    w.style.background = on ? 'var(--accent)' : '';
    w.style.color      = on ? 'var(--bg)'     : '';
  }
}

/*  . querySelector + evento input Elemento: <input id="name-input"> 
Tarea: Detecta el texto escrito en tiempo real y genera un saludo dinámico en el output.*/
function greetUser() {
  const input  = document.querySelector('#name-input');
  const output = document.querySelector('#greet-output');
  const val    = input.value.trim();

  output.textContent = val
    ? '¡Hola, ' + val + '¡ Bienvenido al Lab 2!'
    : 'Esperando texto…';
}

/*  . getElementById + classList.toggle Elemento: <img id="hero-img"> 
Tarea: Alterna la clase CSS . colored para cambiarla imagen entre blanco/negro y color. */
function toggleImage() {
  const img = document.getElementById('hero-img');
  img.classList.toggle('colored');
}

/*  . querySelector + manipulación del DOM Elemento: <tr> dentro 
de #table-bodyTarea: Agrega o elimina filas  en la tabla  dinámicamente y actualiza el conteo. */
const extraRows = [
  ['querySelector',      'Element | null',   'Selecciona el primer elemento que coincida con el selector CSS'],
  ['getElementById',     'Element | null',   'Selecciona un elemento por su ID único en el documento'],
  ['getAttribute',       'string | null',    'Obtiene el valor de un atributo HTML del elemento seleccionado'],
  ['closest()',          'Element | null',   'Recorre los ancestros buscando el selector más cercano'],
];
let rowIdx = 0;

function addRow() {
  const tbody  = document.querySelector('#table-body');
  const output = document.getElementById('table-output');

  if (rowIdx >= extraRows.length) {
    output.textContent = '✅ No hay más filas para agregar.';
    return;
  }

  const [sel, ret, desc] = extraRows[rowIdx++];
  const tr = document.createElement('tr');
  tr.innerHTML = `<td>${sel}</td><td>${ret}</td><td>${desc}</td>`;
  tbody.appendChild(tr);
  updateTableOutput(tbody);
}

function removeRow() {
  const tbody = document.querySelector('#table-body');
  const rows  = tbody.querySelectorAll('tr');

  if (rows.length > 1) {
    tbody.removeChild(rows[rows.length - 1]);
    if (rowIdx > 0) rowIdx--;
  }
  updateTableOutput(tbody);
}

function updateTableOutput(tbody) {
  const n = tbody.querySelectorAll('tr').length;
  document.getElementById('table-output').textContent = 'Filas actuales: ' + n;
}

/* 
 *  getElementById – Toggle de tema (header badge) Elemento: <span id="header-badge"
Tarea: Alterna entre tema oscuro y claro modificando las variables CSS del root.
 * */
let dark = true;

function toggleTheme() {
  dark = !dark;
  const badge = document.getElementById('header-badge');
  const root  = document.documentElement.style;

  root.setProperty('--bg',      dark ? '#0b0c10' : '#f4f4f0');
  root.setProperty('--surface', dark ? '#13141a' : '#e8e9e3');
  root.setProperty('--card',    dark ? '#1b1d26' : '#ffffff');
  root.setProperty('--text',    dark ? '#e8eaf0' : '#111111');
  root.setProperty('--muted',   dark ? '#6b6f80' : '#555555');

  badge.textContent = 'TEMA: ' + (dark ? 'OSCURO' : 'CLARO');
}