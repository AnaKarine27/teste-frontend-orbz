import React from 'react';
import './Services.css';
import { TbDeviceDesktopCheck, TbAdjustmentsSearch } from "react-icons/tb"
import { FiTool } from 'react-icons/fi';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services-container container">
        <h2>O que nós fazemos</h2>
        <div className="services-grid">
          <div className="service-card">
            <TbDeviceDesktopCheck className="service-icon" />
            <h3>Sites personalizados</h3>
            <p>Criamos sites sob medida que refletem a essência da sua marca.</p>
          </div>
          <div className="service-card">
            <TbAdjustmentsSearch className="service-icon" />
            <h3>SEO</h3>
            <p>Maximizamos a visibilidade da sua marca nos resultados de pesquisa, aumentando o tráfego e as conversões. </p>
          </div>
          <div className="service-card highlighted">
            <FiTool className="service-icon key" />
            <h3>Manutenção e Suporte</h3>
            <p>Estamos aqui para garantir que seu site permaneça atualizado, seguro e funcionando sem problemas, para que você possa focar no crescimento do seu negócio.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;