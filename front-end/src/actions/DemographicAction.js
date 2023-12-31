export const ON_PRESS_SITE_VISITOR_DROPDOWN =
  "demographicReducer/ON_PRESS_SITE_VISITOR_DROPDOWN";
export const ON_PRESS_GENDER_OVERVIEW_DROPDOWN =
  "demographicReducer/ON_PRESS_GENDER_OVERVIEW_DROPDOWN";
export const ON_PRESS_BROWSER_USAGE_DROPDOWN =
  "demographicReducer/ON_PRESS_BROWSER_USAGE_DROPDOWN";

export const onPressSiteVisitorDropDown = () => (dispatch) => {
  dispatch({
    type: ON_PRESS_SITE_VISITOR_DROPDOWN,
  });
};

export const onPressGenderOverviewDropDown = () => (dispatch) => {
  dispatch({
    type: ON_PRESS_GENDER_OVERVIEW_DROPDOWN,
  });
};

export const onPressBrowserUsageDropDown = () => (dispatch) => {
  dispatch({
    type: ON_PRESS_BROWSER_USAGE_DROPDOWN,
  });
};
