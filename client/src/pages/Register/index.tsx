import React, { useState } from "react";

import {
  Section,
  Container,
  Title,
  Content,
  Footer,
  MessageContiner,
} from "./styles"
import { Button, Text, Input, CheckItem } from '../../components'
import { IPassword } from "../../types";
import {ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import ReactLoading from 'react-loading'
import axios from "axios";

const SERVER_URL = 'http://localhost:5000/api'

const Login: React.FC = () => {

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [usernameValid, setUsernameValid] = useState<string|boolean>(false)
  const [confirmPasswordValid, setConfirmPasswordValid] = useState<string|boolean>(false)
  const [passwordValid, setPasswordValid] = useState<IPassword>({
    upperCase: false,
    lowerCase: false,
    number: false,
    specialChr: false,
    length: false
  })

  const handleSubmit = async (event:  React.SyntheticEvent) => {
    event.preventDefault()
    if(username == '') {
      setUsernameValid("Username is required")
      return
    }
    if(password !== confirmPassword) {
      setConfirmPasswordValid("confirm password is different")
      return
    } 
    
    try {
      
      const {upperCase, lowerCase, number, specialChr, length} = passwordValid
      if (upperCase && lowerCase && number && specialChr && length) {
        setLoading(true)
        const response = await axios.post(`${SERVER_URL}/newUser`, {
          username: username,
          password: password
        })
        console.log(response.data)
        if(response.data.error == false) {
          setLoading(false)
          toast.success(`${username} was registered successfully!`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000
          })
        } else {
          setLoading(false)
          toast.error(`${username} was already registered!`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000
          })
        }
        
        setUsername('')
        setPassword('')
        setConfirmPassword('')
        setPasswordValid({
          upperCase: false,
          lowerCase: false,
          number: false,
          specialChr: false,
          length: false
        })
      } else {
        toast.error("Please input valid username and password!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000
        })
      }
    } catch(err) {
      toast.error("Registeration failed!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000
      })
      setLoading(false)
    }
  }

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'username') {
      setUsername(event.target.value)
      setUsernameValid(false)
    } else if (event.target.name === 'password') {
      setPassword(event.target.value)
      validPassword(event.target.value)
    } else if(event.target.name === 'confirmPassword') {
      setConfirmPassword(event.target.value)
      setConfirmPasswordValid(false)
    }   
  }

  const validPassword = (str: string) => {
    const length = str.length >= 6
    const number = /(?=.*[0-9])/g.test(str)
    const upperCase = /(?=.*[A-Z])/g.test(str)
    const lowerCase = /(?=.*[a-z])/g.test(str)
    const specialChr = /(?=.*\W)/g.test(str)

    setPasswordValid({
      upperCase,
      lowerCase,
      number,
      specialChr,
      length
    })
  }

  const messageContent = <MessageContiner>
    <CheckItem pass={passwordValid.upperCase} text="At least one upper letter" />
    <CheckItem pass={passwordValid.lowerCase} text="At least one lower letter" />
    <CheckItem pass={passwordValid.number} text="At least one digit" />
    <CheckItem pass={passwordValid.specialChr} text="At least one special character" />
    <CheckItem pass={passwordValid.length} text="Minimum 6 in length" />
  </MessageContiner>;

  return (
    <Section data-testid="container">
      {
        loading ? 
        <ReactLoading type="bars" color="#444" /> :
        <Container onSubmit={handleSubmit}>
        <Title>Woebot Health</Title>
        <Content>
          <Input
            name="username"
            onChange={handleChange}
            title="Username"
            required={true}
            message={usernameValid}
          />
          <Input
            name="password"
            onChange={handleChange}
            title="Password"
            required={true}
            messageContent={messageContent}
            type="password"
          />
          <Input
            name="confirmPassword"
            onChange={handleChange}
            title="Confirm Password"
            required={true}
            message={confirmPasswordValid}
            type="password"
          />
        </Content>
        <Footer>
          <Button type="submit">Register</Button>
        </Footer>
      </Container>
      }
      <ToastContainer />
    </Section>
  );
}

export default Login;