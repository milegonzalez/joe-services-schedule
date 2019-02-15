module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'sdc',
      password: 'password',
      database: 'schedule'
    },
    seeds: {
      directory: './database/seeds'
    },
    useNullAsDefault: true
  }
};