import { test, expect, chromium, Page, request } from '@playwright/test';

   // declaring global variables
   let page: any
   let context: any

   test.beforeAll(async ({browser}) =>{
     // Create a new Page instance
     page = await browser.newPage(); 
     context = await request.newContext();
   })//end of before all

   //setup my test function which is similar to using @Test annotation in testNG
test('Get Notes From note taker API', async () => {
    //get existing note(s)
    const response = await context.get('https://fk-note-taker.herokuapp.com/api/notes', {
        headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache"
        }
      })//end of get
      expect(response.status()).toBe(200)
      //store the entire body into a variable
      const body = await response.json();
      //to print out the body, you must stringify it with JSON
      console.log("Full Response: " + JSON.stringify(body))
      /**to print out each value from an array of column, you must call the body with array index followed by the column name**/
      let firstNoteId = JSON.stringify(body[0].id)
      let secondNoteId = JSON.stringify(body[1].id)
      console.log("Note ID: " + firstNoteId + " second id " + secondNoteId)








      /*****************************************************************************/
      //create a new note
      const response2 = await context.post('https://fk-note-taker.herokuapp.com/api/notes/', {
        headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache"
        },
        data: {        
          "title": "Foreign",
          "text": "Hello! world"
        }
      })//end of post
      expect(response2.status()).toBe(200)
      const body2 = await response2.json();
      let createNoteId = JSON.stringify(body2.id).replace(/"/g, '')
      let createText = JSON.stringify(body2.text).replace(/"/g, '')
      let createTitle = JSON.stringify(body2.title).replace(/"/g, '')
      console.log("Full body: " + JSON.stringify(body2))
      console.log("Create Note ID: " + createNoteId)
      console.log("Create Note: Text " + createText)
      console.log("Create Note: title " + createTitle)








    /*****************************************************************************/
    //update the note 
   /*
    const response3 = await context.put('https://fk-note-taker.herokuapp.com/api/notes/' + createText, {
        headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache"
        },
        data: {        
            "title": "Updated Sumon 9 Tile",
            "text": "Hello Ali!"
        }
        })//end of put
        expect(response3.status()).toBe(200)
        const body3 = await response3.json();
        let editNoteTitle = JSON.stringify(body3.text)
        console.log("Updated Note Title: " + editNoteTitle)
       
    /*****************************************************************************/







    /*****************************************************************************/

    //delete a note
    const response4 = await context.delete('https://fk-note-taker.herokuapp.com/api/notes/'+createNoteId, {
        headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache"
        }
    })//end of delete request
    expect(response4.status()).toBe(200)
  /*
   await page.goto('https://fk-note-taker.herokuapp.com/notes')
   try{
      await page.locator("xpath=//*[text()='Sumon Note Tile 10 083123']").click({timeout: 5000})
   } catch(e) {
       console.log("Pass: Sumon Note Tile 10 083123 doesn't exist" )
   }

   */




    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    })// end of Test



















