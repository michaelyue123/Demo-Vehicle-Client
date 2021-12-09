import { baseUrl } from "../utils/config";
import axios from "axios";

export interface IVehicleProps {
  bac: string;
  name: string;
  city: string;
  state: string;
  country: string;
  brand: string;
}
type EventType = {
  _id: string;
  eventDate: string;
  eventType: string;
};
export interface IVehicleDetailProps {
  _id: string;
  bac: string;
  vin: string;
  ctpStatus: string;
  onstarStatus: string;
  events: EventType[];
  createdAt: string;
  updatedAt: string;
  make: string;
  model: string;
  telemetryPnid: string;
  color: string;
  stockNumber: string;
  year: number;
}

const responseHeader = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const getListOfDealers = async (): Promise<{
  status: number;
  data: IVehicleProps[];
}> => {
  const url = `${baseUrl}/development/dealers`;
  const response = await axios.get(url, {
    headers: responseHeader,
  });
  return {
    status: response.status,
    data: response.data,
  };
};

const getDealerDetails = async (
  bac: string
): Promise<{ status: number; data: IVehicleDetailProps }> => {
  const url = `${baseUrl}/development/vehicles/${bac}`;
  const response = await axios.get(url, {
    headers: responseHeader,
  });
  return {
    status: response.status,
    data: response.data,
  };
};

export const VehicleService = {
  getListOfDealers,
  getDealerDetails,
};
