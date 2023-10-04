const typeDefs = `#graphql

scalar DateTime
scalar IMEI

type Query {
  myDetails: User!
  usersFilteredByRegistration(date: DateTime!, deviceId: IMEI): [User!]!
}

type User {
  id: ID!
  email: String!
  dateRegistered: DateTime!
  deviceId: IMEI!
}
`;

module.exports = {
  typeDefs,
};
