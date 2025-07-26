import React, { useState } from 'react';
import './Dashboard.css';
import { Plus } from 'lucide-react';
import logoEmpresa from './assets/logo-mda.png';
import FormularioTarefa from './Tarefa';

function Dashboard() {
  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);

  return (
    <div className="dashboard-menu-container">
      <div className="content-wrapper">
        <img src={logoEmpresa} alt="Logo da Empresa" className="company-logo" />
        <h1 className="menu-title">Minhas Tarefas</h1>
        <button className="add-task-button" onClick={abrirModal}>
          <Plus size={40} />
        </button>
      </div>

      <footer>
        © {new Date().getFullYear()} MDA. Todos os direitos reservados.
      </footer>

      {modalAberto && <FormularioTarefa onClose={fecharModal} />}
    </div>
  );
}

export default Dashboard;