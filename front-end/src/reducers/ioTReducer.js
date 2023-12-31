import {
  ON_PRESS_SECURITY_SYSTEM,
  ON_PRESS_MAIN_GATE,
  ON_PRESS_SWITCH_BOARD_BUTTON,
  ON_PRESS_OUT_SWITCH_BOARD_BUTTON,
  ON_PRESS_APPLIENCES_SWITCH_BOARD_BUTTON,
  ON_SWITCH_BOARD_DROPDOWN,
  ON_ONPRESS_OUT_DOOR_DROPDOWN,
  ON_ONPRESS_SWITCH_ON_ALL_OUT,
  ON_ONPRESS_SWITCH_OFF_ALL_OUT,
  ON_ONPRESS_SWITCH_OFF_ALL_IN,
  ON_ONPRESS_SWITCH_ON_ALL_IN,
} from "../actions/IoTAction";

const initialState = {
  isSecuritySystem: false,
  isMaingate: false,
  switchBoardSwitch: [
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
  switchOutBoardSwitch: [
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
  switchAppliencesBoardSwitch: [
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
  isIndoorDropdown: false,
  isOutdoorDropdown: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_PRESS_SECURITY_SYSTEM: {
      return {
        ...state,
        isSecuritySystem: !state.isSecuritySystem,
      };
    }

    case ON_PRESS_MAIN_GATE: {
      return {
        ...state,
        isMaingate: !state.isMaingate,
      };
    }

    case ON_PRESS_SWITCH_BOARD_BUTTON: {
      const switchO = state.switchBoardSwitch;
      switchO[action.payload] = !state.switchBoardSwitch[action.payload];
      return {
        ...state,
        switchBoardSwitch: [...switchO],
      };
    }

    case ON_PRESS_OUT_SWITCH_BOARD_BUTTON: {
      const switchO = state.switchOutBoardSwitch;
      switchO[action.payload] = !state.switchOutBoardSwitch[action.payload];
      return {
        ...state,
        switchOutBoardSwitch: [...switchO],
      };
    }

    case ON_PRESS_APPLIENCES_SWITCH_BOARD_BUTTON: {
      const switchO = state.switchAppliencesBoardSwitch;
      switchO[action.payload] =
        !state.switchAppliencesBoardSwitch[action.payload];
      return {
        ...state,
        switchAppliencesBoardSwitch: [...switchO],
      };
    }

    case ON_SWITCH_BOARD_DROPDOWN: {
      return {
        ...state,
        isIndoorDropdown: !state.isIndoorDropdown,
        isOutdoorDropdown: false,
      };
    }

    case ON_ONPRESS_OUT_DOOR_DROPDOWN: {
      return {
        ...state,
        isOutdoorDropdown: !state.isOutdoorDropdown,
        isIndoorDropdown: false,
      };
    }

    case ON_ONPRESS_SWITCH_ON_ALL_OUT: {
      return {
        ...state,
        switchOutBoardSwitch: [true, true, true, true, true, true],
        isOutdoorDropdown: false,
      };
    }
    case ON_ONPRESS_SWITCH_OFF_ALL_OUT: {
      return {
        ...state,
        switchOutBoardSwitch: [false, false, false, false, false, false],
        isOutdoorDropdown: false,
      };
    }
    case ON_ONPRESS_SWITCH_OFF_ALL_IN: {
      return {
        ...state,
        switchBoardSwitch: [true, true, true, true, true, true],
        isIndoorDropdown: false,
      };
    }
    case ON_ONPRESS_SWITCH_ON_ALL_IN: {
      return {
        ...state,
        switchBoardSwitch: [false, false, false, false, false, false],
        isIndoorDropdown: false,
      };
    }

    default:
      return state;
  }
};
