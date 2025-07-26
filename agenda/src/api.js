const API_BASE_URL = "https://p83uwjy3mi.execute-api.us-east-1.amazonaws.com/dev";

// Usuários
export async function criarUsuario(usuario) {
  const res = await fetch(`${API_BASE_URL}/usuarios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });
  return res.json();
}

// Tarefas
export async function criarTarefa(tarefa) {
  const res = await fetch(`${API_BASE_URL}/tarefas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tarefa),
  });
  return res.json();
}

export async function listarTarefas(userId) {
  const res = await fetch(`${API_BASE_URL}/tarefas?userId=${userId}`);
  return res.json();
}

export async function atualizarTarefa(tarefa) {
  const res = await fetch(`${API_BASE_URL}/tarefas/${tarefa.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tarefa),
  });
  return res.json();
}

export async function excluirTarefa(userId, tarefaId) {
  const res = await fetch(`${API_BASE_URL}/tarefas/${tarefaId}?userId=${userId}`, {
    method: "DELETE",
  });
  return res.json();
}

export async function loginUsuario(cpf, senha) {
  const res = await fetch(`${API_BASE_URL}/usuarios/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cpf, senha }),
  });
  return res.json();
}
