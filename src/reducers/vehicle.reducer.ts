import {
  IVehicleProps,
  IVehicleDetailProps,
} from "./../services/vehicle.service";
import { vehicleActions } from "../actions/index";

export interface IVehicleState {
  dealers: IVehicleProps[];
  dealerDetails: IVehicleDetailProps;
  errorMessage?: string;
}

type ActionType = IVehicleState & { type: string };

const initialState: IVehicleState = {
  dealers: [],
  dealerDetails: {
    _id: "",
    bac: "",
    vin: "",
    ctpStatus: "",
    onstarStatus: "",
    events: [],
    createdAt: "",
    updatedAt: "",
    make: "",
    model: "",
    telemetryPnid: "",
    color: "",
    stockNumber: "",
    year: 0,
  },
  errorMessage: "",
};

const vehicleReducer = (state = initialState, action: ActionType) => {
  const {
    GET_LIST_OF_DEALERS_SUCCESS,
    GET_SINGLE_DEALER_DETAILS_SUCCESS,
    GET_LIST_OF_DEALERS_FAIL,
    GET_SINGLE_DEALER_DETAILS_FAIL,
  } = vehicleActions.vehicleConstants;

  const { dealers, dealerDetails, errorMessage } = action;

  switch (action.type) {
    case GET_LIST_OF_DEALERS_SUCCESS:
      return {
        ...state,
        dealers: dealers,
      };
    case GET_SINGLE_DEALER_DETAILS_SUCCESS:
      return {
        ...state,
        dealerDetails: dealerDetails,
      };
    case GET_LIST_OF_DEALERS_FAIL:
      return { ...state, errorMessage: errorMessage };
    case GET_SINGLE_DEALER_DETAILS_FAIL:
      return {
        ...state,
        errorMessage: errorMessage,
      };
    default:
      return state;
  }
};

export default vehicleReducer;
