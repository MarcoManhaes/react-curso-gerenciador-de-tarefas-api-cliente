import React from "react";
import { Routes, Route } from "react-router-dom";

import ListarTarefas from './listar/listar-tarefas';
import CadastrarTarefa from './cadastrar/cadastrar-tarefa';
import AtualizarTarefa from './atualizar/atualizar-tarefa';

function MainRoutes() {
    return (

        <Routes>
            <Route path="/" element={<ListarTarefas />} />
            <Route path="/cadastrar" element={<CadastrarTarefa />} />
            <Route path="/atualizar/:id" element={<AtualizarTarefa />} />
        </Routes>

    )
};

export default MainRoutes;