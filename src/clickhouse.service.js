const {Router} = require('express'),
    {getDataLog} = require('./clickhouse.controller');

const router = Router().get('/log', getDataLog)

exports.router = router;