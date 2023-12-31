import {
  ON_PRESS_DASHBORD,
  ON_PRESS_DASHBORD_CHILD,
  ON_PRESS_THEME_COLOR,
  ON_PRESS_GENERAL_SETTING,
  ON_PRESS_NOTIFICATION,
  ON_PRESS_EQUALIZER,
  ON_PRESS_MENU_PROFILE_DROPDOWN,
  ON_PRESS_SIDE_MENU_TOGGLE,
  ON_PRESS_SIDE_MENU_TAB,
  TOGGLE_MENU_ARROW,
  TOAST_MESSAGE_LOAD,
} from "../actions/NavigationAction";

const initialState = {
  isToastMessage: false,
  addClassactive: [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  addClassactiveChild: [
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  addClassactiveChildApp: [false, false, false, false, false, false],
  addClassactiveChildFM: [false, false, false, false, false],
  addClassactiveChildBlog: [false, false, false, false, false],
  addClassactiveChildUI: [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  addClassactiveChildWidgets: [false, false, false, false, false, false, false],
  addClassactiveChildAuth: [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  addClassactiveChildPages: [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  addClassactiveChildForms: [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  addClassactiveChildTables: [false, false, false, false, false, false, false],
  addClassactiveChildChart: [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  addClassactiveChildMaps: [false, false, false],
  themeColor: "theme-blue", //'theme-cyan layout-fullwidth'
  generalSetting: [false, false, true, true, false, false],
  toggleNotification: false,
  toggleEqualizer: false,
  menuProfileDropdown: false,
  sideMenuTab: [true, false, false, false],
  menuArrowToggle: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_PRESS_DASHBORD: {
      const addClass = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ];
      addClass[action.payload] = !state.addClassactive[action.payload];
      return {
        ...state,
        addClassactive: [...addClass],
      };
    }

    case ON_PRESS_DASHBORD_CHILD:
      {
        switch (action.payload.perent) {
          case 0:
            const addClassChild = [
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
            ];
            addClassChild[action.payload.index] = true;
            return {
              ...state,
              //addClassactive: true,
              addClassactiveChild: [...addClassChild],
            };

          case 1:
            const addClassChildApp = [
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
            ];
            addClassChildApp[action.payload.index] = true;
            return {
              ...state,
              addClassactiveChildApp: [...addClassChildApp],
            };

          case 2:
            const addClassChildFM = [false, false, false, false, false];
            addClassChildFM[action.payload.index] = true;
            return {
              ...state,
              addClassactiveChildFM: [...addClassChildFM],
            };

          case 3:
            const addClassChildBlog = [false, false, false, false, false];
            addClassChildBlog[action.payload.index] = true;
            return {
              ...state,
              addClassactiveChildBlog: [...addClassChildBlog],
            };

          case 4:
            const addClassChildUI = [
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
            ];
            addClassChildUI[action.payload.index] = true;
            return {
              ...state,
              addClassactiveChildUI: [...addClassChildUI],
            };

          case 5:
            const addClassChildWdg = [
              false,
              false,
              false,
              false,
              false,
              false,
              false,
            ];
            addClassChildWdg[action.payload.index] = true;
            return {
              ...state,
              addClassactiveChildWidgets: [...addClassChildWdg],
            };

          case 6:
            const addClassChildAuth = [
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
            ];
            addClassChildAuth[action.payload.index] = true;
            return {
              ...state,
              addClassactiveChildAuth: [...addClassChildAuth],
            };

          case 7:
            const addClassChildPages = [
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
            ];
            addClassChildPages[action.payload.index] = true;
            return {
              ...state,
              addClassactiveChildPages: [...addClassChildPages],
            };

          case 8:
            const addClassChildForms = [
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
            ];
            addClassChildForms[action.payload.index] = true;
            return {
              ...state,
              addClassactiveChildForms: [...addClassChildForms],
              toggleEqualizer: false,
            };

          case 9:
            const addClassChildTables = [
              false,
              false,
              false,
              false,
              false,
              false,
              false,
            ];
            addClassChildTables[action.payload.index] = true;
            return {
              ...state,
              addClassactiveChildTables: [...addClassChildTables],
              toggleEqualizer: false,
            };

          case 10:
            const addClassChildChart = [
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
            ];
            addClassChildChart[action.payload.index] = true;
            return {
              ...state,
              addClassactiveChildChart: [...addClassChildChart],
              toggleEqualizer: false,
            };

          case 11:
            const addClassChildMaps = [false, false, false];
            addClassChildMaps[action.payload.index] = true;
            return {
              ...state,
              addClassactiveChildMaps: [...addClassChildMaps],
              toggleEqualizer: false,
            };

          default:
        }
      }
      break;

    case ON_PRESS_THEME_COLOR: {
      return {
        ...state,
        themeColor: action.payload,
        toggleEqualizer: false,
      };
    }

    case ON_PRESS_GENERAL_SETTING: {
      return {
        ...state,
        generalSetting: !state.generalSetting[action.payload],
        menuProfileDropdown: false,
        toggleEqualizer: false,
        toggleNotification: false,
      };
    }

    case ON_PRESS_NOTIFICATION: {
      return {
        ...state,
        toggleNotification: !state.toggleNotification,
        menuProfileDropdown: false,
        toggleEqualizer: false,
      };
    }

    case ON_PRESS_EQUALIZER: {
      return {
        ...state,
        toggleEqualizer: !state.toggleEqualizer,
        menuProfileDropdown: false,
        toggleNotification: false,
      };
    }

    case ON_PRESS_MENU_PROFILE_DROPDOWN: {
      return {
        ...state,
        menuProfileDropdown: !state.menuProfileDropdown,
        toggleEqualizer: false,
        toggleNotification: false,
      };
    }

    case ON_PRESS_SIDE_MENU_TOGGLE: {
      return {
        ...state,
        menuProfileDropdown: false,
        toggleEqualizer: false,
        toggleNotification: false,
      };
    }

    case ON_PRESS_SIDE_MENU_TAB: {
      var menuTab = [false, false, false, false];
      menuTab[action.payload] = true;
      return {
        ...state,
        sideMenuTab: [...menuTab],
        menuProfileDropdown: false,
        toggleEqualizer: false,
        toggleNotification: false,
      };
    }

    case TOGGLE_MENU_ARROW: {
      return {
        ...state,
        menuArrowToggle: !state.menuArrowToggle,
        menuProfileDropdown: false,
        toggleEqualizer: false,
        toggleNotification: false,
      };
    }

    case TOAST_MESSAGE_LOAD: {
      return {
        ...state,
        isToastMessage: !state.isToastMessage,
      };
    }

    default:
      return state;
  }
};
