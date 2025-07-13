const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "AZWQshlrJPjh1xZ_1ekS6bFtSJrZqm54nzXJ7XJU0m6LfKDZKC-wU4oRZiMUK8j9tRB2YwLh1Fk09GGl",
  client_secret:
    "EJfuF83jZjvZVeZQTRo3wjyEuhn44GH-ZpGQXIETcbE1r61q1AKoA1NNxJ1BBs6gyjS0MZuZHopM2QQq",
});

module.exports = paypal;
