const initState = {
    loading: false
}
type initStateType = typeof initState

export const loadingReducer = (state: initStateType = initState,action: ActionType): initStateType => {
    switch (action.type) {
        case "CHANGE_LOADING":{
            return{
                ...state,
                loading: action.loading
            }
        }
        default: return state
    }
}

type ActionType = ReturnType<typeof loadingAC>
export const loadingAC = (loading: boolean) => ({
    type: 'CHANGE_LOADING',
    loading
})as const