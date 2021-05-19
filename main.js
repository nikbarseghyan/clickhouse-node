require('dotenv').config()
const app = require('express')(),
    compression = require('compression'),
    cors = require('cors'),
    {json, urlencoded} = require('body-parser'),
    {router} = require('./src/clickhouse.service'),
    {port} = require('./src/clickhouse.config');

app.use(cors())
app.use(json())
app.use(urlencoded({extended: true}))
app.use(compression())
app.use('/', router)

app.listen(port, () => console.log(`Server is runing ${port}`))