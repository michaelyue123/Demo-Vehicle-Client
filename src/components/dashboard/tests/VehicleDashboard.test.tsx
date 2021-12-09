import { cleanup, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithReduxandRouter } from "../../../utils/helpers";
import VehicleDashboard from "../VehicleDashboard";

describe("Vehicle Dashboard", () => {
  let isRenderSuccess: boolean;
  beforeAll(() => {
    isRenderSuccess = true;
  });
  afterEach(cleanup);

  test("Should navigate to a destination page upon clicking", () => {
    renderWithReduxandRouter(<VehicleDashboard />, isRenderSuccess);
    // simulate user-click event
    const leftClick = { button: 0 };
    userEvent.click(screen.getAllByText("View Details")[0], leftClick);
    waitFor(() =>
      expect(screen.findByTestId("vehicle-details-title")).toBeInTheDocument()
    );
  });

  test("Should fail to render when there is a server error", () => {
    isRenderSuccess = false;
    renderWithReduxandRouter(<VehicleDashboard />, isRenderSuccess);
    waitFor(() =>
      expect(
        screen.getByText(/Internal Server Error, please try again. :(/i)
      ).toBeInTheDocument()
    );
  });
});
