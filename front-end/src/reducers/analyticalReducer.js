import {
  LOAD_SPARCLE_CARD,
  ON_PRESS_TOP_PRODUCT_DROPDOWN,
  ON_PRESS_REFERRALS_DROPDOWN,
  ON_PRESS_TOTAL_REVENUE_DROPDOWN,
  ON_PRESS_DATA_MANAGED_DROPDOWN,
  ON_PRESS_RECENT_CHAT_DROPDOWN,
  FACEBOOK_PROGRESS_BAR,
  TWITTER_PROGRESS_BAR,
  SEARCH_PROGRESS_BAR,
  AFFILIATES_PROGRESS_BAR,
} from "../actions/AnalyticalAction";

const initialState = {
  loadingPage: false,
  sparkleCardData: [],
  topProductDropDown: false,
  referralsDropDown: false,
  recentChatDropDown: false,
  totalRevenueDropDown: false,
  dataManagedDropDown: false,
  facebookShowProgressBar: 0,
  twitterShowProgressBar: 0,
  searchShowProgressBar: 0,
  affiliatesShowProgressBar: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SPARCLE_CARD: {
      return {
        ...state,
        sparkleCardData: [...action.payload],
      };
    }

    case ON_PRESS_TOP_PRODUCT_DROPDOWN: {
      return {
        ...state,
        topProductDropDown: !state.topProductDropDown,
        recentChatDropDown: false,
        totalRevenueDropDown: false,
        dataManagedDropDown: false,
        referralsDropDown: false,
      };
    }

    case ON_PRESS_REFERRALS_DROPDOWN: {
      return {
        ...state,
        referralsDropDown: !state.referralsDropDown,
        topProductDropDown: false,
        recentChatDropDown: false,
        totalRevenueDropDown: false,
        dataManagedDropDown: false,
      };
    }

    case ON_PRESS_TOTAL_REVENUE_DROPDOWN: {
      return {
        ...state,
        totalRevenueDropDown: !state.totalRevenueDropDown,

        topProductDropDown: false,
        recentChatDropDown: false,
        dataManagedDropDown: false,
        referralsDropDown: false,
      };
    }

    case ON_PRESS_DATA_MANAGED_DROPDOWN: {
      return {
        ...state,
        dataManagedDropDown: !state.dataManagedDropDown,
        topProductDropDown: false,
        recentChatDropDown: false,
        totalRevenueDropDown: false,
        referralsDropDown: false,
      };
    }

    case ON_PRESS_RECENT_CHAT_DROPDOWN: {
      return {
        ...state,
        recentChatDropDown: !state.recentChatDropDown,
        topProductDropDown: false,
        totalRevenueDropDown: false,
        dataManagedDropDown: false,
        referralsDropDown: false,
      };
    }

    case FACEBOOK_PROGRESS_BAR: {
      return {
        ...state,
        facebookShowProgressBar: action.payload,
      };
    }

    case TWITTER_PROGRESS_BAR: {
      return {
        ...state,
        twitterShowProgressBar: action.payload,
      };
    }

    case AFFILIATES_PROGRESS_BAR: {
      return {
        ...state,
        affiliatesShowProgressBar: action.payload,
      };
    }

    case SEARCH_PROGRESS_BAR: {
      return {
        ...state,
        searchShowProgressBar: action.payload,
        loadingPage: false,
      };
    }

    default:
      return state;
  }
};
