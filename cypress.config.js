const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '73r3pj',
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    "watchForFileChanges": false
    
    
    

   // setupNodeEvents(on, config) {
      // implement node event listeners here
     // baseUrl: "https://opensource-demo.orangehrmlive.com",
      
   // },
  },
});
