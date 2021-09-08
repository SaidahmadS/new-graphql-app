const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        users: String!
    }
`

module.exports = typeDefs