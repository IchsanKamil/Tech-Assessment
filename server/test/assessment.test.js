const request = require('supertest');
const app = require('../appTest');

describe('GET /', () => {
  it('message when connected', done => {
    request(app)
      .get('/')
      .then(response => {
        const { status, body } = response
        expect(status).toBe(200)
        expect(body).toHaveProperty('message', 'welcome ^^')
        done()
      })
  })
})

describe('POST /', () => {
  it('convert the input string', done => {
    let input = {
      input: 'hello world'
    }
    request(app)
      .post('/')
      .send(input)
      .then(response => {
        const { status, body } = response
        expect(status).toBe(200)
        expect(body).toHaveProperty('output1', 'HELLO WORLD')
        expect(body).toHaveProperty('output2', 'hElLo wOrLd')
        done()
      })
  })
  it('input with number and string', done => {
    let input = {
      input: 'hello 1234'
    }
    request(app)
      .post('/')
      .send(input)
      .then(response => {
        const { status, body } = response
        expect(status).toBe(200)
        expect(body).toHaveProperty('output1', 'HELLO 1234')
        expect(body).toHaveProperty('output2', 'hElLo 1234')
        done()
      })
  })
  it('input empty string', done => {
    let input = ''
    request(app)
      .post('/')
      .send(input)
      .then(response => {
        const { status, body } = response
        expect(status).toBe(400)
        expect(body).toHaveProperty('messageError', 'Input cannot be empty')
        done()
      })
  })
})
