import actions from './actions'

export default reducer = (state, action) => {
    switch(action.type){
        case actions.addCharacters:
            return {
                ...state,
                characters: [...state.characters, ...action.payload]
            }
        case actions.addEpisodes:
            return {
                ...state,
                episodes: [...state.episodes, ...action.payload]
            }
        default:
            return state
    }
}