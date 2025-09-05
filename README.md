## Formulário de Postagem

O componente **FormPostagem** permite criar ou editar uma postagem do blog. Ele exibe campos para título, texto e seleção de tema, além de feedback visual de carregamento. Utiliza integração com a API para cadastrar ou atualizar postagens.

### Exemplo de uso

```jsx
<FormPostagem />
```

## Modal de Postagem

O componente **ModalPostagem** exibe o formulário de postagem dentro de um modal (popup), facilitando a criação de novas postagens sem sair da página atual. Utiliza o pacote `reactjs-popup` para o modal.

### Exemplo de uso

```jsx
<ModalPostagem />
```
# Projeto Blog Pessoal - Frontend com React

<br />

<div align="center">     
     <img src="https://i.imgur.com/AzshGmS.png" title="source: imgur.com" width="50%"/>
</div> 
<br /> 

## 1. Descrição

O **Blog Pessoal - Frontend** é uma aplicação web desenvolvida com **React** e **TypeScript**, com o objetivo de consumir e exibir dados de uma API REST construída com **Spring Boot**. A aplicação permite a visualização, criação, edição e exclusão de postagens de blog, categorizadas por temas e vinculadas a usuários autenticados.

## Funcionalidades

- Autenticação de usuários
- Visualização, criação, edição e exclusão de postagens
- Cadastro, edição e exclusão de temas
- Listagem de postagens e temas
- Perfil do usuário
- Feedback visual com loaders

## Estrutura de Pastas

```
src/
     components/
          navbar/         # Barra de navegação
          footer/         # Rodapé
          postagem/
               cardpostagem/ # Card visual de cada postagem
               listapostagens/ # Lista de postagens
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

## Principais Componentes

- **Navbar**: Navegação entre páginas
- **Footer**: Links sociais e copyright
- **CardPostagem**: Exibe detalhes de cada postagem
- **ListaPostagens**: Mostra todas as postagens
- **CardTema**: Exibe detalhes de cada tema
- **ListaTemas**: Mostra todos os temas
- **FormTema**: Cadastro/edição de temas
- **DeletarTema**: Confirmação de exclusão de tema

## Dependências

- React 19
- Vite 7
- TypeScript 5
- React Router DOM 7
- Axios
- React Spinners
- Phosphor Icons

## Como rodar o projeto

```bash
npm install
npm run dev
```
Acesse o endereço mostrado no terminal (ex: http://localhost:5173/).

## Card de Postagem

O componente **Card de Postagem** é responsável por exibir as informações de cada post do blog de forma visual e organizada. Ele pode mostrar título, conteúdo, autor, data e botões de ação (editar, deletar, visualizar). Normalmente é utilizado dentro de listas de postagens, facilitando a navegação e interação do usuário com os posts.

### Exemplo de uso

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

Adapte as props conforme a estrutura do seu projeto.