import { cleanup, screen } from "@testing-library/react";
import App from "./App";
import { renderWithReduxandRouter } from "../utils/helpers";

describe("Main Page", () => {
  let isRenderSuccess: boolean;
  beforeAll(() => {
    isRenderSuccess = true;
  });
  afterEach(cleanup);

  test("Should render main page properly ", () => {
    renderWithReduxandRouter(<App />, isRenderSuccess);
    expect(screen.getByText(/Vehicle Dashboard/i)).toBeInTheDocument();
  });

  test("Landing on a bad page", () => {
    renderWithReduxandRouter(<App />, isRenderSuccess, {
      route: "/something-that-does-not-match",
    });
    expect(screen.getByText(/Oops, an error occurred/i)).toBeInTheDocument();
  });
});
