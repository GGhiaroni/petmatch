# 🐶✨ PetMatch – Encontre seu novo melhor amigo!

**PetMatch** é uma plataforma web criada com 💙 usando **React** e **JavaScript**, que conecta pessoas a cachorros disponíveis para adoção. Encontre, filtre, favorite e adote com facilidade – tudo com um design moderno e responsivo! ✨📱💻

Acesse o projeto completo em: https://petmatch-lac.vercel.app/

---

## 🌟 Funcionalidades Principais

✅ **Busca inteligente** por **nome**, **raça** ou **porte**  
🔍 **Filtro interativo** por **porte** (Pequeno, Médio ou Grande)  
❤️ **Adicionar/Remover Favoritos** com persistência no `localStorage`  
📄 **Página de Favoritos** para visualizar seus pets salvos  
📬 **Página de Contato** com layout 100% responsivo  
🧠 **Gerenciamento de estado global** com Zustand  
📦 **Dados mockados** via arquivo JSON (`dogs.json`)  
🌐 **Design 100% responsivo** para **mobile**, **tablet**, **desktop** e **widescreen**  
🖼️ **Página de detalhes** com informações completas de cada pet  
🔔 **Notificações visuais** com React Toastify  
💾 **Persistência local** de favoritos no navegador, através do localStorage

---

## 🧱 Tecnologias Utilizadas

| Ferramenta               | Descrição |
|--------------------------|-----------|
| ⚛️ **React 19**          | Biblioteca principal para a construção da interface |
| 🧭 **React Router DOM**  | Roteamento SPA entre as páginas |
| 🎨 **Styled Components** | Estilização com CSS-in-JS e tema global |
| 🌿 **Zustand**           | Gerenciamento leve de estado global |
| 🍞 **React Toastify**    | Notificações elegantes para ações do usuário |
| 🧰 **Vite**              | Bundler ultrarrápido para desenvolvimento moderno |
| 🌐 **React Icons**       | Ícones modernos e otimizados |
| ✅ **ESLint**            | Padronização de código com boas práticas |

---

## 🖼️ Imagens do Projeto

<div align="center">
  <img src="https://github.com/user-attachments/assets/28129b50-e67f-4b0b-9358-e4157e8c4138" width="700" />

  <img src="https://github.com/user-attachments/assets/100a1875-ed61-40e8-aee6-efc475dd1bce" width="700" />
  
  <img src="https://github.com/user-attachments/assets/e4c36660-4bac-4ced-b533-52826d9e2e95" width="700" />
  
  <img src="https://github.com/user-attachments/assets/b88744d5-76d3-4dd1-9bc6-a94e52ae0f9b" width="700" />
  
  <img src="https://github.com/user-attachments/assets/95a614de-7cc6-419c-ad24-bb51093b80b5" width="700" />
</div>

---

## 📁 Estrutura do Projeto

```bash
petmatch/
├── public/
├── src/
│   ├── assets/              # Imagens e ícones
│   ├── components/          # Componentes reutilizáveis
│   ├── db/dogs.json         # Base de dados dos cachorros
│   ├── pages/               # Páginas como Encontrar, Favoritos, Contato
│   ├── store/               # Zustand (favoritos, filtros)
│   └── App.jsx              # Arquivo principal com as rotas
├── package.json
└── vite.config.js
