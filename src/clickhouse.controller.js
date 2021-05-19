const {ClickHouse} = require('clickhouse');
const {options, queries} = require('./clickhouse.config')

const clickhouse = new ClickHouse(options);
const log = function() {console.log(...arguments)}


exports.getDataLog = async (req, res) => {
    await res.send({v: "Test api"})

    try {
        for(const query of queries) {
            log('QUERY', query)
            const r = await clickhouse.query(query).toPromise();
        
            log(query, r);
        }
        
    } catch {
        log(error)
    }
}