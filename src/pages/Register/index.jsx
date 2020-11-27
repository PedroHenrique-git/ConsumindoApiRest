import React, { useState } from "react";
import { toast } from "react-toastify";
import { isEmail } from "validator";
import { get } from "lodash";
import { Container } from "../../styles/globalStyles";
import { Form } from "./styled";
import axios from "../../services/api";
import history from "../../services/history";

export default function Register() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        let formErrors = false;

        if (nome.length < 3 || nome.length > 255) {
            // eslint-disable-next-line no-unused-vars
            formErrors = true;
            toast.warn("Campo nome deve ter entre 3 e 255 caracters");
        }

        if (senha.length < 6 || nome.length > 50) {
            // eslint-disable-next-line no-unused-vars
            formErrors = true;
            toast.warn("Campo senha deve ter entre 6 e 50 caracters");
        }

        if (!isEmail(email)) {
            // eslint-disable-next-line no-unused-vars
            formErrors = true;
            toast.warn("Email inválido");
        }

        // eslint-disable-next-line no-useless-return
        if (formErrors) return;

        try {
            const response = await axios.post("/users", {
                nome,
                password: senha,
                email,
            });

            console.log(response.data);
            toast.success("Você fez seu cadastro com sucesso");
            history.push("/login");
            // eslint-disable-next-line no-shadow
        } catch (e) {
            // const status = get(e, "response.status", 0);
            const errors = get(e, "response.data.errors", []);

            // console.log(status, errors);

            errors.map((error) => toast.error(error));
        }
    }

    return (
        <>
            <Container>
                <h1>Crie sua conta</h1>

                <Form onSubmit={handleSubmit}>
                    <label htmlFor="nome">
                        Nome:
                        <input
                            type="text"
                            placeholder="Seu nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </label>
                    <label htmlFor="email">
                        Email:
                        <input
                            type="email"
                            placeholder="Seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label htmlFor="password">
                        Senha:
                        <input
                            type="password"
                            placeholder="Sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </label>
                    <button type="submit">Criar minha conta</button>
                </Form>
            </Container>
        </>
    );
}
