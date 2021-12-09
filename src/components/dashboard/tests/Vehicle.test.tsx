import { cleanup, screen, waitFor } from "@testing-library/react";
import { renderWithReduxandRouter } from "../../../utils/helpers";
import Vehicle from "../Vehicle";

describe("Vehicle Page", () => {
  let isRenderSuccess: boolean;
  beforeAll(() => {
    isRenderSuccess = true;
  });
  afterEach(cleanup);

  test("Should render vehicle page properly ", () => {
    renderWithReduxandRouter(<Vehicle />, isRenderSuccess);
    waitFor(() => {
      expect(screen.getByTestId("vehicle-details-title")).toBeInTheDocument();
      expect(screen.getByText(/Back/i)).toBeInTheDocument();
    });
  });

  test("Should fail to render when there is a server error", () => {
    isRenderSuccess = false;
    renderWithReduxandRouter(<Vehicle />, isRenderSuccess);
    waitFor(() =>
      expect(
        screen.getByText(/Internal Server Error, please try again. :(/i)
      ).toBeInTheDocument()
    );
  });
});
