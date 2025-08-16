import React from 'react';
import './Features.css';
import { PiStrategyBold } from "react-icons/pi";
import { MdOutlineBrush } from "react-icons/md";
import { BiCodeBlock } from "react-icons/bi";
import { LiaChessQueenSolid } from "react-icons/lia";

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="features-container container">
        
        <div className="features-list">
          <div className="feature-item">
            <BiCodeBlock />
            <span>Projetos únicos</span>
          </div>
           <div className="feature-item">
            <MdOutlineBrush />
            <span>Criatividade</span>
          </div>
          <div className="feature-item">
            <LiaChessQueenSolid />
            <span>Estratégia</span>
          </div>
          <div className="feature-item">
            <PiStrategyBold />
            <span>Colaboração</span>
          </div>
        </div>

        <div className="features-content">
          <h3>Na Orbz a criatividade<br/>encontra a tecnologia</h3>
          <p>
            Somos uma <strong>equipe apaixonada por<br/>transformar</strong> conceitos em experiências digitais<br/> 
            inesquecíveis. <strong>Combinando design criativo,<br/>desenvolvimento habilidoso e estratégia digital<br/>
            inteligente</strong>, estamos aqui para transformar suas<br/>ideias em realidade digital.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Features;