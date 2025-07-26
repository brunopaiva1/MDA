import React from 'react';
import './CardTarefa.css';
import { Calendar, Flag, Pencil, Trash2 } from 'lucide-react';

function CardTarefa({ tarefa, onEditar, onDeletar }) {
  const formatarData = (data) => {
    if (!data) return 'N/A';
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
  };
  
  const statusClasse = `status-${tarefa.status.toLowerCase().replace(' ', '-')}`;

  return (
    <div className="card-tarefa">
      <div className="card-header">
        <h3>{tarefa.nomeTarefa}</h3>
        
        <span className={`status-badge ${statusClasse}`}>{tarefa.status}</span>
        
        <div className="card-actions">
          <button className="action-button edit-button" onClick={() => onEditar(tarefa)} aria-label="Editar">
            <Pencil size={18} />
          </button>
          <button className="action-button delete-button" onClick={() => onDeletar(tarefa.id)} aria-label="Deletar">
            <Trash2 size={18} />
          </button>
        </div>
      </div>
      <p className="card-descricao">{tarefa.descricao || 'Nenhuma descrição fornecida.'}</p>
      <div className="card-footer">
        <div className="card-data">
          <Calendar size={16} />
          <span>Início: {formatarData(tarefa.dataInicio)}</span>
        </div>
        <div className="card-data">
          <Flag size={16} />
          <span>Fim: {formatarData(tarefa.dataFim)}</span>
        </div>
      </div>
    </div>
  );
}

export default CardTarefa;