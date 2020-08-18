import React, { useState } from "react";
import { Container, Form, Button } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';

export default () => {
  const { data, loading, error, post } = useFetch('http://localhost:3000')
  const [wordInput, setWordInput] = useState({ input: '' })

  const onChange = (e) => {
    let { name, value } = e.target
    const newInput = { ...wordInput, [name]: value }
    setWordInput(newInput)
  }

  const onSubmit = e => {
    e.preventDefault()
    post(wordInput)
    setWordInput({ input: '' })
  }

  return (
    <Container className="mt-5">
      {loading && <p class="display-3">Loading...</p>}
      {error && <p>{error.message}</p>}
      <Form onSubmit={onSubmit} className="my-3">
        <Form.Group className="col-6 row">
          <Form.Label>Input</Form.Label>
          <Form.Control onChange={onChange} value={wordInput.input} name="input" type="text" placeholder="Input here" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>{data.output1}</p>
      <p>{data.output2}</p>
      <p>{data.messageError}</p>
    </Container>
  )
}