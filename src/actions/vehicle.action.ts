import { IVehicleProps, IVehicleDetailProps } from "../services";

// constants for getting list of dealers
const GET_LIST_OF_DEALERS_SUCCESS = "GET_LIST_OF_DEALERS_SUCCESS";
const GET_LIST_OF_DEALERS_FAIL = "GET_LIST_OF_DEALERS_FAIL";
// constants for getting details for single dealer
const GET_SINGLE_DEALER_DETAILS_SUCCESS = "GET_SINGLE_DEALER_DETAILS_SUCCESS";
const GET_SINGLE_DEALER_DETAILS_FAIL = "GET_SINGLE_DEALER_DETAILS_FAIL";

// actions for getting list of dealers
const getListOfDealersSuccess = (dealers: IVehicleProps[]) => ({
  type: GET_LIST_OF_DEALERS_SUCCESS,
  dealers: dealers,
});

const getListOfDealersError = (errorMessage: string) => ({
  type: GET_LIST_OF_DEALERS_FAIL,
  errorMessage: errorMessage,
});

// actions for getting details for single dealer
const getDealerDetailsSuccess = (dealerDetails: IVehicleDetailProps) => ({
  type: GET_SINGLE_DEALER_DETAILS_SUCCESS,
  dealerDetails: dealerDetails,
});

const getDealerDetailsError = (errorMessage: string) => ({
  type: GET_SINGLE_DEALER_DETAILS_FAIL,
  errorMessage: errorMessage,
});

const vehicleConstants = {
  GET_LIST_OF_DEALERS_SUCCESS,
  GET_LIST_OF_DEALERS_FAIL,
  GET_SINGLE_DEALER_DETAILS_SUCCESS,
  GET_SINGLE_DEALER_DETAILS_FAIL,
};

export const vehicleActions = {
  getListOfDealersSuccess,
  getListOfDealersError,
  getDealerDetailsSuccess,
  getDealerDetailsError,
  vehicleConstants,
};
