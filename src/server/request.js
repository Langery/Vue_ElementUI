import axios from 'axios'
import conf from '../config/index'

const hostFilter = hostType => {
  switch (hostType) {
    case 'common':
      return conf.commonPath
  }
}

// Vue.http.options.emulateJSON = true
export default {
  post: (hostType, url, data, error, option) => axios.post(hostFilter(hostType) + url, data, option)
    .then(response => {
      // console.log(response.data)
      return response.data
    })
    .catch(err => {
      error ? error(err) : console.log(err)
    }),
  get: (hostType, url, data, error, option) => axios.get(hostFilter(hostType) + url, data, option)
    .then(response => {
      // console.log(response.data)
      return response.data
    })
    .catch(err => {
      error ? error(err) : console.log(err)
    }),
  url (hostType, path) { return hostFilter(hostType) + path }
}