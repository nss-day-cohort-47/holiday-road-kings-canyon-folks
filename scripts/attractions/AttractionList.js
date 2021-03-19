//! This file will be responsible for combining the data we get from AttractionProvider.js with the html blueprints from Attraction.js to dynamically populate the DOM. We will also export a function that will return the value of the selected object so that it can be used to save the object to the json-server.

//* First we import our functions from our related modules.

import { Attraction, AttractionCard, AddBizarreItin, moreAttractionDetails } from './Attraction.js'
import { getBizarre, useBizarre } from './AttractionProvider.js'

//* This variable will store the selected object to be exported.
let foundBizarre = {}

//* Next we want to export a function, displayAttractions()

//! This function will display all attractions in the dropdown

export const displayAttractions = () => {
    //* Since we want to first get the data and then use the data, we will first set a variable to an empty array

    let bizarreCollection = []

    //* We then invoke the getBizarre() function and use a .then() which contains an anonymous function that sets the value of the empty array bizarreCollection[] to the useBizarre() function.

    getBizarre().then(() => {
        bizarreCollection = useBizarre()

    })

    //* Following that function we want to run another .then() which contains another anonymous function which will finally populate the area of the DOM we want.

    .then(() => {
        
        //* First we set a 'target' location for where we want this html to be inserted
        const target = document.querySelector("#bizarreDropdown")
        //* Next we declare an empty variable to build up our dynamic html 
        let bizarreHTML = ""
        //* After that we use a for/of loop to say for every object(bizarreObject) of the array(bizarreCollection) we want to run a function.
        for (const bizarreObject of bizarreCollection) {
            //* Here we pass an object from the array into the Attraction() function, which is our html blueprint function, and adds each item to the string bizarreHTML.
            bizarreHTML += Attraction(bizarreObject)
        }
        //* Finally we want to return our string of html items and place them at the target location on the DOM.
        return target.innerHTML += bizarreHTML;
    })
};


//! This function will display a single attraction tile in the bizarre attraction preview

export const displayAttractionCards = (id) => {

    //* Since we want to first get the data and then use the data, we will first set a variable to an empty array

    let bizarreCollection = []

    //* We then invoke the getBizarre() function and use a .then() which contains an anonymous function that sets the value of the empty array bizarreCollection[] to the useBizarre() function.

    getBizarre().then((response) => {
        bizarreCollection = useBizarre()
        
         
            
    //* Next we will declare a variable to be equal to one single object from bizarreCollection, which we get with the .find() method. In this statement we want to find an object which matches the id that we pass into the displayAttractionCards() function.    
    let foundBizarre = bizarreCollection.find(bizarre => bizarre.id === parseInt(id))
            //* here we target the area for the single tile to go
            const target = document.querySelector(".bizarreDetail")
            //* Next we declare an empty variable to build up our dynamic html 
            let bizarreHTML = ""
            //* Here we pass the single object we got from the .find() method into the AttractionCard() function, which then displays the single selected attraction, and save that value to the variable bizarreHTML.
            bizarreHTML = AttractionCard(foundBizarre)
            
            //* Finally we want to return our single item and place it at the target location on the DOM.
            return target.innerHTML = bizarreHTML;
        })
    }
    
//! This function will display more details about the selected attraction, this will be attached to a button and an event listener to populate a modal on button click.

export const displayMoreDetails = (id) => {

    //* Since we want to first get the data and then use the data, we will first set a variable to an empty array

    let bizarreCollection = []

    //* We then invoke the getBizarre() function and use a .then() which contains an anonymous function that sets the value of the empty array bizarreCollection[] to the useBizarre() function.

    getBizarre().then((response) => {
        bizarreCollection = useBizarre()
        
        //* Next we will declare a variable to be equal to one single object from bizarreCollection, which we get with the .find() method. In this statement we want to find an object which matches the id that we pass into the displayMoreDetails() function. 
        foundBizarre = bizarreCollection.find(bizarre => bizarre.id === parseInt(id))

        //* Here we target the modal that we want the more details to go
        const target = document.querySelector(".eateryDetailsTarget")
        //* Next we declare an empty variable to build up our dynamic html 
        let bizarreHTML = ""
        //* Here we pass the single object we got from the .find() method into the moreAttractionDetails() function, which then displays the details of the single selected attraction, and save that value to the variable bizarreHTML.
        bizarreHTML = moreAttractionDetails(foundBizarre)
            
        //* Finally we want to return our details and place it in the modal.
        return target.innerHTML = bizarreHTML;
     })
}

//! This function will add the selected attraction to the itinerary side bar, it will be attached to a button and event listener.

export const addAttractionItinerary = (id) => {

    //* Since we want to first get the data and then use the data, we will first set a variable to an empty array

    let bizarreCollection = []

    //* We then invoke the getBizarre() function and use a .then() which contains an anonymous function that sets the value of the empty array bizarreCollection[] to the useBizarre() function.

    getBizarre().then((response) => {
        bizarreCollection = useBizarre()

        //* Next we will declare a variable to be equal to one single object from bizarreCollection, which we get with the .find() method. In this statement we want to find an object which matches the id that we pass into the addAttractionItinerary() function.            
        foundBizarre = bizarreCollection.find(bizarre => bizarre.id === parseInt(id))
        //* Here we target the section in the side bar that we want to populate with html
        const target = document.querySelector("#bizarreAside")
        //* Next we declare an empty variable to build up our dynamic html 
        let bizarreHTML = ""
        //* Here we pass the single object we got from the .find() method into the AddBizarreItin() function, and save that value to the variable bizarreHTML.
        bizarreHTML = AddBizarreItin(foundBizarre)
            
        //* Finally we want to return our bizarreHTML code and place it into the DOM.
        return target.innerHTML = bizarreHTML;
    })
}

//! The following function is used to return the object data for saving to json-server.
export const bizarreObject = () => {
    return foundBizarre

}