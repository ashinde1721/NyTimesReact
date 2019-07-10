import * as actions from '../actions/actions';

const initialState = {
    search: '',
    articlesList: []
};

const reducer = (state = initialState, action) => {
    const { type, payload = {} } = action;

    switch (type) {
        case actions.SEARCH_TEXT:
            return { ...state, search: payload.search };

        case actions.SAVE_ARTICLES:
            return {
                ...state,
                articlesList: payload.articlesList
            }
        default:
            return state;
    }
};

export default reducer;
