import {
  ON_PRESS_TAG_DROPDOWN,
  ON_PRESS_MORE_DROPDOWN,
  ON_PRESS_COMPOSE,
  ON_PRESS_ADD_EVENT,
  ON_PRESS_ADD_CONTACT,
} from "../actions/MailInboxAction";

const initialState = {
  isTagDropDown: false,
  isMoreDropDown: false,
  isInbox: true,
  isEventModal: false,
  isContactModal: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_PRESS_TAG_DROPDOWN: {
      return {
        ...state,
        isTagDropDown: !state.isTagDropDown,
        isMoreDropDown: false,
      };
    }

    case ON_PRESS_MORE_DROPDOWN: {
      return {
        ...state,
        isMoreDropDown: !state.isMoreDropDown,
        isTagDropDown: false,
      };
    }

    case ON_PRESS_COMPOSE: {
      return {
        ...state,
        isInbox: action.payload,
      };
    }

    case ON_PRESS_ADD_EVENT: {
      return {
        ...state,
        isEventModal: !state.isEventModal,
      };
    }

    case ON_PRESS_ADD_CONTACT: {
      return {
        ...state,
        isContactModal: !state.isContactModal,
      };
    }

    default:
      return state;
  }
};
