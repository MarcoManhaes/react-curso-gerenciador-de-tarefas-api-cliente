import React from 'react';
import './gerenciador-tarefas.css';
//import { useRoutes } from 'hookrouter';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from './routes';

// import ListarTarefas from './listar/listar-tarefas';
// import CadastrarTarefa from './cadastrar/cadastrar-tarefa';
// import AtualizarTarefa from './atualizar/atualizar-tarefa';

// const routes = {
//   '/': () => <ListarTarefas />,
//   '/cadastrar': () => <CadastrarTarefa />,
//   '/atualizar/:id': ({ id }) => <AtualizarTarefa id={id} />
// };

function GerenciadorTarefas() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default GerenciadorTarefas;
