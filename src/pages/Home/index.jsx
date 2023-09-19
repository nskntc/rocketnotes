import { useState, useEffect } from "react"
import { FiPlus, FiSearch } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

import { api } from "../../services/api"

import { Container, Brand, Menu, Search, Content, NewNote } from './style'

import { Header } from '../../components/Header'
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"
import { Note } from "../../components/Note"

export function Home() {
    const [tags, setTags] = useState([])
    const [tagsSelected, setTagsSelected] = useState([])
    const [search, setSearch] = useState('')
    const [notes, setNotes] = useState([])

    const navigate = useNavigate()

    const handleDetails = (id) => {
        navigate(`/details/${id}`)
    }

    const handleTagsSelected = (tagName) => {
        if(tagName === "all") return setTagsSelected([])

        const alredySelected = tagsSelected.includes(tagName)

        if(alredySelected){
            const filteredTags = tagsSelected.filter(tag => tag !== tagName)
            setTagsSelected(filteredTags)
        } else {
            setTagsSelected(preventState => [...preventState, tagName])
        }
    }

    useEffect(() => {
        const fetchTags = async() => {
            const response = await api.get("/tags")
            setTags(response.data)
        }

        fetchTags()
    }, [])

    useEffect(() => {
        const fetchNotes = async() => {
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
            setNotes(response.data)
        }

        fetchNotes()
    }, [tagsSelected, search])

    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText 
                        title="Todos"
                        onClick={() => handleTagsSelected("all")} 
                        isActive={tagsSelected.length === 0}
                    />
                </li>
                
                {
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>
                            <ButtonText 
                                title={tag.name} 
                                onClick={() => handleTagsSelected(tag.name)}
                                isActive={tagsSelected.includes(tag.name)}
                            />
                        </li>
                    ))
                }
                
            </Menu>

            <Search>
                <Input 
                    placeholder="Pesquisar pelo título" 
                    icon={FiSearch} 
                    onChange={e => setSearch(e.target.value)}
                />
            </Search>

            <Content>
                <Section title="Minhas notas" >
                    {
                        notes.map(note => (
                            <Note 
                                key={String(note.id)}
                                data={note}
                                onClick={() => handleDetails(String(note.id))}
                            />
                        ))
                    }
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                Criar nota
            </NewNote>
        </Container>
  )
}