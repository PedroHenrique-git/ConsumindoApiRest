import React, { useEffect, useState } from "react";

import { Container } from "../../styles/globalStyles";
// import { Title, Paragrafo } from "./styled";
import api from "../../services/api";

export default function Login() {
    const [alunos, setAlunos] = useState([]);
    const [nome, setNome] = useState("");
    useEffect(() => {
        api.get("/alunos").then((response) => setAlunos(response.data));
    }, []);
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
            </Container>
        </>
    );
}
