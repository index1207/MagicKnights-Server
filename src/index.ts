import ws, {Server } from 'ws'

const port: number = 8080

const server: Server = new Server({port: port})
server.on('listening', () => {
    console.log(`Server is running on ${port}`)
})