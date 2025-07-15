
function mostrarMalla(tipo) {
  document.getElementById("audiovisual").style.display = tipo === "audiovisual" ? "flex" : "none";
  document.getElementById("grafica").style.display = tipo === "grafica" ? "flex" : "none";

  const container = document.getElementById(tipo);
  container.innerHTML = "";

  materias[tipo].forEach(m => {
    const div = document.createElement("div");
    div.className = "materia";
    div.id = m.id;
    div.innerText = m.nombre;
    if (!m.prerequisitos) div.classList.add("activa");
    container.appendChild(div);
  });
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("materia") && e.target.classList.contains("activa")) {
    e.target.classList.add("completada");
    const tipo = document.getElementById("audiovisual").style.display === "flex" ? "audiovisual" : "grafica";
    materias[tipo].forEach(m => {
      if (m.prerequisitos && m.prerequisitos.includes(e.target.id)) {
        const allMet = m.prerequisitos.every(pr => document.getElementById(pr)?.classList.contains("completada"));
        if (allMet) document.getElementById(m.id)?.classList.add("activa");
      }
    });
  }
});
