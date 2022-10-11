import styled from 'styled-components'

interface IText {
  color: string;
  fontSize: number;
}

export const Text = styled.p<IText>`
  font-size: ${(props: IText) => props.fontSize}px;
  color: ${(props: IText) => props.color};
  text-align: center;
`