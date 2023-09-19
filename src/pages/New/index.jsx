import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { api } from "../../services/api"

import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { Container, Form } from './style'

export const New = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  const handleNewNote = async() => {
    if(!title) return alert("Adicione um título à sua nota!")
    if(!description) return alert("Adicione uma descrição à sua nota!")
    if(newLink) return alert("Existe um link a ser adicionado, clique no botão de adicionar ou deixe o campo vazio!")
    if(newTag) return alert("Existe uma tag a ser adicionada, clique no botão de adicionar ou deixe o campo vazio!")

    await api.post("/notes", {
      title,
      description,
      tags,
      links
    })

    alert("Nota cadastrada com sucesso!")
    navigate("/")
  }

  const handleAddLink = () => {
    setLinks(prevState => [...prevState, newLink])
    setNewLink('')
  }

  const handleRemoveLink = (deleted) => {
    setLinks(links.filter(link => link !== deleted))
  }

  const handleAddTag = () => {
    setTags(prevState => [...prevState, newTag]);
    setNewTag('')
  }

  const handleRemoveTag = (deleted) => {
    setTags(tags.filter(tag => tag !== deleted))
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input 
            placeholder="Título"
            onChange={e => setTitle(e.target.value)} 
          />
          <TextArea 
            placeholder="Observações" 
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {
              links.map((link, index) => (
                <NoteItem  
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)} 
                />
              ))
            }

            <NoteItem 
            isNew 
            placeholder="Novo link"
            value={newLink}
            onChange={e => setNewLink(e.target.value)}
            onClick={handleAddLink} 
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)} 
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }

              <NoteItem 
                placeholder="Nova tag" 
                isNew 
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  )
}