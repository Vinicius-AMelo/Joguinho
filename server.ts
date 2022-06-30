/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */
const express = require('express')

const app = express()
const porta = process.env.PORT || 3001

app.use(express.static(`${__dirname}/build/`))

app.get('/Joguinho', (req, resp) => resp.sendFile(`${__dirname}/build/index.html`))

app.listen(porta, () => console.log('Servidor web rodando com Express'))
