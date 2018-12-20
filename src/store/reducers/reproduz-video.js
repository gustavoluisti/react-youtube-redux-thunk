const INITIAL_STATE = {
    video: {}
}

export default function reproduzVideo(state=INITIAL_STATE, action) {
    if(action.type === 'REP|RODUZ_VIDEO') {
        return {
            video: action.video
        }
    } else {
        return state
    }
}