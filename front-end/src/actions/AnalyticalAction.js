export const LOAD_SPARCLE_CARD = "analyticalReducer/LOAD_SPARCLE_CARD";
export const ON_PRESS_TOP_PRODUCT_DROPDOWN =
  "analyticalReducer/ON_PRESS_TOP_PRODUCT_DROPDOWN";
export const ON_PRESS_REFERRALS_DROPDOWN =
  "analyticalReducer/ON_PRESS_REFERRALS_DROPDOWN";
export const ON_PRESS_TOTAL_REVENUE_DROPDOWN =
  "analyticalReducer/ON_PRESS_TOTAL_REVENUE_DROPDOWN";
export const ON_PRESS_DATA_MANAGED_DROPDOWN =
  "analyticalReducer/ON_PRESS_DATA_MANAGED_DROPDOWN";
export const ON_PRESS_RECENT_CHAT_DROPDOWN =
  "analyticalReducer/ON_PRESS_RECENT_CHAT_DROPDOWN";
export const FACEBOOK_PROGRESS_BAR = "analyticalReducer/FACEBOOK_PROGRESS_BAR";
export const TWITTER_PROGRESS_BAR = "analyticalReducer/TWITTER_PROGRESS_BAR";
export const SEARCH_PROGRESS_BAR = "analyticalReducer/SEARCH_PROGRESS_BAR";
export const AFFILIATES_PROGRESS_BAR =
  "analyticalReducer/AFFILIATES_PROGRESS_BAR";

export const loadSparcleCard = (sparkleCardData) => (disptch) => {
  disptch({
    type: LOAD_SPARCLE_CARD,
    payload: sparkleCardData,
  });
};

export const onPressTopProductDropDown = () => (disptch) => {
  disptch({
    type: ON_PRESS_TOP_PRODUCT_DROPDOWN,
  });
};

export const onPressReferralsDropDown = () => (disptch) => {
  disptch({
    type: ON_PRESS_REFERRALS_DROPDOWN,
  });
};

export const onPressTotalRevenueDropDown = () => (disptch) => {
  disptch({
    type: ON_PRESS_TOTAL_REVENUE_DROPDOWN,
  });
};

export const onPressDataManagedDropDown = () => (disptch) => {
  disptch({
    type: ON_PRESS_DATA_MANAGED_DROPDOWN,
  });
};

export const onPressRecentChatDropDown = () => (disptch) => {
  disptch({
    type: ON_PRESS_RECENT_CHAT_DROPDOWN,
  });
};

export const facebookProgressBar = () => (disptch, getState) => {
  var facebookIntervalId = setInterval(() => {
    const { facebookShowProgressBar } = getState().analyticalReducer;
    var facebookShow = facebookShowProgressBar + 1;

    disptch({
      type: FACEBOOK_PROGRESS_BAR,
      payload: facebookShow,
    });
    if (facebookShowProgressBar > 87) {
      clearInterval(facebookIntervalId);
    }
  }, 10);
};

export const twitterProgressBar = () => (disptch, getState) => {
  var twitterIntervalId = setInterval(() => {
    const { twitterShowProgressBar } = getState().analyticalReducer;
    var twitterShow = twitterShowProgressBar + 1;
    disptch({
      type: TWITTER_PROGRESS_BAR,
      payload: twitterShow,
    });
    if (twitterShowProgressBar > 34) {
      clearInterval(twitterIntervalId);
    }
  }, 10);
};

export const searchProgressBar = () => (disptch, getState) => {
  var searchIntervalId = setInterval(() => {
    const { searchShowProgressBar } = getState().analyticalReducer;
    var searchShow = searchShowProgressBar + 1;
    disptch({
      type: SEARCH_PROGRESS_BAR,
      payload: searchShow,
    });
    if (searchShowProgressBar > 54) {
      clearInterval(searchIntervalId);
    }
  }, 10);
};

export const affiliatesProgressBar = () => (disptch, getState) => {
  var affiliatesIntervalId = setInterval(() => {
    const { affiliatesShowProgressBar } = getState().analyticalReducer;
    var affiliatesShow = affiliatesShowProgressBar + 1;
    disptch({
      type: AFFILIATES_PROGRESS_BAR,
      payload: affiliatesShow,
    });
    if (affiliatesShowProgressBar > 64) {
      clearInterval(affiliatesIntervalId);
    }
  }, 10);
};
