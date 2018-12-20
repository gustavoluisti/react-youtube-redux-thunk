import {combineReducers} from 'redux'
import busca from '../reducers/busca'
import reproduz from './reproduz-video'

const rootReducers = combineReducers ({
    busca,
    reproduz
})

export default rootReducers