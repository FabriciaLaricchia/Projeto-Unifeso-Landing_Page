import React from "react";
import contato from '../assets/hero.png'

export default function Header() {
  return (
    <header>
      <div className="interface">
        <section className="logotipo-cabecalho">
          <img src="" alt="Logo" />
        </section>

        <nav className="menu-desktop">
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Beneficios</a></li>
            <li><a href="#">Recursos</a></li>
          </ul>
        </nav>

        <div className="btn">
          <ul>
            <li>
              <a href="https://projeto-mentoria-unifeso-cbdt1d7e1-bernardoennes-projects.vercel.app/login">
                <button className="btn-entrar">Entrar</button>
              </a>
            </li>
            <li>
              <a href="#">
                <button className="btn-cadastre-se">Cadastre-se</button>
              </a>
            </li>
            <li>
              <a href="#">
                <button className="btn-contato">
                  <img src="{contato}" alt="Contato" />
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}