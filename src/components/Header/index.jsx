import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './style';

export function Header() {
  return (
    <Container>
      <Profile to='/profile'>
        <img
          src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=40&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Foto usuário'
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Magenta Magás</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
