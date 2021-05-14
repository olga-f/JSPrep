import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { render, screen } from '@testing-library/react';

import { Units } from '../';
import { unitsMock } from '../../../../../mocks/home';

describe("<Units /> component", () => {
  it("renders units with links", async () => {
    render(<Units list={unitsMock.data.unitList} />);
    const links = await screen.findAllByRole("button", {
      name: /Begin unit/i,
    });
    expect(links[0]).toBeInTheDocument();
    expect(links[1]).toBeVisible();
    expect(links.length).toBe(2);
  });
});
