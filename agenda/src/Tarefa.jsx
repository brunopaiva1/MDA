import React, { useState } from 'react';
import './Tarefa.css';
import { X } from 'lucide-react';

function FormularioTarefa({ onClose, onAdicionarTarefa }) {
  const [nomeTarefa, setNomeTarefa] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [status, setStatus] = useState('Pendente');

  const handleSubmit = (e) => {
    e.preventDefault();
    const novaTarefa = { 
      id: Date.now(), 
      nomeTarefa, 
      descricao, 
      dataInicio, 
      dataFim, 
      status 
    };
    
    onAdicionarTarefa(novaTarefa);
    
    alert('Tarefa cadastrada com sucesso!');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <button type="button" className="close-button" onClick={onClose}>
            <X size={24} />
          </button>
          
          <h2>Cadastrar Nova Tarefa</h2>
          
          <div className="form-group">
            <label htmlFor="nomeTarefa">Nome da Tarefa</label>
            <input
              type="text"
              id="nomeTarefa"
              value={nomeTarefa}
              onChange={(e) => setNomeTarefa(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              rows="4"
            ></textarea>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="dataInicio">Data de Início</label>
              <input
                type="date"
                id="dataInicio"
                value={dataInicio}
                onChange={(e) => setDataInicio(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="dataFim">Data de Fim</label>
              <input
                type="date"
                id="dataFim"
                value={dataFim}
                onChange={(e) => setDataFim(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Pendente">Pendente</option>
              <option value="Em Andamento">Em Andamento</option>
              <option value="Concluída">Concluída</option>
            </select>
          </div>
          
          <button type="submit" className="submit-button">Salvar Tarefa</button>
        </form>
      </div>
    </div>
  );
}

export default FormularioTarefa;