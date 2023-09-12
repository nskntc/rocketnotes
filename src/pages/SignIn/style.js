import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`

export const Background = styled.div`
  flex: 1;
  position: relative;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

  &::before {
    content: ""; /* O conteúdo do pseudo-elemento é vazio */
    position: absolute; /* Posicionamento absoluto em relação ao elemento pai */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Cor preta com opacidade 0.5 (50%) */
    z-index: 1; /* Para garantir que o overlay esteja na frente da imagem */
  }
`