import React, { useEffect, useRef, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { IVehicleDetailProps, VehicleService } from "../../services";
import { vehicleActions } from "../../actions";
import { makeStyles } from "@mui/styles";
import { useAppDispatch, useAppSelector } from "../../utils/hook";

const useStyles = makeStyles({
  title: { textAlign: "center" },
  boxStyle: { padding: "20px", cursor: "pointer", margin: "20px 30px" },
  buttonStyle: { left: "30px" },
  errorMessage: { margin: "30px" },
});

const Vehicle: React.FC = () => {
  let navigate = useNavigate();
  const { state } = useLocation();
  const [dealerDetails, setDealerDetails] = useState<IVehicleDetailProps>({
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
  });
  const mountedRef = useRef(true);
  const { getDealerDetails } = VehicleService;
  const dealerDetailsFromStore = useAppSelector((state) => state.dealerDetails);
  const { getDealerDetailsSuccess, getDealerDetailsError } = vehicleActions;
  const dispatch = useAppDispatch();
  const dealerDetailsIsNotEmpty: boolean = dealerDetails.bac !== "";
  const classes = useStyles();

  useEffect(() => {
    async function fetchDealerDetails() {
      if (state) {
        // check if bac number is already in redux store
        if (dealerDetailsFromStore && dealerDetailsFromStore.bac === state) {
          setDealerDetails(dealerDetailsFromStore);
        } else {
          // if not, get it from backend
          try {
            const { status, data } = await getDealerDetails(state);
            if (!mountedRef.current) return null;
            if (status === 200) {
              dispatch(getDealerDetailsSuccess(data));
              setDealerDetails(data);
            }
          } catch (error: any) {
            dispatch(getDealerDetailsError(error.message));
          }
        }
      }
    }
    fetchDealerDetails();
    return () => {
      // cancel all subscriptions and asynchronous tasks to prevent memory leak
      mountedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dealerDetails]);

  return (
    <>
      {dealerDetails && dealerDetailsIsNotEmpty ? (
        <div>
          <h1 data-testid="vehicle-details-title" className={classes.title}>
            Dealer {dealerDetails.bac} Details
          </h1>
          <Box
            data-testid="vehicle-test"
            className={classes.boxStyle}
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
              border: 1,
              borderRadius: 4,
            }}
            noValidate
            autoComplete="off"
          >
            {Object.entries(dealerDetails)
              .filter(([key]) => {
                return ![
                  "_id",
                  "events",
                  "updatedAt",
                  "make",
                  "model",
                  "telemetryPnid",
                ].includes(key);
              })
              .map(([key, value]) => {
                return (
                  <TextField
                    key={key}
                    label={key}
                    variant="outlined"
                    value={value}
                  />
                );
              })}
          </Box>
          <Button
            className={classes.buttonStyle}
            variant="contained"
            onClick={() => navigate("/")}
          >
            Back
          </Button>
        </div>
      ) : (
        <>
          <h1 className={classes.errorMessage}>
            Internal Server Error, please try again. :(
          </h1>
          <Button
            className={classes.buttonStyle}
            variant="contained"
            onClick={() => navigate("/")}
          >
            Back
          </Button>
        </>
      )}
    </>
  );
};

export default Vehicle;
