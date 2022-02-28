import Fastify from "fastify";
import itemRoutes from "./routes/items"

const fastify = Fastify({
    logger: true
})

fastify.get('/', async(req, rply) => {
    return {hello:'world'}
})

fastify.register(itemRoutes)

const server = async () => {
    try {
        await fastify.listen(3000);
    }catch(error){
        fastify.log.error(error)
        process.exit(1)
    }
} 

server()