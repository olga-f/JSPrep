describe("Unit page users", () => {
    it("can click and go to the second exercise", () => {
      const user = cy;
      user
        .visit("/javascript-basics")
        .get(":nth-child(2) > span")
        .click()
        .location()
        .should((location) => {
          expect(location.pathname).to.eq("/javascript-basics/test-exercise-2");
        });
    });
  });