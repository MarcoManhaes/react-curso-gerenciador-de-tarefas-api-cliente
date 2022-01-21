import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function ConcluirTarefa(props) {

    const API_URL_ATUALIZAR_TAREFAS = "http://localhost:3001/gerenciador-tarefas/:id/concluir";

    const [exibirModal, setExibirModal] = useState(false);
    const [exibirModalErro, setExibirModalErro] = useState(false);


    function handleAbrirModal(event) {
        event.preventDefault();
        setExibirModal(true);
    }

    function handleFecharModal() {
        setExibirModal(false);
    }

    function handleFecharModalErro() {
        setExibirModalErro(false);
    }

    async function handleConcluirTarefa(event) {
        event.preventDefault();

        try {
            await axios.put(API_URL_ATUALIZAR_TAREFAS.replace(":id", props.tarefa.id));
            setExibirModal(false);
            props.recarregarTarefas(true);
        } catch (err) {
            setExibirModal(false);
            setExibirModalErro(true);
        }

    }

    return (
        <span className={props.className}>
            <Button
                className="btn-sm"
                onClick={handleAbrirModal}>
                <FontAwesomeIcon icon={faClipboardCheck} />
            </Button>
            <Modal show={exibirModal} onHide={handleFecharModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Concluir tarefa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Deseja realmente concluir a tarefa?
                    <br />
                    <strong>{props.tarefa.nome}</strong>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        onClick={handleConcluirTarefa}>
                        Sim
                    </Button>
                    <Button
                        variant="light"
                        onClick={handleFecharModal}>
                        Não
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={exibirModalErro} onHide={handleFecharModalErro}>
                <Modal.Header closeButton>
                    <Modal.Title>Erro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Erro ao concluir tarefa.
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="warning"
                        onClick={handleFecharModalErro}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </span>
    );
}

ConcluirTarefa.propTypes = {
    tarefa: PropTypes.object.isRequired,
    recarregarTarefas: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired
}

export default ConcluirTarefa;