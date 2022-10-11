import styled from 'styled-components'

export const Section = styled.div`
  display:flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const Container = styled.form`
  box-shadow: 0 0.5rem 1.2rem rgb(189 197 209 / 20%);
  background-color: rgba(255,255,255,0.13);
  border-radius: 0.5rem;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 2px solid rgba(255,255,255,0.1);
  box-shadow: 0 0 40px rgba(8,7,16,0.6);
  max-width:768px;
  margin: auto;
  padding: 50px 30px;
  @media (max-width: 425px) {
    border: none;
    box-shadow: none;
    padding: 0 10px;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid black ;
  margin-bottom: 20px;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`
export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;  
`

export const Title = styled.h1`
  text-align: center;
  font-size: 35px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 20px;

`

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const MessageContiner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: absolute;
  top: 80px;
  width: 100%;
  background-color: rgb(55 55 62);
  border-radius: 4px;
  z-index: 1;
`