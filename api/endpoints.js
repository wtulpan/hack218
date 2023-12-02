const db = require('./db');

async function alerts(type,data) {
    if(type === 'GET') {
        const [table_data, bullshit] = await db.execute(`select * from alerts order by created desc limit 5`)
        return table_data
    } else if(type === 'PUT') {
        const [table_data, bullshit] = await db.execute(`insert into alerts (text) values ("${data}")`)
        return {'message': 'success'}
    } else if(type === 'DELETE') {
        const [table_data, bullshit] = await db.execute(`delete from alerts where id=${data}`)
        return {'message': 'success'}
    } else {
        return {'error': `${type} is not supported for this endpoint`}
    }
}

module.exports = {'alerts': alerts}