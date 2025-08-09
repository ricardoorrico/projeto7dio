# Legado Espiritual: Um Tributo a Yu Yu Hakusho

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Um site de página única (One-Page Scroll) totalmente responsivo, criado como uma homenagem ao clássico anime Yu Yu Hakusho. Este projeto foi desenvolvido com tecnologias web modernas e serve como uma peça de portfólio para demonstrar habilidades em HTML5, CSS3 e JavaScript (vanilla JS).

## 🎨 Visualização

O site apresenta um design escuro e imersivo, com uma paleta de cores inspirada no Mundo Espiritual e na energia dos personagens. A navegação é fluida e as animações sutis de scroll proporcionam uma experiência de usuário agradável.

*(Dica: Tire um screenshot do seu site pronto e insira aqui!)*
tela.png

## ✨ Funcionalidades

- **Design Responsivo:** Totalmente adaptável para desktops, tablets e smartphones.
- **Navegação Suave:** Links na barra de navegação que rolam suavemente para as seções correspondentes.
- **Modal Interativo de Personagens:** Clique nos cards dos personagens para abrir uma janela com mais detalhes sobre eles.
- **Animações de Scroll:** Elementos da página surgem com uma animação suave conforme o usuário rola a página, utilizando a API `IntersectionObserver` para melhor performance.
- **Estrutura Moderna:** Uso de HTML semântico, variáveis CSS para fácil customização, Flexbox e Grid para layouts complexos.

## 🚀 Tecnologias Utilizadas

- **HTML5:** Estrutura semântica para melhor acessibilidade e SEO.
- **CSS3:**
  - **Variáveis CSS:** Para um tema de cores fácil de manter.
  - **Flexbox & Grid:** Para layouts modernos e responsivos.
  - **Transitions & Animations:** Para uma interface mais dinâmica.
- **JavaScript (Vanilla JS):**
  - Manipulação do DOM para interatividade.
  - `IntersectionObserver` para animações de scroll eficientes.
- **Google Fonts:** Para tipografia personalizada (`Bebas Neue` e `Roboto`).
- **Font Awesome:** Para ícones vetoriais.

## 🛠️ Como Executar o Projeto

1.  **Clone o repositório ou baixe os arquivos.**
2.  **Crie a estrutura de pastas necessária:**
    ```
    /
    |-- index.html
    |-- README.md
    |-- /css
    |   |-- style.css
    |-- /js
    |   |-- script.js
    |-- /img
    ```
3.  **Adicione as imagens:** Popule a pasta `/img` com as imagens necessárias. Os nomes de arquivo esperados no código são:
    - `hero-bg.jpg`
    - `yusuke.jpg`, `kuwabara.jpg`, `kurama.jpg`, `hiei.jpg`
    - `yusuke-modal.jpg`, `kuwabara-modal.jpg`, `kurama-modal.jpg`, `hiei-modal.jpg`
    - `gallery1.jpg` a `gallery6.jpg`
4.  **Abra o `index.html`:** Abra este arquivo no seu navegador de preferência para ver o site em ação.

## 🔧 Como Personalizar

- **Cores:** Altere facilmente a paleta de cores do site modificando as variáveis no início do arquivo `css/style.css`.
- **Personagens:** Para adicionar um novo personagem, adicione um novo `character-card` no `index.html` e um novo objeto correspondente na constante `characterData` dentro do arquivo `js/script.js`.

## 🌐 Publicando Online

Este é um site estático, perfeito para ser hospedado gratuitamente em serviços como:

- [Vercel](https://meuyuyu.vercel.app)

---

*Este projeto é um trabalho de fã para fins de portfólio. Yu Yu Hakusho e seus personagens são propriedade de Yoshihiro Togashi, Shueisha, Fuji TV e Studio Pierrot.*