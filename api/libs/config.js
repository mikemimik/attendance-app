module.exports = {
  app: {
    name: 'attendance-api',
    port: process.env.ATTENDANCE_API_PORT || 3000
  },
  database: {
    name: 'devdb',
    host: 'localhost',
    dialect: 'mysql',
    username: process.env.ATTENDANCE_DB_USER || 'devuser',
    password: process.env.ATTENDANCE_DB_PASS || 'devpass'
  }
};