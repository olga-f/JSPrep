describe("Unit page users", () => {
  it("can click and go to the exercise", () => {
    const user = cy;
    user
      .visit("/functional-programming")
      .get("li")
      .findByRole("button", { name: /Solve/i })
      .click()
      .location()
      .should((location) => {
        // eslint-disable-next-line jest/valid-expect
        expect(location.pathname).to.eq(
          "/functional-programming/shopping-challenge"
        );
      });
  });
  it("can click and go to another unit", () => {
    const user = cy;
    user
      .visit("/functional-programming")
      .wait(1000)
      .get("ul")
      .findByText("Speaking JavaScript")
      .click()
      .location()
      .should((location) => {
        // eslint-disable-next-line jest/valid-expect
        expect(location.pathname).to.eq("/speaking-javascript");
      });
  });
});
