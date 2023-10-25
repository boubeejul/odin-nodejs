import fastify from "fastify"
import { knex } from "./database"

const app = fastify()

app.listen({
    port: 3333
}).then(() => {
    console.log('Server running on port 3333')
})

app.get('/', async () => {
    const tables = await knex('sqlite_schema').select('*')

    return tables
})