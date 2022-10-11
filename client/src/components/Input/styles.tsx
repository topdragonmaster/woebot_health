import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 3px;
`

export const StyledInput = styled.input`
  padding: 6px;
  width: 100%;
  margin-bottom: 3px;
  font-size: 14px;
  background-color: rgba(255,255,255,0.07);
  border-radius: 3px;
  padding: 15px 10px;
  outline: none;
  border: none;
  color: white;
  ::placeholder {
    color: #e5e5e5;
  }
`

export const Title = styled.p`
  font-size: 16px;
`

export const RedText = styled.p`
  font-size: 14px;
  color: #e45947;
`