import { Container, Links, Content } from "./style"

import { Button } from "../../components/Button/"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

export const Details = () => {
  return(
    <Container>
      <Header />

      <main>
        <Content>
          
          <ButtonText title="Excluir nota" />
          <h1>Introdução ao React</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate ut doloremque quis. Excepturi non itaque voluptatibus nemo aspernatur quam consequuntur dolorem fugiat necessitatibus sunt, earum, culpa delectus corporis mollitia beatae?</p>
          
          <Section title="Links úteis">
            <Links>
              <li><a href="https://rocketseat.com.br">https://rocketseat.com.br</a></li>
              <li><a href="https://rocketseat.com.br">https://rocketseat.com.br</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="expressjs"/>
            <Tag title="nodejs"/>
          </Section>

          <Button title="Voltar" />  

        </Content>
      </main>
    </Container>
  )
}