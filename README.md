
# Projeto Blog Pessoal - Frontend com React

<br />

<div align="center">     
           <img src="https://i.imgur.com/AzshGmS.png" title="source: imgur.com" width="50%"/>
</div> 
<br /> 

## Descrição

O **Blog Pessoal - Frontend** é uma aplicação web desenvolvida com **React** e **TypeScript**. Ela oferece uma interface moderna e responsiva para usuários interagirem com o blog, permitindo visualizar, criar, editar e excluir postagens, além de gerenciar temas e perfis de usuário. Todas as operações são realizadas através de integração com uma API REST, garantindo persistência e segurança dos dados.

---

## Funcionalidades

- Autenticação de usuários
- Visualização, criação, edição e exclusão de postagens
- Cadastro, edição e exclusão de temas
- Listagem de postagens e temas
- Perfil do usuário
- Feedback visual com loaders

---

## Estrutura de Pastas

```
src/
     components/
          navbar/         # Barra de navegação
          footer/         # Rodapé
          postagem/
               cardpostagem/     # Card visual de cada postagem
               listapostagens/   # Lista de postagens
               formpostagem/     # Formulário de postagem
               modalpostagem/    # Modal para criar postagem
               deletarpostagem/  # Exclusão de postagem
          listatemas/     # Lista de temas
          cardtema/       # Card visual de cada tema
          formtema/       # Formulário de tema
          deletartema/    # Exclusão de tema
     contexts/         # Contexto de autenticação
     models/           # Modelos TypeScript (Postagem, Tema, Usuario)
     pages/            # Páginas principais (Home, Cadastro, Login)
     services/         # Serviços de integração com API
     App.tsx           # Componente principal
     main.tsx          # Ponto de entrada
```

---

## Principais Componentes

- **Navbar**: Navegação entre páginas
- **Footer**: Links sociais e copyright
- **CardPostagem**: Exibe detalhes de cada postagem
- **ListaPostagens**: Mostra todas as postagens
- **FormPostagem**: Formulário para criar/editar post
- **ModalPostagem**: Modal para criar post
- **DeletarPostagem**: Exclusão de postagens
- **CardTema**: Exibe detalhes de cada tema
- **ListaTemas**: Mostra todos os temas
- **FormTema**: Cadastro/edição de temas
- **DeletarTema**: Confirmação de exclusão de tema

---

## Exemplos de Uso

### Card de Postagem

O componente **CardPostagem** exibe as informações de cada post do blog de forma visual e organizada. Mostra título, conteúdo, autor, data e botões de ação (editar, deletar, visualizar). Usado dentro de listas de postagens.

```jsx
<CardPostagem
     postagem={{
          id: 1,
          titulo: "Meu primeiro post",
          texto: "Conteúdo do post...",
          data: "2025-09-05T12:00:00Z",
          tema: { id: 1, descricao: "React" },
          usuario: { id: 1, nome: "João", usuario: "joao", foto: "url", senha: "", postagem: [] }
     }}
/>
```

### Formulário de Postagem

O componente **FormPostagem** permite criar ou editar uma postagem do blog. Exibe campos para título, texto e seleção de tema, além de feedback visual de carregamento. Integra com a API para cadastrar ou atualizar postagens.

```jsx
<FormPostagem />
```

### Modal de Postagem

O componente **ModalPostagem** exibe o formulário de postagem dentro de um modal (popup), facilitando a criação de novas postagens sem sair da página atual. Utiliza o pacote `reactjs-popup` para o modal.

```jsx
<ModalPostagem />
```

### Deletar Postagem

O componente **DeletarPostagem** permite ao usuário excluir uma postagem do blog de forma segura, exibindo uma confirmação antes de realizar a ação. Integra com a API para remover o post e atualiza a lista de postagens automaticamente.

```jsx
<DeletarPostagem id={postagem.id} />
```

---

## Dependências

- React 19
- Vite 7
- TypeScript 5
- React Router DOM 7
- Axios
- React Spinners
- Phosphor Icons
- reactjs-popup

---

## Como rodar o projeto

```bash
npm install
npm run dev
```

Acesse o endereço mostrado no terminal (ex: http://localhost:5173/).

---

## Autoria

Desenvolvido por [Larissa Ruiz](https://www.linkedin.com/in/larissa-r-ruiz/)