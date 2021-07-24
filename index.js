const app = require('./src/app')


app.listen(secrets.port, () => {
    console.log(`Server is up and runningo on ${secrets.port}` )
})