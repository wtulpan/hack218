const db = require('./db');

async function alerts(type,data) {
    if(type === 'GET') {
        const [table_data, bullshit] = await db.execute('select * from alerts')
        return table_data
    } else {
        return {'error': `${type} is not supported for this endpoint`}
    }
}

module.exports = {'alerts': alerts}