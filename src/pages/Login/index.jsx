import React from "react";
import { toast } from "react-toastify";
import { isEmail } from "validator";
import { useDispatch } from "react-redux";
import { get } from "lodash";
import { Container } from "../../styles/globalStyles";
import { Form } from "./styled";
import * as actions from "../../store/modules/auth/actions";

export default function Login(props) {
    const dispatch = useDispatch();
    const prevPath = get(props, "location.state.prevPath", "/");
    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        let formErrors = false;

        if (senha.length < 6 || senha.length > 50) {
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

        dispatch(actions.loginRequest({ email, senha, prevPath }));

        // try {
        // eslint-disable-next-line no-shadow
        // } catch (e) {}
    };

    return (
        <>
            <Container>
                <h1>Login</h1>

                <Form onSubmit={handleSubmit}>
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
                    <button type="submit">Acessar</button>
                </Form>
            </Container>
        </>
    );
}
