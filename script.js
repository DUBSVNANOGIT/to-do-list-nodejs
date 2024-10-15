function addTarefa() {
    var tarefas = []
    const tarefa = document.getElementById("tarefaInput").value
    const novaTarefa = {
        id : tarefas.length,
        tarefa : tarefa
    }
    tarefas.push(novaTarefa);
    console.log(tarefas)
}