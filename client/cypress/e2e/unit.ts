describe("Unit page users", () => {
  it("can click and go to the second exercise", () => {
    const user = cy;
    user
      .visit("/basics")
      .get(":nth-child(2) > a")
      .click()
      .wait(6000)
      .location()
      .should((location) => {
        expect(location.pathname).to.eq(
          "/basics/what-will-be-the-output-of-the-code"
        );
      });
  });
});
