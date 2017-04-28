const API_BASE = 'http://minesweeper-api.herokuapp.com/'

const get = (path, params = {}) => {
  const url = [API_BASE, path, '?', qs(params)].join('')
  return window.fetch(url).then(r => r.json())
}

const post = (path, params = {}) => {
  const url = [API_BASE, path, '?', qs()].join('')
  return window.fetch(url, {
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
  .then(r => r.json())
}

export { get, post }
