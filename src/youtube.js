import axios from 'axios'

const client = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: 'AIzaSyCGZ4UxrHHBDrVFqV01nTu9DKuVWm8Rqds',
    part: 'snippet',
    type: 'video',
    maxResults: 5
  }
})

export default client