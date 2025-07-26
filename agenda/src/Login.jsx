import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import { Eye, EyeOff } from 'lucide-react';
import { loginUsuario } from "./api";

function Login() {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  const result = await loginUsuario(cpf, senha);
  if (result.message === "Login realizado com sucesso!") {
    navigate("/dashboard");
  } else {
    alert(result.message);
  }
};

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="CPF (ex: 12345678900)"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
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
          <div className="password-icon" onClick={() => setMostrarSenha(!mostrarSenha)}>
            {mostrarSenha ? <EyeOff size={20} /> : <Eye size={20} />}
          </div>
        </div>

        <button type="submit">Entrar</button>

        <Link to="/register" className="register-link">
          Cadastre-se
        </Link>
      </form>
    </div>
  );
}

export default Login;