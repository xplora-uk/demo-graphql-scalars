const { DateTimeResolver } = require('graphql-scalars');
const { IMEI } = require('./imei');

const resolvers = {
  DateTime: DateTimeResolver,
  IMEI,
  Query: {
    myDetails: () => {
      return makeUser();
    },
    usersFilteredByRegistration: (_parent, args, _context, _info) => {
      return [
        makeUser(),
        makeUser(),
        makeUser({ dateRegistered: args.date }),
      ];
    }
  },  
}

function makeUser(override = {}) {
  return {
    id: '123',
    email: 'abc@example.com',
    dateRegistered: new Date(),
    deviceId: '123456789012345', // TODO: try making a mistake
    ...override,
  };
}

module.exports = {
  resolvers,
  makeUser,
};
