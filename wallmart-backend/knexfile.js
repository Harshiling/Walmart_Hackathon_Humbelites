// Update with your config settings.

module.exports = {

  production: {
    client: 'postgresql',
    connection: {
      host: "ec2-54-155-226-153.eu-west-1.compute.amazonaws.com",
      database: 'd96t9rfta1gkqk',
      user:     'bbjeowlratnuox',
      password: 'afd6ac9b3367ab5a003ae811c8791f8eb0bdd0c5082d20c6ca438f34bc6978bf',
      ssl: { rejectUnauthorized: false }
    },
    pool: {
      min: 2,
      max: 10
    },
  }

};
