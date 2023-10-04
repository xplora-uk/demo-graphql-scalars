const { GraphQLScalarType, Kind } = require('graphql');

const pattern = /^\d{15}$/;

function validateImei(n) {
  const s = String(n || '');
  return pattern.test(s);
}

const IMEI = new GraphQLScalarType({
  name: 'IMEI',
  description: 'IMEI is expected to be 15 digits long - fixed',
  serialize(value) { // to user / client --> outgoing data
    if (validateImei(value)) {
      return value;
    }
    throw new Error('Invalid IMEI at serialize');
  },
  parseValue(value) { // from user / client --> incoming data
    if (validateImei(value)) {
      return value;
    }
    throw new Error('Invalid IMEI at parseValue');
  },
  parseLiteral(ast) {
    const { kind, value } = ast;
    if (kind !== Kind.STRING) {
      throw new Error('Invalid IMEI');
    }
    if (validateImei(value)) {
      return value;
    }
    throw new Error('Invalid IMEI at parseLiteral');
  },
  // extensions: {
  //   codegenScalarType: 'Date | string',
  //   jsonSchema: {
  //     type: 'string',
  //   },
  // },
});

module.exports = { IMEI };
