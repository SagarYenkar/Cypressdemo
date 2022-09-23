describe('Fill all Details', ()=>{

    it('Complete Registration', () => {
       cy.viewport(1920,1080)

       cy.visit("http://seleniumpractise.blogspot.com/2022/02/sample-registration-form.html")

       cy.get("#fname").type("Sagar Yenkar")

       cy.xpath("//input[@id='email']").type("sagaryenkar123@gmail.com")

       cy.xpath("//input[@id='cname']").type("Sagar Yenkar")

       cy.xpath("//input[@id='adr']").type("Surat")

       cy.get("#ccnum").type("1111222233334444")

       cy.xpath("//input[@id='expmonth']").type("12")

       cy.xpath("//input[@id='zip']").type("394210")

       cy.xpath("//input[@id='expyear']").type("2025")

       cy.xpath("//input[@id='cvv']").type("123")

       cy.get("select[name='city']").select("Pune").find(":selected").contains("Pune") // Select DropDown Useing Text Value

       cy.get("select[name='city']").select("PN").find(":selected").contains("Pune")  // Select DropDown Useing Value 

       cy.get("select[name='city']").select(4).find(":selected").contains("Pune")  //Select DropDown Useing Index 

       cy.get("select[name='state']").select("TN")

       cy.get("select[name='Hobbies']").select(["Dance","Singing"]) // Multiple Selection Dropdown

       //cy.get("input[type='checkbox']").check({force:true})  // Select All checkbox 

       //cy.get("input[type='checkbox']").first().check().should("be.checked") // select 1st CheckBox

       cy.get("input[type='checkbox']").check("new").should("be.checked") // Select Checkbox by Value

       cy.get("input[type='radio']").check({force:true}) //select all Radio button
       
       cy.get("input[type='radio']").check("N").should("be.checked") // Select Radio BUtton by Value








    })




})