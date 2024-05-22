import { Container, Form, Avatar } from './styles';
import { Link } from 'react-router-dom';

import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile() {
  return (
    <Container>
      <header>
        <Link to='/'>
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=40&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Foto usuário'
          />

          <label htmlFor='avatar'>
            <FiCamera />

            <input id='avatar' type='file' />
          </label>
        </Avatar>
        <Input placeholder='Usuário' type='text' icon={FiUser} />
        <Input placeholder='E-mail' type='text' icon={FiMail} />
        <Input placeholder='Senha atual' type='password' icon={FiLock} />
        <Input placeholder='Nova Senha' type='password' icon={FiLock} />

        <Button title='Salvar Alterações' />
      </Form>
    </Container>
  );
}
