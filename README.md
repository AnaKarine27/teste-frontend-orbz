# Landing Page Orbz

Este é o repositório do projeto de desenvolvimento de uma landing page. O site foi construído com base em um design do Figma, focando em uma interface moderna, responsiva e com micro-interações.

---

## 🛠️ Tecnologias Utilizadas

A base do projeto foi construída com as seguintes tecnologias:

* **[React](https://reactjs.org/)**: Biblioteca principal para a construção da interface.
* **[Vite](https://vitejs.dev/)**: Ferramenta de build extremamente rápida para o desenvolvimento.
* **CSS Moderno**: Estilização feita com CSS puro, utilizando:
    * **Variáveis CSS**: Para um sistema de temas fácil de manter (cores, fontes).
    * **CSS Grid** e **Flexbox**: Para a criação de layouts complexos e responsivos.
    * **Estilos por Componente**: Cada componente possui seu próprio arquivo `.css`, mantendo o código organizado.
* **[Swiper.js](https://swiperjs.com/)**: Biblioteca para a criação do carrossel de imagens na seção de portfólio.
* **[React Icons](https://react-icons.github.io/react-icons/)**: Para a utilização de ícones SVG de forma fácil e performática.

---

## ✨ Funcionalidades

* **Layout Responsivo**: O site se adapta a diferentes tamanhos de tela, de desktops a celulares.
* **Navegação com Rolagem Suave**: O menu principal utiliza links âncora com rolagem suave (`smooth scroll`) para navegar entre as seções da página.
* **Componentização**: A interface foi dividida em componentes reutilizáveis para cada seção (`Header`, `Hero`, `Services`, etc.).
* **Carrossel de Projetos**: A seção de portfólio apresenta um carrossel interativo e com autoplay.
* **Tema Customizável**: O uso de variáveis CSS permite que a paleta de cores e as fontes sejam alteradas facilmente em um único lugar (`src/index.css`).

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para rodar o projeto em seu ambiente local.

**Pré-requisitos:**
* [Node.js](https://nodejs.org/en/) (versão 16 ou superior)
* `npm` ou `yarn`

**Instalação:**
```bash
# Clone o repositório
git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)

# Entre na pasta do projeto
cd seu-repositorio

# Instale as dependências
npm install
```

**Rodando o servidor de desenvolvimento:**
```bash
npm run dev
```
Abra [http://localhost:5173](http://localhost:5173) (ou a porta indicada no terminal) no seu navegador para ver o resultado.

---

## 📋 Próximos Passos e Ajustes Pendentes

Com base no desenvolvimento, alguns pontos ainda precisam de atenção para finalizar o projeto:

* **[ ] Revisão Final da Responsividade:** Embora a maior parte do site seja responsiva, a seção **Portfolio** e o **Footer** se mostraram complexas. É necessário fazer testes em mais dispositivos para garantir que não haja quebras de layout.
* **[ ] Estabilizar o Carrossel:** A funcionalidade do carrossel na seção Portfolio precisa de testes para garantir que se comporte como esperado em todas as interações e tamanhos de tela.
* **[ ] Implementar Funcionalidade do Formulário:** O formulário de contato na seção `Contact` é atualmente apenas visual. É preciso adicionar uma lógica para enviar os dados para um e-mail ou serviço (ex: usando [EmailJS](https://www.emailjs.com/) ou [Netlify Forms](https://docs.netlify.com/forms/setup/)).
* **[ ] Otimização de Imagens:** As imagens do projeto podem ser otimizadas (comprimidas ou convertidas para formatos como `.webp`) para melhorar o tempo de carregamento da página.
* **[ ] Acessibilidade (A11y):** Fazer uma auditoria de acessibilidade para garantir que o site seja navegável via teclado e legível por leitores de tela.