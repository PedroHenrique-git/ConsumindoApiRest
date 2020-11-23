import React from "react";

import { Container } from "../../styles/globalStyles";
import { Title, Paragrafo } from "./styled";

export default function Login() {
    return (
        <>
            <Container>
                <Title isRed={false}>
                    Login <small>Oie</small>
                    Title
                </Title>
                <Paragrafo>Paragrafo</Paragrafo>
            </Container>
        </>
    );
}
