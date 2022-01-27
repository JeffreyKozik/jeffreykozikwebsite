const initialState = {
    portfolioName: "",
};

const TOGGLE_PORTFOLIONAME = 'TOGGLE_PORTFOLIONAME';
export const togglePortfolioName = portfolioName => ({ type: TOGGLE_PORTFOLIONAME, portfolioName });

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_PORTFOLIONAME:
            return {...state, portfolioName: action.portfolioName};
        default:
            return state;
    }
};
