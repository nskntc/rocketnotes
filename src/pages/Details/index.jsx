import { Container, Links, Content } from "./style"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { Button } from "../../components/Button/"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

import { api } from "../../services/api"

export const Details = () => {
  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  const handleRemove = async() => {
    const confirm = window.confirm("Realmente deseja excluir essa nota?")

    if(confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate("/")
    }
  }

  const handleBack = () => {
    navigate("/")
    setData(null)
  }

  useEffect(() => {
    const fecthDetails = async() => {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fecthDetails()
  }, [])

  return(
    <Container>
      <Header />

      {
        data &&
        <main>
          <Content>
            
            <ButtonText title="Excluir nota" onClick={handleRemove} />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            
            {
              data.links &&
              <Section title="Links úteis">
                <Links>
                  {
                    data.links.map(link => (
                        <li key={String(link.id)}>
                          <a href={link.url} target="_blank">
                            {link.url}
                          </a>
                        </li>
                    ))
                  }
                </Links>
              </Section>
            }

            {
              data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => (
                    <Tag title={tag.name} key={String(tag.id)} />
                  ))
                }
              </Section>
            }

            <Button title="Voltar" onClick={handleBack}/>  

          </Content>
        </main>
      }
    </Container>
  )
}