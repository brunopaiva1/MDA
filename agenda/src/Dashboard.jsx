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

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);

  const adicionarTarefa = (novaTarefa) => {
    setTarefas(tarefasAnteriores => [...tarefasAnteriores, novaTarefa]);
  };

  return (
    <>
      <div className="dashboard-menu-container">
        <div className="content-wrapper">
          <img src={logoEmpresa} alt="Logo da Empresa" className="company-logo" />
          
          <div className="lista-tarefas-container">
            {tarefas.length === 0 ? (
              <p className="sem-tarefas-aviso">Nenhuma tarefa cadastrada ainda.</p>
            ) : (
              tarefas.map(tarefa => (
                <CardTarefa key={tarefa.id} tarefa={tarefa} />
              ))
            )}
          </div>
          
          <button className="add-task-button" onClick={abrirModal}>
            <Plus size={40} />
          </button>
        </div>

      </div>

      {modalAberto && <FormularioTarefa onClose={fecharModal} onAdicionarTarefa={adicionarTarefa} />}

      <Footer />
    </>
  );
}

export default Dashboard;