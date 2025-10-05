# Todo App - React

Este projeto é uma aplicação de lista de tarefas (Todo App) desenvolvida em **React** com **TypeScript**, usando **React Router v6**, **React Hook Form** e **Yup** para validação de formulários. O estado global é gerenciado com **Context API**.

O projeto foi bootstrapped com [Create React App](https://github.com/facebook/create-react-app).

---

## Funcionalidades

- Adicionar novas tarefas com validação (não permite campos vazios).
- Marcar tarefas como concluídas ou pendentes.
- Remover tarefas da lista.
- Navegação SPA usando **React Router v6**:
  - `/` → Lista de tarefas
  - `/create` → Adicionar nova tarefa
- Formulário de adicionar tarefas reseta após envio.
- Persistência local de tarefas usando **localStorage** (via `TodoService`).

---

## Estrutura do Projeto

- **`src/components`**: Componentes React

  - `App.tsx` → Componente principal, define rotas e layout
  - `Navbar.tsx` → Barra de navegação com links
  - `TodoList.tsx` → Lista de tarefas
  - `AddTodo.tsx` → Formulário para adicionar tarefas

- **`src/contexts`**: Contexto global

  - `TodoContext.tsx` → Provedor de estado das tarefas
  - `TodoContextType.ts` → Tipagem do contexto

- **`src/models`**

  - `Todo.ts` → Modelo de tarefa

- **`src/services`**
  - `TodoService.ts` → Funções de persistência (`get` e `save`)

---

## Tecnologias

- React + TypeScript
- React Router v6
- React Hook Form
- Yup (validação de formulários)
- Context API
- localStorage
- UIkit (estilização simples)

---

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Executa a aplicação em modo de desenvolvimento.  
Abra [http://localhost:3000](http://localhost:3000) para visualizar.

A página recarrega automaticamente ao editar os arquivos.

---

### `npm test`

Executa o test runner em modo interativo.

---

### `npm run build`

Cria a versão de produção na pasta `build/`.  
Os arquivos são otimizados e minificados para o melhor desempenho.

Para testar localmente:

```bash
git clone
npm install
npm start
```
