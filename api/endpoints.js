function alerts(type,data) {
    if(type === 'GET') {
        return {'data': [
                    {'id': 0, 'text': '70 percent', 'created': '2023-12-02 12:00:00.000'},
                    {'id': 1, 'text': '1 percent', 'created': '2023-12-02 12:05:00.000'}
                ]}
    } else {
        return {'error': `${type} is not supported for this endpoint`}
    }
}

module.exports = {'alerts': alerts}