import {
  ON_PRESS_SIMPLE_TAB,
  ON_PRESS_CLOSE_ALERT,
  NITIFY_GENERAL_INFO,
  NITIFY_ON_CLOSE,
  ON_CLICK_MODAL_CARD,
  ON_CLOSE_MODAL,
} from "../actions/UIElementsAction";
import { uiTabsData } from "../Data/UIElementsData";

const initialState = {
  isTabExpend: [true, false, false],
  activeTabData: uiTabsData,
  wind: { index: 0, perent: 0 },
  alertData: [
    {
      variant: "info",
      iconClass: "fa fa-info-circle",
      message: "he system is running well",
      show: true,
    },
    {
      variant: "success",
      iconClass: "fa fa-check-circle",
      message: "Your settings have been succesfully saved",
      show: true,
    },
    {
      variant: "warning",
      iconClass: "fa fa-warning",
      message: "Warning, check your permission settings",
      show: true,
    },
    {
      variant: "danger",
      iconClass: "fa fa-times-circle",
      message: "Your account has been suspended",
      show: true,
    },
  ],
  notifyData1: [
    {
      type: "info",
      position: "bottom-right",
      dialogText: "this is General theme info",
      show: true,
    },
    {
      type: "success",
      position: "bottom-right",
      dialogText: "this is Success theme info",
      show: true,
    },
    {
      type: "warning",
      position: "bottom-right",
      dialogText: "this is Warning theme info",
      show: true,
    },
    {
      type: "error",
      position: "bottom-right",
      dialogText: "this is Error theme info",
      show: true,
    },
    {
      type: "info",
      position: "bottom-right",
      dialogText: "Hi I'm Here",
      show: true,
    },
    {
      type: "info",
      position: "bottom-left",
      dialogText: "Hi I'm Here",
      show: true,
    },
    {
      type: "info",
      position: "top-left",
      dialogText: "Hi I'm Here",
      show: true,
    },
    {
      type: "info",
      position: "top-right",
      dialogText: "Hi I'm Here",
      show: true,
    },

    {
      type: "info",
      position: "top-full-width",
      dialogText: "Hi I'm Here",
      show: true,
    },
    {
      type: "info",
      position: "bottom-full-width",
      dialogText: "Hi I'm Here",
      show: true,
    },
    {
      type: "info",
      position: "top-center",
      dialogText: "Hi I'm Here",
      show: true,
    },
    {
      type: "info",
      position: "bottom-center",
      dialogText: "Hi I'm Here",
      show: true,
    },
  ],
  notifyData: [],
  modalData: [
    {
      title: "Modal title",
      bodyText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan vitae eros sit amet  Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus. Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur nunc.",
      size: "",
      show: false,
    },
    {
      title: "Modal title",
      bodyText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan vitae eros sit amet  Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus. Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur nunc.",
      size: "lg",
      show: false,
    },
    {
      title: "Modal title",
      bodyText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan vitae eros sit amet  Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus. Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur nunc.",
      size: "sm",
      show: false,
    },
  ],
  modalCard: [
    {
      title: "Modal Default Size",
    },
    {
      title: "Modal Large Size",
    },
    {
      title: "Modal Small Size",
    },
  ],
  progressBarDefault: [
    {
      variant: "",
      value: 25,
    },
    {
      variant: "warning",
      value: 50,
    },
    {
      variant: "success",
      value: 60,
    },
    {
      variant: "danger",
      value: 10,
    },
  ],
  progressBarSizes: [
    {
      variant: "",
      value: 80,
      class: "progress progress-xs",
    },
    {
      variant: "warning",
      value: 10,
      class: "progress progress-sm",
    },
    {
      variant: "success",
      value: 70,
      class: "progress",
    },
    {
      variant: "danger",
      value: 60,
      class: "progress progress-lg",
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_PRESS_SIMPLE_TAB: {
      const tabExpends = [false, false, false];
      tabExpends[action.payload.index] = true;
      return {
        ...state,
        isTabExpend: [...tabExpends],
        wind: action.payload,
      };
    }

    case ON_PRESS_CLOSE_ALERT: {
      var AlertData = state.alertData;
      AlertData[action.payload].show = false;
      return {
        ...state,
        alertData: [...AlertData],
      };
    }

    case NITIFY_GENERAL_INFO: {
      var NotifyData = state.notifyData;
      NotifyData.push(state.notifyData1[action.payload]);
      return {
        ...state,
        notifyData: [...NotifyData],
      };
    }

    case NITIFY_ON_CLOSE:
      {
        var NotifyData1 = state.notifyData;
        NotifyData1.splice(action.payload, 1);
        return {
          ...state,
          notifyData: [...NotifyData1],
        };
      }
      break;

    case ON_CLICK_MODAL_CARD: {
      var modal = state.modalData;
      modal[action.payload].show = true;
      return {
        ...state,
        modalData: [...modal],
      };
    }

    case ON_CLOSE_MODAL: {
      var modalClose = state.modalData;
      modalClose[action.payload].show = false;
      return {
        ...state,
        modalData: [...modalClose],
      };
    }

    default:
      return state;
  }
};
