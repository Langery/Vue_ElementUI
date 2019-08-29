const env = process.env.NODE_ENV

// production
const production = {
  commonPath: 'http://' + window.location.host + window.location.pathname + '/'
}

// development
const development = {
  commonPath: 'http://' + window.location.host + window.location.pathname + '/'
}

const location = env === 'production' ? production : development
export default location
