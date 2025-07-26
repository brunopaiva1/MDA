import React from 'react';
import './CardTarefa.css';
import { Calendar, Flag } from 'lucide-react';

function CardTarefa({ tarefa }) {
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
      </div>
      <p className="card-descricao">{tarefa.descricao}</p>
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