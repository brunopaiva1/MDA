import React, { useState } from 'react';
import './Dashboard.css';
import { Plus } from 'lucide-react';
import logoEmpresa from './assets/logo-mda.png';
import FormularioTarefa from './Tarefa';
import CardTarefa from './CardTarefa';
import Footer from './Footer';

function Dashboard() {
  const [modalAberto, setModalAberto] = useState(false);
  const [tarefas, setTarefas] = useState([]);
  
  const [tarefaParaEditar, setTarefaParaEditar] = useState(null);

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

  const handleSalvarTarefa = (tarefaSalva) => {
    if (tarefas.some(t => t.id === tarefaSalva.id)) {
      setTarefas(tarefasAnteriores =>
        tarefasAnteriores.map(t => (t.id === tarefaSalva.id ? tarefaSalva : t))
      );
    } else {
      setTarefas(tarefasAnteriores => [...tarefasAnteriores, tarefaSalva]);
    }
    fecharModal();
  };

  const handleDeletarTarefa = (idDaTarefa) => {
    if (window.confirm('Tem certeza que deseja excluir esta tarefa?')) {
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