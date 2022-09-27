describe('Handle Auto suggestion', ()=>{

    it('Select Value from google auto suggestion', () => {
       
      cy.visit("https://www.google.com/")
      cy.get("input[name='q']").type("Tata Motor")
      cy.get("div[role='option']").each(function($ele,index,$list){

        ///cy.log($ele.text())

        if($ele.text().includes("tata motors share price today"))
        {
            cy.wrap($ele).click()
        
        }
        else
        {
            cy.log($ele.text())


        }
      })

     



    })




})