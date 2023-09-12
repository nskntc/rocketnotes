import { Container } from './style'

export const Button = ({ title, loading = false, ...rest }) => {
  return (
    <Container 
    type="button"
    disabled={loading}
    {...rest}
    >
      {loading ? "Carregando" : title}
    </Container>
  )
}