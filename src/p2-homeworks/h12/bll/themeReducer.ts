export type ThemeStateType = {
    theme: string,
    themes: Array<string>
}

export const initThemeState: ThemeStateType = {
    theme: 'green',
    themes: ['blue', 'red', 'green']
};

export const themeReducer = (state:ThemeStateType =  initThemeState, action: ChangeActionType): ThemeStateType => {
    switch (action.type) {
        case 'CHANGE_COLOR': {
            return {
                ...state,
                theme: action.theme
            };
        }
        default:
            return state;
    }
};

type ChangeActionType = ReturnType<typeof changeThemeAC>
export const changeThemeAC = (theme: string) => ({type: 'CHANGE_COLOR', theme})as const