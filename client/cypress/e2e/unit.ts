describe("Unit page users", () => {
  it("can click and go to the first exercise", () => {
    const user = cy;
    user
      .visit("/javascript-basics")
      .get(":nth-child(1) > a")
      .click()
      .wait(6000)
      .location()
      .should((location) => {
        expect(location.pathname).to.eq(
          "/javascript-basics/challenge-objects-evaluating-keys"
        );
      });
  });
});
