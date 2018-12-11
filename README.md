# Assignment 2 - Vue app - Automated development process.

Name: Anqi Li

Student No.:  20082481

## Overview.

This vue app mainly has login, logout and manage cosmetics functions. There are totally four pages, including home page, manage page, edit cosmetic page and login page. Except the home page, user must be login before accepting other pages. In login page and edit cosmetic page, vue model will check the validations of filing form. Login component shows as long as users dose not login and logout component shows as long as users is in logging status. Manage cosmetic page will firstly check out the logging status of users.

## E2E Testing.

     $ npx cypress run --spec cypress/integration/cosmetics.cypress.spec.js
	 
	 ================================================================================


  (Run Starting)

  ┌──────────────────────────────────────
──────────────────────────────────────┐
  │ Cypress:  3.1.3
│
  │ Browser:  Electron 59 (headless)
│
  │ Specs:    1 found (cosmetics.cypress.spec.js)
│
  │ Searche…  cypress\integration\cosmetics.cypress.spec.js
 │
  └──────────────────────────────────────
──────────────────────────────────────┘


────────────────────────────────────────
────────────────────────────────────────



  Running: cosmetics.cypress.spec.js...                                (1 of 1)



  Manage Cosmetics page
    √ Shows a body (13164ms)
    √ Edits a cosmetic (11491ms)
    √ Shows error messages for incomplete form fields  (10697ms)
    √ Allows a cosmetic to be deleted (6942ms)
    √ Reject a cosmetic to be deleted (6674ms)


  5 passing (53s)


  (Results)

  ┌──────────────────────────────────────
───┐
  │ Tests:        5                         │
  │ Passing:      5                         │
  │ Failing:      0                         │
  │ Pending:      0                         │
  │ Skipped:      0                         │
  │ Screenshots:  0                         │
  │ Video:        true                      │
  │ Duration:     52 seconds                │
  │ Spec Ran:     cosmetics.cypress.spec.js │
  └──────────────────────────────────────
───┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  F:\AgileSoftwarePractice\cosmeticvue\cypress\videos\co
smetics.cypress.spec.js.mp4 (1 second)


================================================================================


  (Run Finished)


      Spec                                    Tests  Pass…  Fail…  Pend…  Ski
p…
  ┌──────────────────────────────────────
──────────────────────────────────────┐
  │ √ cosmetics.cypress.spec.js       00:52      5      5      -      -      -
 │
  └──────────────────────────────────────
──────────────────────────────────────┘
    All specs passed!                 00:52      5      5      -      -      -


## Continuous Integration.

 URL of the Travis build page for the Vue app,

https://travis-ci.org/SMARTBIGBOSS/cosmeticsSPA

## Automated Deployment.

 Specify the URL of the auto-deployed Vue app,

http://well-made-coal.surge.sh/

## Extra features.

I publish the cypress test result on cypress dashboard.

https://dashboard.cypress.io/#/projects/huj5ax/runs/1/specs

## Appendix.

     $ npx cypress run
	 
	 ================================================================================


  (Run Starting)

  ┌──────────────────────────────────────
──────────────────────────────────────┐
  │ Cypress:  3.1.3
│
  │ Browser:  Electron 59 (headless)
│
  │ Specs:    4 found (cosmetics.cypress.spec.js, home-page.cypress.spec.js, …
 │
  └──────────────────────────────────────
──────────────────────────────────────┘


────────────────────────────────────────
────────────────────────────────────────



  Running: cosmetics.cypress.spec.js...                                (1 of 4)



  Manage Cosmetics page
    √ Shows a body (10588ms)
    √ Edits a cosmetic (10005ms)
    √ Shows error messages for incomplete form fields  (7555ms)
    √ Allows a cosmetic to be deleted (6537ms)
    √ Reject a cosmetic to be deleted (6369ms)


  5 passing (44s)


  (Results)

  ┌──────────────────────────────────────
───┐
  │ Tests:        5                         │
  │ Passing:      5                         │
  │ Failing:      0                         │
  │ Pending:      0                         │
  │ Skipped:      0                         │
  │ Screenshots:  0                         │
  │ Video:        true                      │
  │ Duration:     44 seconds                │
  │ Spec Ran:     cosmetics.cypress.spec.js │
  └──────────────────────────────────────
───┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  F:\AgileSoftwarePractice\cosmeticvue-master\cypress\vi
deos\cosmetics.cypress.spec.js.mp4 (0 seconds)


────────────────────────────────────────
────────────────────────────────────────



  Running: home-page.cypress.spec.js...                                (2 of 4)



  Home page
    √ Shows a header (2920ms)
    √ Shows a body (1384ms)
    Navigation bar
      √ Shows the required links (718ms)


  3 passing (5s)


  (Results)

  ┌──────────────────────────────────────
───┐
  │ Tests:        3                         │
  │ Passing:      3                         │
  │ Failing:      0                         │
  │ Pending:      0                         │
  │ Skipped:      0                         │
  │ Screenshots:  0                         │
  │ Video:        true                      │
  │ Duration:     5 seconds                 │
  │ Spec Ran:     home-page.cypress.spec.js │
  └──────────────────────────────────────
───┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  F:\AgileSoftwarePractice\cosmeticvue-master\cypress\vi
deos\home-page.cypress.spec.js.mp4 (0 seconds)


────────────────────────────────────────
────────────────────────────────────────



  Running: login.cypress.spec.js...                                    (3 of 4)



  Login page
    √ Shows a body (2540ms)
    √ llows to login (5154ms)
    √ allows to login failed (4098ms)
    √ Shows error messages for incomplete form fields (2301ms)


  4 passing (15s)


  (Results)

  ┌─────────────────────────────────────┐

  │ Tests:        4                     │
  │ Passing:      4                     │
  │ Failing:      0                     │
  │ Pending:      0                     │
  │ Skipped:      0                     │
  │ Screenshots:  0                     │
  │ Video:        true                  │
  │ Duration:     14 seconds            │
  │ Spec Ran:     login.cypress.spec.js │
  └─────────────────────────────────────┘



  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  F:\AgileSoftwarePractice\cosmeticvue-master\cypress\vi
deos\login.cypress.spec.js.mp4 (0 seconds)


────────────────────────────────────────
────────────────────────────────────────



  Running: logout.cypress.spec.js...                                   (4 of 4)



  Logout dialog
    √ Comfirm to logout (6440ms)
    √ Cancel to logout (5923ms)


  2 passing (13s)


  (Results)

  ┌──────────────────────────────────────
┐
  │ Tests:        2                      │
  │ Passing:      2                      │
  │ Failing:      0                      │
  │ Pending:      0                      │
  │ Skipped:      0                      │
  │ Screenshots:  0                      │
  │ Video:        true                   │
  │ Duration:     12 seconds             │
  │ Spec Ran:     logout.cypress.spec.js │
  └──────────────────────────────────────
┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  F:\AgileSoftwarePractice\cosmeticvue-master\cypress\vi
deos\logout.cypress.spec.js.mp4 (1 second)


================================================================================


  (Run Finished)


      Spec                                    Tests  Pass…  Fail…  Pend…  Ski
p…
  ┌──────────────────────────────────────
──────────────────────────────────────┐
  │ √ cosmetics.cypress.spec.js       00:44      5      5      -      -      -
 │
  ├──────────────────────────────────────
──────────────────────────────────────┤
  │ √ home-page.cypress.spec.js       00:05      3      3      -      -      -
 │
  ├──────────────────────────────────────
──────────────────────────────────────┤
  │ √ login.cypress.spec.js           00:14      4      4      -      -      -
 │
  ├──────────────────────────────────────
──────────────────────────────────────┤
  │ √ logout.cypress.spec.js          00:12      2      2      -      -      -
 │
  └──────────────────────────────────────
──────────────────────────────────────┘
    All specs passed!                 01:17     14     14      -      -      -


