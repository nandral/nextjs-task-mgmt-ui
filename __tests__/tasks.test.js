import { Selector, ClientFunction } from "testcafe";
import moment from "moment";
import crypto from "crypto";
const getPageUrl = ClientFunction(() => window.location.href.toString());

fixture`Task tests`.page`http://localhost:5000`;

const taskTitle = `user1-task-${moment().format("DD/MM/YYYY_hh:mm:ss")}`;

test("Login & Create Task", async (t) => {
  await t
    .click("#login-button-navbar")
    .typeText("#username", "user1")
    .typeText("#password", "Test@1")
    .click("#login-button")
    .expect(getPageUrl())
    .contains("/")
    .typeText("#title", taskTitle)
    .typeText("#desc", "task1 description")
    .click("#create-task-submit")
    .expect(Selector("#title").innerText)
    .eql("");
});

test("Validate Created task", async (t) => {
  await t
    .click("#login-button-navbar")
    .typeText("#username", "user1")
    .typeText("#password", "Test@1")
    .click("#login-button")
    .expect(getPageUrl())
    .contains("/")
    .expect(Selector(".header").withText(taskTitle).innerText)
    .eql(taskTitle);
});

test("Anonymous User: Home page -> Signup -> Login -> Create Task", async (t) => {
  const username = `user-${crypto.randomBytes(4).toString("hex")}`;
  const password = "Test@123";
  const title = `${username}: task 1`;

  console.log("\n----- New User credentials -> username, password -----");
  console.log(username, password);
  console.log("------------------------------------------------------\n");

  await t
    .expect(getPageUrl())
    .contains("/")
    .click("#get-started")
    .expect(getPageUrl())
    .contains("/signup")
    .typeText("#username", username)
    .typeText("#password", password)
    .click("#signup-button")
    .expect(getPageUrl())
    .contains("/login")
    .typeText("#username", username)
    .typeText("#password", password)
    .click("#login-button")
    .expect(getPageUrl())
    .contains("/")
    .expect(Selector("#create-task").innerText)
    .eql("Create Task")
    .typeText("#title", title)
    .typeText("#desc", "task1 description")
    .click("#create-task-submit")
    .expect(Selector("#title").innerText)
    .eql("");
});
//
