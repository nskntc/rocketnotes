import { Container, Profile, Logout } from "./style"
import { RiShutDownLine } from "react-icons/ri"

export const Header = () => {
    return(
        <Container>
            <Profile to="/profile">
                <img src="https:github.com/nskntc.png" alt="Foto de perfil" />
                <div>
                    <span>Bem-vindo,</span>
                    <strong>Nicolas Kruger</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}