describe("Unit page users", () => {
  it("can click and go to the second exercise", () => {
    const user = cy;
    user
      .visit("/basics")
      .get(":nth-child(2) > .e7 > .b0.ai > .ek")
      .click()
      .wait(6000)
      .location()
      .should((location) => {
        // eslint-disable-next-line jest/valid-expect
        expect(location.pathname).to.eq(
          "/basics/what-will-be-the-output-of-the-code"
        );
      });
  });
});
