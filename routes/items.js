import items from "../items";

//get items options
const getItemsOptions = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        item: {type: 'string'}
                    }
                }
            }
        }
    }
}

const getItemOptions = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    item: {type: 'string'}
                }
            }
        }
    }
}

export default (fastify, options, done) => {

    fastify.get('/items', getItemsOptions, async(req, rply) => {
        return items
    })
    
    fastify.get('/items/:id', getItemOptions, async(req, rply) => {
        const {id} = req.params
        console.log(id)
        const item = items.find(item => item.id === id)
        return item
    })

    done()
}