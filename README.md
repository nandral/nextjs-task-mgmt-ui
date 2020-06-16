This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Description

Task management UI built using React, NextJS, semantic-ui-react, unstated.

This repo is the frontend for Task Management API available on repo https://github.com/nandral/nestjs-typeorm-task-mgmt

## About Task Management

### Sample deployment

Code has been deployed to Vercel and is available for testing https://nextjs-task-mgmt.vercel.app/

### Functional specs

Task management allows users to register, create tasks and manage them, major features are

- User SignUp & SignIn
- Create Tasks which are visible only to the logged in users
- New created tasks will be in OPEN status
- Update task status to IN_PROGRESS or DONE
- Delete tasks

### Technical methodologies followed

- React v16+, using Hooks like useState, useEffect along with Stateful Functional Components
- NextJS v9+ for server-rendering, automatic code splitting, React Fast Refresh
- [Unstated](https://github.com/jamiebuilds/unstated) for Simple state management
- Semantic UI React framework for theming, styling & prebuilt responsive React components
- [TestCafe](https://devexpress.github.io/testcafe/) to automate
  end-to-end web testing
  



## Running Dev server

```bash
npm run dev
```

Open [http://localhost:5000](http://localhost:5000) with your browser to see the result.

## _TestCafe_ end-to-end Tests

TestCafe provides an option of writing cross-browser functional tests in JavaScript. It's like write once and run on different browsers just by changing command.

I have tested this frontend on 3 browsers.

```bash
npm run test:chrome
npm run test:safari
npm run test:firefox

```
