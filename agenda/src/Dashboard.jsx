import React from 'react';
import './Dashboard.css';
import { Plus } from 'lucide-react';
import logoEmpresa from './assets/logo-mda.png';

function Dashboard() {
  const handleAddTaskClick = () => {
    alert('Botão de adicionar tarefa clicado!');
  };

  return (
    <div className="dashboard-menu-container">
      <div className="content-wrapper">
        <img src={logoEmpresa} alt="Logo da Empresa" className="company-logo" />
        
        <h1 className="menu-title">Minhas Tarefas</h1>
        
        <button className="add-task-button" onClick={handleAddTaskClick}>
          <Plus size={40} />
        </button>
      </div>
      
      {/* ↓↓ RODAPÉ ADICIONADO AQUI ↓↓ */}
      <footer>
        © {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default Dashboard;