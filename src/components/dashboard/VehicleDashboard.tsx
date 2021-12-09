import React, { useEffect, useState, useRef } from "react";
import { Box, Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router";
import { IVehicleProps, VehicleService } from "../../services";
import { useAppDispatch, useAppSelector } from "../../utils/hook";
import { vehicleActions } from "../../actions";

const useStyles = makeStyles({
  root: { padding: "5px 20px auto 20px" },
  boxStyle: {
    padding: "10px",
    cursor: "pointer",
    margin: "20px 30px ",
  },
  title: { textAlign: "center" },
  errorMessage: { margin: "30px" },
});

const VehicleDashboard: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const dealersFromStore = useAppSelector((state) => state.dealers);
  const { getListOfDealers } = VehicleService;
  const [dealers, setDealers] = useState<IVehicleProps[]>([]);
  const { getListOfDealersSuccess, getListOfDealersError } = vehicleActions;
  const mountedRef = useRef(true);
  const dealersNotEmpty: boolean = dealers.length !== 0;
  const dealersFromStoreNotEmpty = dealersFromStore.length !== 0;

  useEffect(() => {
    async function fetchDealers() {
      // retrieve dealers from redux store if available
      if (dealersFromStore && dealersFromStoreNotEmpty) {
        setDealers(dealersFromStore);
      } else {
        try {
          // if not, make api call, reduce the number of api call to backend
          const { status, data } = await getListOfDealers();
          if (!mountedRef.current) return null;
          if (status === 200) {
            dispatch(getListOfDealersSuccess(data));
            setDealers(data);
          }
        } catch (error: any) {
          dispatch(getListOfDealersError(error.message));
        }
      }
    }
    fetchDealers();
    return () => {
      // cancel all subscriptions and asynchronous tasks to prevent memory leak
      mountedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dealers]);

  return (
    <>
      {dealers && dealersNotEmpty ? (
        <div className={classes.root}>
          <h1 className={classes.title}>Vehicle Dashboard</h1>
          {dealers &&
            dealers.map((dealer: IVehicleProps, index: number) => {
              return (
                <Box
                  data-testid="vehicle-test"
                  className={classes.boxStyle}
                  key={index}
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1 },
                    border: 1,
                    borderRadius: 4,
                  }}
                  noValidate
                  autoComplete="off"
                >
                  {Object.entries(dealer).map(([key, value]) => {
                    return (
                      <TextField
                        key={key}
                        label={key}
                        variant="outlined"
                        value={value}
                      />
                    );
                  })}
                  <Button
                    variant="contained"
                    onClick={() => navigate("/vehicle", { state: dealer.bac })}
                  >
                    View Details
                  </Button>
                </Box>
              );
            })}
        </div>
      ) : (
        <h1 className={classes.errorMessage}>
          Internal Server Error, please try again. :(
        </h1>
      )}
    </>
  );
};

export default VehicleDashboard;
