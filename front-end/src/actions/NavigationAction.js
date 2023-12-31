export const ON_PRESS_DASHBORD = "navigationReducer/ON_PRESS_DASHBORD";
export const ON_PRESS_DASHBORD_CHILD =
  "navigationReducer/ON_PRESS_DASHBORD_CHILD";
export const ON_PRESS_THEME_COLOR = "navigationReducer/ON_PRESS_THEME_COLOR";
export const ON_PRESS_GENERAL_SETTING =
  "navigationReducer/ON_PRESS_GENERAL_SETTING";
export const ON_PRESS_NOTIFICATION = "navigationReducer/ON_PRESS_NOTIFICATION";
export const ON_PRESS_EQUALIZER = "navigationReducer/ON_PRESS_EQUALIZER";
export const ON_PRESS_MENU_PROFILE_DROPDOWN =
  "navigationReducer/ON_PRESS_MENU_PROFILE_DROPDOWN";
export const ON_PRESS_SIDE_MENU_TOGGLE =
  "navigationReducer/ON_PRESS_SIDE_MENU_TOGGLE";
export const ON_PRESS_SIDE_MENU_TAB =
  "navigationReducer/ON_PRESS_SIDE_MENU_TAB";
export const TOGGLE_MENU_ARROW = "navigationReducer/TOGGLE_MENU_ARROW";
export const TOAST_MESSAGE_LOAD = "navigationReducer/TOAST_MESSAGE_LOAD";

var toggle = false;
var intervalId = "";
export const onPressDashbord = (index) => (dispatch) => {
  dispatch({
    type: ON_PRESS_DASHBORD,
    payload: index,
  });
};

export const onPressDashbordChild = (index, perent) => (dispatch) => {
  dispatch({
    type: ON_PRESS_DASHBORD_CHILD,
    payload: { index, perent },
  });
  toggle = !toggle;
  document.body.classList.remove("offcanvas-active");
};

export const onPressThemeColor = (color) => (dispatch) => {
  dispatch({
    type: ON_PRESS_THEME_COLOR,
    payload: "theme-" + color,
  });
};

export const onPressGeneralSetting = (index) => (dispatch) => {
  dispatch({
    type: ON_PRESS_GENERAL_SETTING,
    payload: index,
  });
};

export const onPressNotification = () => (dispatch) => {
  dispatch({
    type: ON_PRESS_NOTIFICATION,
  });
  toggle = !toggle;
  document.body.classList.remove("offcanvas-active");
};

export const onPressEqualizer = () => (dispatch) => {
  dispatch({
    type: ON_PRESS_EQUALIZER,
  });
  toggle = !toggle;
  document.body.classList.remove("offcanvas-active");
};

export const onPressSideMenuToggle = () => (dispatch) => {
  toggle = !toggle;
  if (toggle) {
    document.body.classList.add("offcanvas-active");
  } else {
    document.body.classList.remove("offcanvas-active");
  }
  dispatch({
    type: ON_PRESS_SIDE_MENU_TOGGLE,
  });
};

export const onPressMenuProfileDropdown = () => (dispatch) => {
  dispatch({
    type: ON_PRESS_MENU_PROFILE_DROPDOWN,
  });
};

export const onPressSideMenuTab = (index) => (dispatch) => {
  dispatch({
    type: ON_PRESS_SIDE_MENU_TAB,
    payload: index,
  });
};

export const toggleMenuArrow = () => (dispatch, getState) => {
  dispatch({
    type: TOGGLE_MENU_ARROW,
  });
  const { menuArrowToggle } = getState().navigationReducer;
  if (menuArrowToggle) {
    document.body.classList.add("layout-fullwidth");
  } else {
    document.body.classList.remove("layout-fullwidth");
  }
};

export const tostMessageLoad = (val) => (dispatch, getState) => {
  dispatch({
    type: TOAST_MESSAGE_LOAD,
    payload: val,
  });
};
