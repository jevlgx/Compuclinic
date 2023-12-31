export const ON_PRESS_SIMPLE_TAB = "mailInboxReducer/ON_PRESS_SIMPLE_TAB";
export const ON_PRESS_CLOSE_ALERT = "mailInboxReducer/ON_PRESS_CLOSE_ALERT";
export const NITIFY_GENERAL_INFO = "UIElementsReducer/NITIFY_GENERAL_INFO";
export const NITIFY_ON_CLOSE = "UIElementsReducer/NITIFY_ON_CLOSE";
export const ON_CLICK_MODAL_CARD = "UIElementsReducer/ON_CLICK_MODAL_CARD";
export const ON_CLOSE_MODAL = "UIElementsReducer/ON_CLOSE_MODAL";

export const onPressSimpleTab = (index, perent) => (dispatch) => {
  dispatch({
    type: ON_PRESS_SIMPLE_TAB,
    payload: { index, perent },
  });
};

export const onPressCloseAlert = (index) => (dispatch) => {
  dispatch({
    type: ON_PRESS_CLOSE_ALERT,
    payload: index,
  });
};

export const notifyGeneralInfo = (index) => (dispatch) => {
  dispatch({
    type: NITIFY_GENERAL_INFO,
    payload: index,
  });
};

export const notifyOnClose = (index) => (dispatch) => {
  dispatch({
    type: NITIFY_ON_CLOSE,
    payload: index,
  });
};

export const onClickModalCard = (index) => (dispatch) => {
  dispatch({
    type: ON_CLICK_MODAL_CARD,
    payload: index,
  });
};

export const onCloseModal = (index) => (dispatch) => {
  dispatch({
    type: ON_CLOSE_MODAL,
    payload: index,
  });
};
