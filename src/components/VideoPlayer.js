import React from 'react'
import { connect } from 'react-redux'
import { Advertisement, Embed} from 'semantic-ui-react'


 const VideoPlayer = props => {
        return(
            <div className="video-player">
            {
                !props.video.id && (
                    <Advertisement style={{'height': '433px'}} unit='top banner' test='Escolha um vídeo' />
                )
            }
            {
                props.video.id && (
                    <div>
                         <Embed id={props.video.id.videoId} source="youtube" />
                         <h2>{props.video.snippet.title}</h2>
                         <h4>{props.video.snippet.description}</h4>
                    </div>
                   
                )
            }
               
            </div>
        )
    }

const mapStateToProps = (state) => {
    return {
        video: state.reproduz.video
    }
}


export default connect(mapStateToProps, null )(VideoPlayer)