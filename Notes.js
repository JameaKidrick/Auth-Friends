// REGISTRATION
  // USER USERNAME AND PASSWORD WERE ADDED TO USERS ARRAY UPON REGISTRATION ***DONE***
  // GET RID OF ABILITY TO CREATE DUPLICATED ACCOUNTS BASED ON USERNAME ***DONE***
  // USER WILL BE TAKEN TO PERSONAL CREATE PROFILE PAGE AFTER REGISTERING
    // AFTER CREATING PROFILE, USER WILL BE TAKEN TO MYPROFILE PAGE
    //  REGISTRATION WILL NEED TO ADD A TOKEN ***DONE***
  // USER USERNAME IS SET TO ACTIVEUSER STATE ***DONE***

// LOGIN
  // MAKE DYNAMIC
    // WILL SEARCH ARRAY FOR MATCHING DATA => NO MATCH = ERROR ***DONE***
  // USER CAN NOT LOG IN AGAIN WITHOUT LOGGING OUT ***DONE***
  // USER WILL BE LOGGED OUT BY CLICKING 'LOG OUT' LINK ***DONE***
    // ADD WINDOW ALERT THAT USER WILL BE LOGGED OUT WHEN TRYING TO EXIT SITE??? (KIND OF ANNOYING)
  // USER WILL BE TAKEN TO PERSONAL PROFILE AFTER LOGGING IN ***DONE***
    // TEMPORARILY ADD 'WELCOME, <INSERT USERNAME>' TO MAKE SURE PROFILE IS TRULY UNIQUE ***DONE***
  // SHOW 403 ERROR MESSAGE ***DONE***
  // CHECK WHETHER OR NOT ACTIVEUSER STORE PERSISTED (localhost:5000/activeUser) ***DONE***
  // GET INFORMATION OF ACTIVEUSER SO USERNAME SHOWS ON SCREEN ***DONE***
  // USER USERNAME IS SET TO ACTIVEUSER STATE ***DONE***

// LOGOUT
  // ACTIVEUSER SHOULD BE EMPTIED ***DONE***

// UNIQUE IDENTITIES
  // UPON REGISTERING, USER WILL BE GIVEN A UNIQUE ID (1 TO 500,000) <= LOOK INTO LATER

// LOGIN/LOGOUT
  // LOGIN LINK DISAPPEARS WHEN TOKEN IS PRESENT ***DONE***
  // LOGOUT LINK DISAPPEARS WHEN TOKEN IS NOT PRESENT ***DONE***

// PAGE/FORM STRUCTURE
  // SEPARATE ALL FORMS AND PAGES *** DONE ***

// REFACTOR CODE
  // CODE WILL RELY ON REDUX TO STORE CURRENT LOGGED IN USER SO USER WILL NOT BE ABLE TO GET INTO OTHER USERS' PROFILES THROUGH URL ***DONE***
  // AS SOON AS USER IS LOGGED IN, THEIR DATA IS ADDED TO THE ACTIVEUSER ARRAY ***DONE***
// SERVER
  // CHANGE COMMENTS ***DONE***

// MY PROFILE
  // IF LINK IS CLICKED, ACTIVE USER ID IS CHECKED AND THE ID IS INSERTED INTO URL???
    // THIS DEPENDS ON HOW THE USERPROFILE ROUTE WORKS, THERE MAY BE A WAY TO REMOVE THE ID FROM THE URL

// CREATE MY PROFILE
  // USER WILL BE ABLE TO CHOOSE BETWEEN ~20 AVATARS (REQUIRED) ***DONE***
  // DOB WILL BE CHOSEN USING A CALENDER AND/OR DATE INPUT (REQUIRED) ***DONE***
    // USER WILL NOT BE ABLE TO REDO BIRTHDAY; THEY WILL ONLY BE ALLOWED TO CHANGE FORMAT
    // STRETCH: USER WILL BE ABLE TO CHOOSE BETWEEN FULL DATE (MM/DD/YYYY), PARTIAL DATE (MM/YYYY OR MM), OR NONE ***DONE***
  // LOCATION - TEXT INPUT (OPTIONAL)
  // ABOUT YOU - TEXT INPUT (OPTIONAL)
  // 20 QUESTIONS/RADIO BUTTONS (5 REQUIRED)
    // 1. What is the most impressive thing you know how to do?
    // 2. What game or movie universe would you most like to live in?
    // 3. What is something you think everyone should do at least once in their lives?
    // 4. What’s the title of the current chapter of your life?
    // 5. What makes a good life?
    // 6. What would be your first question after waking up from being cryogenically frozen for 100 years?
    // 7. What hobby would you get into if time and money weren’t an issue?
    // 8. What could you give a 40-minute presentation on with absolutely no preparation?
    // 9. Why did you decide to do the work you are doing now?
    // 10. What was the best book or series that you’ve ever read?
    // 11. What are you looking forward to in the coming months?
    // 12. What are some small things that make your day better?
    // 13. Where would you spend all your time if you could?
    // 14. What pets did you have while you were growing up?
    // 15. What would be the most amazing adventure to go on?
    // 16. What’s something you like to do the old-fashioned way?
    // 17. Who has impressed you most with what they’ve accomplished?
    // 18. What fad or trend do you hope comes back?
    // 19. What’s the best single day on the calendar?
    // 20. What website do you visit most often?

  // CHECKBOXES (1 REQUIRED)
    // FAVORITE LANGUAGES:
      // Agda
      // BF
      // C
      // Clojure
      // CoffeeScript
      // Coq
      // C++
      // Crystal
      // C#
      // Dart
      // Elixir
      // Elm
      // Erlang
      // Factor
      // Forth
      // Fortran
      // F#
      // Go
      // Groovy
      // Haskell
      // Idris
      // Java
      // JavaScript
      // Julia
      // Kotlin
      // Lua
      // NASM
      // Nim
      // Objective-C
      // OCaml
      // PHP
      // PowerShell
      // PurScript
      // Python
      // R
      // Racket
      // Reason
      // Ruby
      // Rust
      // Scala
      // Shell
      // Solidarity
      // SQL
      // Swift
      // TypeScript
      // VB
    
    // FIX LINKS BETWEEN CREATEMYPROFILE (CMP) PAGES
    // FIX LINK TO CMP PAGE FROM REGISTER PAGE
      // ADD ID AFTER 'REGISTER/' (???)
      // IF SOMEONE TRIES TO USE URL TO REACH CMP PAGE USE THE FOLLOWING LOGIC:
        // IF AVATAR(OR ANY OTHER FIELD).LENGTH !== 0 > ROUTE TO EDITMYPROFILE (EMP) PAGE
    // ADDING INFORMATION TO DATA ON SERVER:
      // HANDLESUBMIT IN FORM WITH AXIOS POST
    // FIX HOW ACTIVE USER IS RETRIEVED FOR THE CREATE PROFILE PAGE ***DONE***
    // FIX HOW PUT REQUEST SENDS INFORMATION TO ACTIVE USER ***DONE***
    // OVERALL, NEED TO GET INDIVIDUAL INFORMATION FOR MYPROFILE PAGE ***DONE***


    /****************** LEFT OFF ******************/
    // ADD VALIDATION TO CMP 1
    /****************** LEFT OFF ******************/


// ACTIONS
  // DEFINE BETTER
    // FOR EXAMPLE, REGISTRATION HAS FETCH_FAILURE. THIS MAY CAUSE AN ISSUE FOR THE LOGGEDIN STATE. IF SO, CHANGE FETCH_FAILURE TO REGISTRATION_FAILURE AND SET ITS OWN STATE

// FORMS
  // ADD FORMIK AND YUP VALIDATION ***DONE***
    // ADD USESELECTOR TO PAGES... NOT FORMS ***DONE***

// LOADERS
  // STYLE LOADERS
