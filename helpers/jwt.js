// const expressJwt = require("express-jwt");

// function authJwt() {
// const secret = process.env.secret;
// // const api = process.env.API_URL;
// return expressJwt({
// secret,
// algorithms: ["HS256"],
// // isRevoked: isRevoked,
// });
// }
// module.exports = authJwt;


const expressJwt = require("express-jwt");

function expressJwt() {
  const secret = process.env.secret;
  return console.log(
    expressJwt({
      secret,
      algorithms: ["HS256"],
    })
  );
}

module.exports = expressJwt;
