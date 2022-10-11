import * as React from 'react';
import {
  Container,
  TitleContainer,
  StyledInput,
  Title,
  RedText
} from './styles'

interface IInput {
  title: string;
  required: boolean;
  message?: string | boolean;
  messageContent?: JSX.Element
  placeHolder?: string;
  name: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<IInput> = ({
  title,
  required,
  message,
  placeHolder,
  name,
  onChange,
  messageContent,
  type
}: IInput): JSX.Element => {
  const [showContent, setShowContent] = React.useState(false)
  return (
    <Container data-testid="input">
      <TitleContainer>
        <Title>{`${title}`}</Title>
        {required && <RedText>*</RedText>}
      </TitleContainer>
      <StyledInput 
        name={name} 
        onChange={onChange} 
        onFocus={() =>setShowContent(true)} 
        onBlur={() =>setShowContent(false)}  
        placeholder={placeHolder} 
        type={type} 
      />
      {message && <RedText>{message}</RedText>}
      {showContent && messageContent}
    </Container>
  )
}
