const {ClickHouse} = require('clickhouse');
const {options, queries} = require('./clickhouse.config')

const clickhouse = new ClickHouse(options);
const log = function() {console.log(...arguments)}


clickhouse.query('show databases')
    .toPromise()
    .then(res => {
        console.log('response is', res);
    })


exports.getDataLog = async (req, res) => {
    await res.send({msg: "Test Messages"})

    try {
        for(const query of queries) {
            log('Query ', query)
            const r = await clickhouse.query(query).toPromise();
        
            log('Response',  r);
        }
        
    } catch (error) {
        log(error)
    }
}