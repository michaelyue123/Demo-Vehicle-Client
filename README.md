# Demo-Vehicle

A simple React Application displays a list of dealers in a dashboard, including brand, bac, name, city, state and country. Each of the dealer item is clickable. When users click on one of the dealers, they get redirected to vehicle details' page. The vehicle details page shows bac, vin, ctpStatus and onstarStatus etc. <br><br>

## Table of Contents

- [Quick Start](#quick-start)
- [Unit Test](#unit-test)
- [File Structure](#file-structure)
- [Time Allocation](#time-allocation)
- [Resources](#resources)
- [Improvements](#improvements)

## Quick start

- Deployed Url: https://d3v9lx709o83s4.cloudfront.net 

- [Download from Github](https://github.com/michaelyue123/Accenture_Paginate_Cache/archive/main.zip)

- clone the repo: `https://github.com/michaelyue123/Demo-Vehicle-Client.git`

- Navigate to project folder
  `cd [project folder]`

- Install dependencies:
  `yarn`

- Start the server:
  `yarn start`

- Run the test:
  `yarn test`

- Create a production build:
  `yarn build`

- Views are on(default):
  `localhost:3000`

## Unit Test

React Testing Library is used in this section.

- `cd [project folder]`
- `yarn test`

click `a` to re-run all test cases

Test cases are listed below. <br><br>
![Unit Test](https://github.com/michaelyue123/Accenture_Paginate_Cache/blob/main/images/test_cases.png)

## Project Structure

```
Demo-Vehicle
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
├── yarn.lock
├── README.md
├── public
├── .circleci
│	└── config.yml
└── src
	├── actions
	│	├── vehicle.action.ts
	│	└── index.ts
	├── components
	│	├── dashboard
	│	│	├── Vehicle.tsx
	│	│	├── VehicleDashboard.tsx
	│	│	└── tests
  	│       │	  ├── Vehicle.test.tsx
	│	│	  └── VehicleDashboard.test.tsx
	│	├── errorPage
	│	│	└── NotFound.tsx
	│	├── App.test.tsx
	│	└── App.tsx
	├── reducers
	│	├── vehicle.reducer.ts
	│	└── index.ts
	├── services
	│	├── vehicle.service.ts
	│	└── index.ts
	├── store
	│	├── config.ts
 	│	├── helpers.tsx
        │	├── hook.ts
	│	└── store.ts
	├── setupTests.ts
	└── index.js
```

## Time Allocation

Total: 34 hours.

1. `Setup: 3 hours`

- Git repo
- ` Install React + Redux + material UI, and all dependencies`
- ` Install Enzyme + Enzyme-adapter-react-16 + Jest-enzyme for TypeScript`
- ` Postman API test`

3. `Structure Planing: 2 hours`

- Set up project structure

5. `CSS styling: 0.5 hours`

- Responsive to small, medium and large screen on 15-inch MacBook Pro

6. `Unit test: 3 hours`

- React Testing Library 

6. `CI/CD`: 10 hours

- Write config.yml file 
- Test CI/CD pipeline on CircleCI

7. `AWS S3 + AWS Cloudfront`: 1 hours

- Create S3 bucket + Cloudfront for both dev and prod branch

8. `README.md: 2.5 hour`

## Resources

- Material-UI, the world's most popular React UI framework. : <https://material-ui.com/>
- TypeScript, the strict syntactical superset of JavaScript: <https://www.typescriptlang.org/>
- React Hooks, add addtional features to functional components that let you use state and other React features without writing a class: <https://reactjs.org/docs/hooks-intro.html>
- CircleCI, a very popular continuous integration and continuous delivery tool. : <https://circleci.com/>
- AWS S3, a simple and robust storage service offered by AWS. 
- AWS Cloudfront, a content delivery network operated by AWS. 
