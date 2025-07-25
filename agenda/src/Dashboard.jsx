import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === '') return;
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa('');
  };

  return (
    <div className="dashboard-container">
      <h2>Minhas Tarefas</h2>
      <ul className="lista-tarefas">
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
      <div className="adicionar-tarefa">
        <input
          type="text"
          placeholder="Nova tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>
    </div>
  );
}

export default Dashboard;
