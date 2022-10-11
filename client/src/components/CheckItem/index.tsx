import * as React from 'react';
import {
  Container,
  Tick,
  Text
} from './styles'

interface ICheckItem {
  pass: boolean;
  text?: string;
}

export const CheckItem: React.FC<ICheckItem> = ({
  pass,
  text
}: ICheckItem): JSX.Element => {
  return (
    <Container data-testid="checkItem">
      {pass && <Tick />}
      <Text pass={pass}>{text}</Text>
    </Container>
  )
}
