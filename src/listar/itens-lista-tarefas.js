import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ConcluirTarefa from './concluir-tarefa';
import RemoverTarefa from './remover-tarefa';

function ItensListaTarefas(props) {

    function marcarConcluida(tarefa) {
        return tarefa.concluida ? 'line-through' : 'none';
    }

    return (
        props.tarefas.map(tarefa =>
            <tr key={tarefa.id} data-testid="tarefa">
                <td width="75%"
                    //aplicar css dinamicamente usando um retorno de função
                    style={{ textDecoration: marcarConcluida(tarefa) }}>
                    {tarefa.nome}
                </td>
                <td className="text-right">
                    <ConcluirTarefa
                        tarefa={tarefa}
                        recarregarTarefas={props.recarregarTarefas}
                        className={tarefa.concluida ? "hidden" : ""} />
                    &nbsp;
                    <Link to={"/atualizar/" + tarefa.id}
                        //aplicar css dinamicamente usando condição ternária
                        className={tarefa.concluida ? "hidden" : "btn-warning btn-sm"}>
                        <FontAwesomeIcon icon={faEdit} />
                    </Link>
                    &nbsp;
                    <RemoverTarefa
                        tarefa={tarefa}
                        recarregarTarefas={props.recarregarTarefas} />
                </td>
            </tr>
        )
    );
}

ItensListaTarefas.propTypes = {
    tarefas: PropTypes.array.isRequired,
    recarregarTarefas: PropTypes.func.isRequired
}

export default ItensListaTarefas;