import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { criarUsuario } from './api';

function Register() {
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem. Por favor, tente novamente.');
      return; 
    }
    await criarUsuario({ cpf, email, senha });
    alert(`Usuário cadastrado com sucesso!\nCPF: ${cpf}\nE-mail: ${email}`);
    navigate('/');
  };
  
  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="arrow-icon" onClick={() => navigate('/')}>
          <ArrowLeft size={24} />
        </div>
        <h2>Cadastro</h2>
        <input
          type="text"
          placeholder="CPF (ex: 12345678900)"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <div className="password-input-container">
          <input
            type={mostrarSenha ? 'text' : 'password'}
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <div className="password-icon" onClick={toggleMostrarSenha}>
            {mostrarSenha ? <EyeOff size={20} /> : <Eye size={20} />}
          </div>
        </div>

        <div className="password-input-container">
          <input
            type={mostrarSenha ? 'text' : 'password'} 
            placeholder="Confirmar Senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
          />
          <div className="password-icon" onClick={toggleMostrarSenha}>
            {mostrarSenha ? <EyeOff size={20} /> : <Eye size={20} />}
          </div>
        </div>
        
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Register;
