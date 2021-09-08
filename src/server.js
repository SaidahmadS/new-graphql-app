const { ApolloServer } = require('apollo-server')
const modules = require('./modules')

const server = new ApolloServer({ modules })

server.listen(process.env.PORT || 4000).then( ({ url }) => console.log('Server is running on ' + url))