import { useNavigate } from 'react-router-dom';
import * as C from './styles'

interface AuthProps {
    setIsAuthenticated?: any;
}

const Header = ({ setIsAuthenticated }: AuthProps) => {
    const navigate = useNavigate();

    const exitClick = () => {
        setIsAuthenticated('');
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <>
            <C.Container>
                {localStorage.getItem('token') ? <C.Exit onClick={() => exitClick()}>Sair</C.Exit> : ''}
                <C.Header>
                    <C.Title>Gerenciamento Financeiro</C.Title>
                </C.Header>
            </C.Container>
        </>
    )
}

export default Header