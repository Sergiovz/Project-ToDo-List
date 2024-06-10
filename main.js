const button = document.querySelector('.boton');
button.addEventListener('click', () => {
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

    if (nuevaTareaTexto === "") {
        alert("Please, Enter a task!");
        return;
    }

    let contenedorDiv = document.createElement("div");
    contenedorDiv.classList.add("contenedorDesordenado");

    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto;
    nuevaTarea.classList.add("lista");


    let buttonDelete = document.createElement("button");
    buttonDelete.innerText = "DELETE";
    buttonDelete.classList.add("buttonColor");
    buttonDelete.onclick = () => {
        contenedorDiv.remove();
    };

    let listaDesordenada = document.getElementById("taskList");
    listaDesordenada.append(contenedorDiv);
    contenedorDiv.appendChild(nuevaTarea);
    contenedorDiv.appendChild(buttonDelete);
    listaDesordenada.append(document.createElement('hr'));

    document.getElementById("nuevaTarea").value = "";
});
