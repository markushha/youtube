import React from 'react'
import SearchBar from './SearchBar'
import youtube from './youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component {
  state = { videos: [], selectedVideo: null }

  onYoutubeSearch = async (text) => {
    const response = await youtube.get('/search', {
      params: {
        q: text
      }
    })
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
  }

  onVideoSelect = (video) => {
    this.setState( {selectedVideo: video} )
  }

  render() {
    return (
        <div className='ui container' style={{ marginTop: '20px' }}>
          <SearchBar onFormSubmit={this.onYoutubeSearch}/>
          <div className='ui grid'>
            <div className='ui row'>
              <div className='eleven wide column'>
                {this.state.selectedVideo && <VideoDetail video={this.state.selectedVideo}/>}
              </div>
              <div className='four wide column'>
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default App