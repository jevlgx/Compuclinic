import {
  ON_PRESS_SITE_VISITOR_DROPDOWN,
  ON_PRESS_GENDER_OVERVIEW_DROPDOWN,
  ON_PRESS_BROWSER_USAGE_DROPDOWN,
} from "../actions/DemographicAction";

const initialState = {
  isSiteVisitorDropDown: false,
  isGenderOverviewDropDown: false,
  isBrowserUsageDropDown: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_PRESS_SITE_VISITOR_DROPDOWN: {
      return {
        ...state,
        isSiteVisitorDropDown: !state.isSiteVisitorDropDown,
        isGenderOverviewDropDown: false,
        isBrowserUsageDropDown: false,
      };
    }

    case ON_PRESS_GENDER_OVERVIEW_DROPDOWN: {
      return {
        ...state,
        isGenderOverviewDropDown: !state.isGenderOverviewDropDown,
        isSiteVisitorDropDown: false,
        isBrowserUsageDropDown: false,
      };
    }

    case ON_PRESS_BROWSER_USAGE_DROPDOWN: {
      return {
        ...state,
        isBrowserUsageDropDown: !state.isBrowserUsageDropDown,
        isSiteVisitorDropDown: false,
        isGenderOverviewDropDown: false,
      };
    }

    default:
      return state;
  }
};
