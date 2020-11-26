import React from "react";
import { get } from "lodash";
import { Link } from "react-router-dom";
import { FaUserCircle, FaEdit, FaWindowClose } from "react-icons/fa";
import axios from "../../services/api";
import { Container } from "../../styles/globalStyles";
import { AlunoContainer, ProfilePicture } from "./styled";

export default function Alunos() {
    const [alunos, setAlunos] = React.useState([]);

    React.useEffect(() => {
        async function getData() {
            const response = await axios.get("/alunos");
            setAlunos(response.data);
        }

        getData();
    }, []);

    return (
        <Container>
            <h1>Alunos</h1>
            <AlunoContainer>
                {alunos.map((aluno) => (
                    <div key={aluno.id}>
                        <ProfilePicture>
                            {get(aluno, "Fotos[0].url", false) ? (
                                <img
                                    src={aluno.Fotos[0].url}
                                    alt=""
                                    srcSet=""
                                />
                            ) : (
                                <FaUserCircle size={36} />
                            )}
                        </ProfilePicture>

                        <span>{aluno.nome}</span>
                        <span>{aluno.email}</span>

                        <Link to={`/aluno/${aluno.id}/edit`}>
                            <FaEdit size={16} />
                        </Link>
                        <Link to={`/aluno/${aluno.id}/delete`}>
                            <FaWindowClose size={16} />
                        </Link>
                    </div>
                ))}
            </AlunoContainer>
        </Container>
    );
}
