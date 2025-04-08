# 🐶✨ PetMatch – Encontre seu novo melhor amigo!

**PetMatch** é uma plataforma web criada com ❤️ usando **React** e **JavaScript**, que conecta pessoas a cachorros disponíveis para adoção. Encontre, filtre, favorite e adote com facilidade – tudo com um design moderno e responsivo! ✨📱💻

---

## 🌟 Funcionalidades Principais

✅ **Busca inteligente** por **nome**, **raça** ou **porte**  
🎚️ **Filtro interativo** por **porte** (Pequeno, Médio ou Grande)  
⭐ **Adicionar/Remover Favoritos** com persistência no `localStorage`  
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
