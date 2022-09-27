describe('Handle Bootstrap Dropdown', ()=>{

    it('Select Value', () => {
       
      cy.visit("http://seleniumpractise.blogspot.com/2016/08/bootstrap-dropdown-example-for-selenium.html")

      cy.get("#menu1").click()

      cy.get("a[role='menuitem']").each(function($ele,index,list)
      {
         //cy.log($ele.text())
         if ($ele.text() === 'JavaScript'){

            cy.log("Found Element")
            cy.wrap($ele).click()
            cy.title().should("include", "Automation ")
             
        }

         else{
            cy.log("Current Value",$ele.text())


         }

      })



    })




})