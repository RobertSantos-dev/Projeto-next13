import { render } from "@testing-library/react";

import Menu from "../components/Home/Menu";

describe('<Home/>', () => {
  jest.mock('next/navigation', () => ({
    useRouter: () => ({ push: jest.fn() })
  }));

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Testes sé rederizado a tela de Home', () => {
    render(
      <Menu
        icon="Star"
        name="Favorite"
        style="null"
        path="/favorites"
      />
    );
  })
});