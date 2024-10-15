
var tarefas = [];

async function fetchTarefas() {
    try {
        const response = await fetch('/tarefas');
        if (!response.ok) {
            throw new Error("Erro buscando tarefa")
        }
        const tarefa = await response.json();
        atualizarLista(tarefa);
    } catch(error) {
        console.error(error);
    }
}

function addTarefas() {
    const tarefa = document.getElementById("inserirInput").value;
    const novaTarefa = {
        id : tarefas.length + 1,
        tarefa: tarefa,
        concluida: false
    }
    tarefas.push(novaTarefa);
    atualizarLista(tarefas);
    console.log(tarefas);
}

document.addEventListener('DOMContentLoaded', () => {
    atualizarLista();
});

function atualizarLista(tarefa) {
    const listaTarefas = document.getElementById('listaTarefas');
    listaTarefas.innerHTML = '';
    const fragment = document.createDocumentFragment();
    tarefas.forEach(t => {
        const li = document.createElement('li');
        li.textContent = `${t.id} - ${t.tarefa} - ${tarefa.concluida ? 'Concluída' : 'Pendente'}`;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = t.concluida;
        li.appendChild(checkbox);

        fragment.appendChild(li);
    })
    listaTarefas.appendChild(fragment);
}
