import React from 'react';
import ReactDOM from 'react-dom';
import GerenciadorTarefas from './gerenciador-tarefas';

describe('Teste do componente de listagem de tarefas', () => {
  it('renders learn react link', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GerenciadorTarefas />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});