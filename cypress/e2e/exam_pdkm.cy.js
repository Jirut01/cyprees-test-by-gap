describe("Exam", () => {
  var math = {
    pass: "+",
    minus: "-",
    multiply: "*",
    divide: "/",
    number: {
      one_num: "10",
      two_num: "2",
    },
  };
  it("Pass", () => {
    cy.visit("https://www.google.com/");
    cy.wait(2000);
    cy.get("#APjFqb").click().type("calculator").type("{enter}");
    cy.get("div.TIGsTb").click().type(math.number.one_num).type(math.pass);
    cy.get("div.TIGsTb").click().type(math.number.two_num).type("{enter}");
    cy.wait(5000);
  });

  it("Minus", () => {
    cy.visit("https://www.google.com/");
    cy.wait(2000);
    cy.get("#APjFqb").click().type("calculator").type("{enter}");
    cy.get("div.TIGsTb").click().type(math.number.one_num).type(math.minus);
    cy.get("div.TIGsTb").click().type(math.number.two_num).type("{enter}");
    cy.wait(5000);
  });

  it("Multiply", () => {
    cy.visit("https://www.google.com/");
    cy.wait(2000);
    cy.get("#APjFqb").click().type("calculator").type("{enter}");
    cy.get("div.TIGsTb").click().type(math.number.one_num).type(math.multiply);
    cy.get("div.TIGsTb").click().type(math.number.two_num).type("{enter}");
    cy.wait(5000);
  });

  it("Divide", () => {
    cy.visit("https://www.google.com/");
    cy.wait(2000);
    cy.get("#APjFqb").click().type("calculator").type("{enter}");
    cy.get("div.TIGsTb").click().type(math.number.one_num).type(math.divide);
    cy.get("div.TIGsTb").click().type(math.number.two_num).type("{enter}");
    cy.wait(5000);
  });
});
