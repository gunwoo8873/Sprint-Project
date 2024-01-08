const express = require(`express`)
const app = express()

app.get('*', (request, response) => {
    response.status(404);
    response.set('Test A','Check A')
    response.set({
        'Test B' : 'Check B',
        'Test C' : 'Check C',
    })
    response.send('Testing JavaScript')
})

app.listen(52273, () => {
    // http://IP/page/id(임의)
    console.log('Server http://127.0.0.1:52273/page/1111');
})