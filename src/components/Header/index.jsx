import { Container, Profile, Logout } from "./style"
import { RiShutDownLine } from "react-icons/ri"
import { useNavigate } from "react-router-dom"

import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"

import avatarPlaceholder from "../../assets/avatar_placeholder(1).svg"

export const Header = () => {
    const { signOut, user } = useAuth()
    
    const navigate = useNavigate()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const handleSignOut = () => {
        signOut()
        navigate("/")
    }

    return(
        <Container>
            <Profile to="/profile">
                <img src={avatarUrl} alt={user.name} />
                <div>
                    <span>Bem-vindo,</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={handleSignOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}