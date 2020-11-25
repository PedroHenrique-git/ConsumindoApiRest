import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Container } from "../../styles/globalStyles";
import api from "../../services/api";
import * as example from "../../store/modules/example/actions";

export default function Login() {
    const [alunos, setAlunos] = useState([]);
    const [nome, setNome] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        api.get("/alunos").then((response) => setAlunos(response.data));
    }, []);

    function handleClick(e) {
        e.preventDefault();
        dispatch(example.clicaBotaoRequest());
    }
    return (
        <>
            <Container>
                <ul>
                    {alunos.map((aluno) => (
                        <li key={aluno.id}>{aluno.nome}</li>
                    ))}
                </ul>
                <input
                    onChange={(e) => setNome(e.target.value)}
                    type="text"
                    name="nome"
                    id="nome"
                    value={nome}
                />
                <button type="button" onClick={handleClick}>
                    Clique aqui
                </button>
            </Container>
        </>
    );
}
