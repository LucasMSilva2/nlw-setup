import Fastify from 'fastify'

const app = Fastify()

/* 
  Back-end: Restful
  Método HTTP: Get, Post, Put, Patch, Delete
*/

app.get('/hello', () => {
  return 'Hello World'
})

app.listen({
  port: 3333,
}).then(() => {
  console.log('listening on port');
})