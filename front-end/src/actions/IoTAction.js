export const ON_PRESS_SECURITY_SYSTEM = "ioTReducer/ON_PRESS_SECURITY_SYSTEM";
export const ON_PRESS_MAIN_GATE = "ioTReducer/ON_PRESS_MAIN_GATE";
export const ON_PRESS_SWITCH_BOARD_BUTTON =
  "ioTReducer/ON_PRESS_SWITCH_BOARD_BUTTON";
export const ON_PRESS_OUT_SWITCH_BOARD_BUTTON =
  "ioTReducer/ON_PRESS_OUT_SWITCH_BOARD_BUTTON";
export const ON_PRESS_APPLIENCES_SWITCH_BOARD_BUTTON =
  "ioTReducer/ON_PRESS_APPLIENCES_SWITCH_BOARD_BUTTON";
export const ON_SWITCH_BOARD_DROPDOWN = "ioTReducer/ON_SWITCH_BOARD_DROPDOWN";
export const ON_ONPRESS_OUT_DOOR_DROPDOWN =
  "ioTReducer/ON_ONPRESS_OUT_DOOR_DROPDOWN";
export const ON_ONPRESS_SWITCH_ON_ALL_OUT =
  "ioTReducer/ON_ONPRESS_SWITCH_ON_ALL_OUT";
export const ON_ONPRESS_SWITCH_OFF_ALL_OUT =
  "ioTReducer/ON_ONPRESS_SWITCH_OFF_ALL_OUT";
export const ON_ONPRESS_SWITCH_ON_ALL_IN =
  "ioTReducer/ON_ONPRESS_SWITCH_ON_ALL_IN";
export const ON_ONPRESS_SWITCH_OFF_ALL_IN =
  "ioTReducer/ON_ONPRESS_SWITCH_OFF_ALL_IN";

export const onPressSecuritySystem = () => (dispatch) => {
  dispatch({
    type: ON_PRESS_SECURITY_SYSTEM,
  });
};

export const onPressMainGate = () => (dispatch) => {
  dispatch({
    type: ON_PRESS_MAIN_GATE,
  });
};

export const onPressSwitchBordButton = (index) => (dispatch) => {
  dispatch({
    type: ON_PRESS_SWITCH_BOARD_BUTTON,
    payload: index,
  });
};

export const onPressOutSwitchBordButton = (index) => (dispatch) => {
  dispatch({
    type: ON_PRESS_OUT_SWITCH_BOARD_BUTTON,
    payload: index,
  });
};

export const onPressAppliencesSwitchBordButton = (index) => (dispatch) => {
  dispatch({
    type: ON_PRESS_APPLIENCES_SWITCH_BOARD_BUTTON,
    payload: index,
  });
};

export const onPressSwitchBordDropDown = (index) => (dispatch) => {
  dispatch({
    type: ON_SWITCH_BOARD_DROPDOWN,
  });
};

export const onPressOutdoorDropDown = () => (dispatch) => {
  dispatch({
    type: ON_ONPRESS_OUT_DOOR_DROPDOWN,
  });
};

export const onPressSwithOnAllOut = () => (dispatch) => {
  dispatch({
    type: ON_ONPRESS_SWITCH_ON_ALL_OUT,
  });
};

export const onPressAllOffLightOut = () => (dispatch) => {
  dispatch({
    type: ON_ONPRESS_SWITCH_OFF_ALL_OUT,
  });
};

export const onPressSwithOnAllIn = () => (dispatch) => {
  dispatch({
    type: ON_ONPRESS_SWITCH_ON_ALL_IN,
  });
};

export const onPressAllOffLightIn = () => (dispatch) => {
  dispatch({
    type: ON_ONPRESS_SWITCH_OFF_ALL_IN,
  });
};
