import React from 'react'
import Link from 'gatsby-link'
import YouTube from 'react-youtube'

import '../assets/scss/main.scss'
import Footer from '../components/Footer'

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'is-loading'
    }
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children } = this.props
    const videoOptions = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
        loop: 1,
        start: 13
      }
    }

    return (
      <div className={`body ${this.state.loading}`}>
        <div id="wrapper">

          {children()}

          <div className="video-background">
            <div className="video-foreground">
              <YouTube
                videoId="7o0EOnQrhhM"
                opts={videoOptions}
                className="video-iframe"
                onReady={this._onReady}
                onEnd={this._onEnd}
              />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func
}

export default Template
