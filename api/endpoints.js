const db = require('./db');

async function alerts(type, data) {
    const dt = new Date()
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

async function grocery(type, data) {
    const dt = new Date()
    if(type === 'GET') {
        const [table_data, bullshit] = await db.execute(`select * from grocery_items where list_id=(select max(id) from grocery_list) order by created desc`)
        return table_data
    } else if(type === 'PUT') {
        const [t_d, b_s] = await db.execute(`select max(id) from grocery_list`)
        let list_id = Object.values(t_d[0])[0]
        const [table_data, bullshit] = await db.execute(`insert into grocery_items (list_id, description) values ("${list_id}", "${data}")`)
        return {'message': 'success'}
    } else if(type === 'DELETE') {
        const [table_data, bullshit] = await db.execute(`delete from grocery_items where id=${data}`)
        return {'message': 'success'}
    } else {
        return {'error': `${type} is not supported for this endpoint`}
    }
}

async function newGroceryList(type, data) {
    const dt = new Date()
    if(type === 'PUT') {
        const [t, b] = await db.execute(`select max(id) from grocery_list`)
        let list_id = Object.values(t[0])[0]
        const [t_d, b_s] = await db.execute(`update grocery_list set completed=True where id=(${list_id})`)
        const [table_data, bullshit] = await db.execute(`insert into grocery_list () values ()`)
        return table_data
    }
}

async function chores(type, data) {
    const dt = new Date()
    if(type === 'GET') {
        const [table_data, bullshit] = await db.execute(`select c.name as name, ch.chore_id as id, ch.completed as completed from chores c join chore_history ch on c.id=ch.chore_id order by ch.completed;`)
        return table_data
    } else if(type === 'POST') {
        const dt = new Date()
        const [table_data, bullshit] = await db.execute(`update chore_history set completed="${dt.toISOString().replace('T',' ').slice(0,-1)}" where id=${data}`)
        return {'message': 'success'}
    } else {
        return {'error': `${type} is not supported for this endpoint`}
    }
}

module.exports = {'alerts': alerts, 'grocery': grocery, 'newGroceryList': newGroceryList, 'chores': chores}