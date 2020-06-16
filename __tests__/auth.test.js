import { Selector, ClientFunction } from "testcafe"; // first import testcafe selectors

const getPageUrl = ClientFunction(() => window.location.href.toString());

fixture`Auth tests`.page`https://nextjs-task-mgmt.vercel.app/login`; // declare the fixture // specify the start page

//then create a test and place your code there
test("Login - Success", async (t) => {
  await t
    .typeText("#username", "user1")
    .typeText("#password", "Test@1")
    .click("#login-button")

    //Assertions
    .expect(getPageUrl())
    .contains("/")
    .expect(Selector("#create-task").innerText)
    .eql("Create Task");
});

test("Login & Logout", async (t) => {
  await t
    .typeText("#username", "user1")
    .typeText("#password", "Test@1")
    .click("#login-button")
    .click("#logout-button")
    .expect(getPageUrl())
    .contains("/login");
});
