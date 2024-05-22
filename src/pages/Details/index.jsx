import { Container, Links, Content } from './style';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title='Excluir Nota' />

          <h1>Introdução ao Lorem</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            accusamus mollitia, nemo cumque libero exercitationem. Ratione quis
            dolore expedita iure? Accusamus saepe suscipit soluta, ipsum
            temporibus esse amet voluptate dolorum. Lorem ipsum dolor sit amet
            consectetur a dipisicing elit. Eligendi ratione, odio sapiente
            magnam ex nihil laboriosam quas repudiandae i n nam ducimus, sequi
            assumenda repellat? Assumenda sapiente nihil ab perferendis
            reiciendis.dolore expedita iure?
          </p>

          <Section title='Links úteis'>
            <Links>
              <li>
                <a href='#'>Link 1</a>
              </li>
            </Links>
          </Section>
          <Section title='Marcadores'>
            <Tag title='express' />
            <Tag title='nodejs' />
          </Section>

          <Button title='Voltar' />
        </Content>
      </main>
    </Container>
  );
}
