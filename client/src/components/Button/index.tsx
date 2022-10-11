import styled, { css } from 'styled-components'

interface IButton {
  disabled?: boolean
}

export const Button = styled.button<IButton>`
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  border:none;
  cursor: pointer;
  margin-bottom: 5px;
  transition: color .15s ease-in-out, background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  ${(props) => {
    if (props.disabled)
      return css`
        opacity: 0.5;
      `
    else
      return css`
        &:hover {
          background-color: rgba(255,255,255,0.8);
          transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        }
      `
  }}
`
