export const SEARCH_TEXT = "SEARCH_TEXT";
export const SAVE_ARTICLES = "SAVE_ARTICLES";
export const FETCH_ARTICLES = "FETCH_ARTICLES";

export const saveArticles = (articles) => {
    return {
        type: SAVE_ARTICLES,
        payload: {
            articlesList: articles
        }
    };
};

export const fetchArticles = () => {
    return {
        type: FETCH_ARTICLES
    }
}
