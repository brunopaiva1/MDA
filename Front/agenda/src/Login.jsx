import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

function Login() {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cpf === '123.456.789-00' && senha === '123456') {
      alert('Login bem-sucedido!');
    } else {
      alert('CPF ou senha incorretos');
    }
  };

  const handleCadastro = () => {
    navigate('/cadastro');
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        <button type="submit">Entrar</button>
        <button type="button" className='register-button' onClick={handleCadastro}>Cadastre-se</button>
      </form>
    </div>
  );
}

export default Login;
