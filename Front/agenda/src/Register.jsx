import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Register() {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Usuário cadastrado:\nCPF: ${cpf}\nSenha: ${senha}`);
    navigate('/');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Cadastro</h2>
        <input
          type="text"
          placeholder="CPF (ex: 123.456.789-00)"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
        <button type="button" className="register-button" onClick={() => navigate('/')}>
          Voltar ao Login
        </button>
      </form>
    </div>
  );
}

export default Register;
