const env = process.env.NODE_ENV

// production
const production = {
  commonPath: 'http://' + window.location.host + window.location.pathname + '/' // 路径地址
}

// development
const development = {
  commonPath: 'http://' + window.location.host + window.location.pathname + '/' // 路径地址
}

const location = env === 'production' ? production : development
export default location
