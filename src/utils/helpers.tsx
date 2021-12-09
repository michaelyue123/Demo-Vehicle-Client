import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import vehicleReducer from "../reducers/vehicle.reducer";
import { configureStore } from "@reduxjs/toolkit";
import { IVehicleDetailProps, IVehicleProps } from "../services";

interface ITestProps {
  dealers: IVehicleProps[];
  dealerDetails: IVehicleDetailProps;
}

const preloadedStateSuccess: ITestProps = {
  dealers: [
    {
      bac: "122345",
      brand: "Cadillac",
      city: "Detriot",
      country: "US",
      name: "Cadillac Detriot",
      state: "WV",
    },
    {
      bac: "122346",
      brand: "Buick",
      city: "Detriot",
      country: "US",
      name: "Buick Detriot",
      state: "WV",
    },
  ],
  dealerDetails: {
    _id: "5ba47ea11e867b8c0ac40c9d",
    bac: "122345",
    vin: "VIN00000000000000",
    ctpStatus: "IN-SERVICE",
    onstarStatus: "ONS-116",
    events: [
      {
        _id: "5ba47ea11e867b8c0ac40c9e",
        eventDate: "2018-09-19T14:00:00.000+0000",
        eventType: "created",
      },
    ],
    createdAt: "2018-09-21T05:16:17.927+0000",
    updatedAt: "2018-10-09T02:50:29.624+0000",
    make: "Cadillac",
    model: "T",
    telemetryPnid: "67890",
    color: "Black",
    stockNumber: "12345",
    year: 2018,
  },
};

const preloadedStateFail: ITestProps = {
  dealers: [],
  dealerDetails: {
    _id: "",
    bac: "",
    vin: "",
    ctpStatus: "",
    onstarStatus: "",
    events: [
      {
        _id: "",
        eventDate: "",
        eventType: "",
      },
    ],
    createdAt: "",
    updatedAt: "",
    make: "",
    model: "",
    telemetryPnid: "",
    color: "",
    stockNumber: "",
    year: 0,
  },
};

// test utils file
export const renderWithReduxandRouter = (
  ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  isRenderSuccess: boolean,
  { route = "/" } = {},
  {
    store = configureStore({
      reducer: vehicleReducer,
      preloadedState: isRenderSuccess
        ? preloadedStateSuccess
        : preloadedStateFail,
    }),
  } = {}
) => {
  window.history.pushState({}, "Home page", route);
  return render(<Provider store={store}>{ui}</Provider>, {
    wrapper: BrowserRouter,
  });
};
