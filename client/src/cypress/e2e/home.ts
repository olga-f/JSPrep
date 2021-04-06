describe("Home page users", () => {
  it("can click and go to the first unit", () => {
    const user = cy;
    user
      .visit("/")
      .get(":nth-child(1) > a")
      .click()
      .location()
      .should((location) => {
        expect(location.pathname).to.eq("/javascript-basics");
      });
  });
});