import express from 'express'

const app = express()

app.get('/', (request, response) => {
    response.send('Deu certinho!')
})

app.listen(3000, () => console.log('app backend is running.'))
