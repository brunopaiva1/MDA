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
    // Usamos uma div principal para controlar o layout da página inteira
    <div className="dashboard-page">
      
      {/* O conteúdo principal agora fica dentro da tag <main> */}
      <main className="dashboard-main-content">
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
      </main>

      {/* O modal continua aqui, fora do fluxo principal */}
      {modalAberto && <FormularioTarefa onClose={fecharModal} onAdicionarTarefa={adicionarTarefa} />}

      {/* O rodapé é o último item, irmão do <main> */}
      <Footer />
    </div>
  );
}

export default Dashboard;