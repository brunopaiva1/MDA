import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { Plus } from 'lucide-react';
import logoEmpresa from './assets/logo-mda.png';
import FormularioTarefa from './Tarefa';
import CardTarefa from './CardTarefa';
import Footer from './Footer';
import { listarTarefas, criarTarefa, atualizarTarefa, excluirTarefa } from './api';

function Dashboard() {
  const [modalAberto, setModalAberto] = useState(false);
  const [tarefas, setTarefas] = useState([]);
  const [tarefaParaEditar, setTarefaParaEditar] = useState(null);
  const userId = '12345678900'; // Pegar do login no futuro

  useEffect(() => {
    async function fetchTarefas() {
      const data = await listarTarefas(userId);
      setTarefas(data);
    }
    fetchTarefas();
  }, []);

  const fecharModal = () => {
    setModalAberto(false);
    setTarefaParaEditar(null); 
  };

  const handleAbrirModalParaCriar = () => {
    setTarefaParaEditar(null);
    setModalAberto(true);
  };

  const handleAbrirModalParaEditar = (tarefa) => {
    setTarefaParaEditar(tarefa);
    setModalAberto(true);
  };

  const handleSalvarTarefa = async (tarefaSalva) => {
    tarefaSalva.userId = userId;
    if (tarefas.some(t => t.id === tarefaSalva.id)) {
      await atualizarTarefa(tarefaSalva);
      setTarefas(tarefasAnteriores =>
        tarefasAnteriores.map(t => (t.id === tarefaSalva.id ? tarefaSalva : t))
      );
    } else {
      const novaTarefa = await criarTarefa(tarefaSalva);
      setTarefas([...tarefas, novaTarefa.tarefa]);
    }
    fecharModal();
  };

  const handleDeletarTarefa = async (idDaTarefa) => {
    if (window.confirm('Tem certeza que deseja excluir esta tarefa?')) {
      await excluirTarefa(userId, idDaTarefa);
      setTarefas(tarefasAnteriores => tarefasAnteriores.filter(tarefa => tarefa.id !== idDaTarefa));
    }
  };

  return (
    <div className="dashboard-page">
      <main className="dashboard-main-content">
        <div className="content-wrapper">
          <img src={logoEmpresa} alt="Logo da Empresa" className="company-logo" />
          
          <div className="lista-tarefas-container">
            {tarefas.length === 0 ? (
              <p className="sem-tarefas-aviso">Nenhuma tarefa cadastrada ainda.</p>
            ) : (
              tarefas.map(tarefa => (
                <CardTarefa 
                  key={tarefa.id} 
                  tarefa={tarefa} 
                  onDeletar={handleDeletarTarefa}
                  onEditar={handleAbrirModalParaEditar} 
                />
              ))
            )}
          </div>
          
          <button className="add-task-button" onClick={handleAbrirModalParaCriar}>
            <Plus size={40} />
          </button>
        </div>
      </main>

      {modalAberto && (
        <FormularioTarefa 
          onClose={fecharModal} 
          onSalvar={handleSalvarTarefa}
          tarefaExistente={tarefaParaEditar}
        />
      )}
      
      <Footer />
    </div>
  );
}

export default Dashboard;
