import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; 
import { ArrowLeft } from 'lucide-react'; 

function Register() {
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Usuário cadastrado:\nCPF: ${cpf}\nE-mail: ${email}\nSenha: ${senha}`);
    navigate('/');
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
          placeholder="CPF (ex: 123.456.789-00)"
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
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Register;
