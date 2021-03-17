//! This file will be responsible for combining the data we get from AttractionProvider.js with the html blueprint from Attraction.js to dynamically populate the DOM.

//* First we import our functions from our related modules.

import { Attraction, AttractionCard, AddBizarreItin } from './Attraction.js'
import { getBizarre, useBizarre } from './AttractionProvider.js'


//* Next we want to export a function, displayAttractions()

export const displayAttractions = () => {
    //* Since we want to first get the data and then use the data, we will first set a variable to an empty array

    let bizarreCollection = []

    //* We then invoke the getBizarre() function and use a .then() which contains an anonymous function that sets the value of the empty array bizarreCollection[] to the useBizarre() function.

    getBizarre().then(() => {
        bizarreCollection = useBizarre()
        console.log(bizarreCollection, "test")

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



export const displayAttractionCards = (id) => {

    //* Since we want to first get the data and then use the data, we will first set a variable to an empty array

    let bizarreCollection = []

    //* We then invoke the getBizarre() function and use a .then() which contains an anonymous function that sets the value of the empty array bizarreCollection[] to the useBizarre() function.

    getBizarre().then((response) => {
        bizarreCollection = useBizarre()
        console.log(bizarreCollection, "test")
        
        
        //* Following that function we want to run another .then() which contains another anonymous function which will finally populate the area of the DOM we want.
        
        
        // .then(() => {
            //* First we set a 'target' location for where we want this html to be inserted
            
            let foundBizarre = bizarreCollection.find(bizarre => bizarre.id === parseInt(id))
            console.log(foundBizarre, "foundBizarre")
            const target = document.querySelector(".bizarreDetail")
            //* Next we declare an empty variable to build up our dynamic html 
            let bizarreHTML = ""
            //* After that we use a for/of loop to say for every object(bizarreObject) of the array(bizarreCollection) we want to run a function.
            
            
            //* Here we pass an object from the array into the Attraction() function, which is our html blueprint function, and adds each item to the string bizarreHTML.
            bizarreHTML = AttractionCard(foundBizarre)
            
            //* Finally we want to return our string of html items and place them at the target location on the DOM.
            return target.innerHTML = bizarreHTML;
        })
}


export const addAttractionItinerary = (id) => {

    //* Since we want to first get the data and then use the data, we will first set a variable to an empty array

    let bizarreCollection = []

    //* We then invoke the getBizarre() function and use a .then() which contains an anonymous function that sets the value of the empty array bizarreCollection[] to the useBizarre() function.

    getBizarre().then((response) => {
        bizarreCollection = useBizarre()
        console.log(bizarreCollection, "test")
        
        
        //* Following that function we want to run another .then() which contains another anonymous function which will finally populate the area of the DOM we want.
        
        
        // .then(() => {
            //* First we set a 'target' location for where we want this html to be inserted
            
            let foundBizarre = bizarreCollection.find(bizarre => bizarre.id === parseInt(id))
            console.log(foundBizarre, "foundBizarre")
            const target = document.querySelector("#bizarreAside")
            //* Next we declare an empty variable to build up our dynamic html 
            let bizarreHTML = ""
            //* After that we use a for/of loop to say for every object(bizarreObject) of the array(bizarreCollection) we want to run a function.
            
            
            //* Here we pass an object from the array into the Attraction() function, which is our html blueprint function, and adds each item to the string bizarreHTML.
            bizarreHTML = AddBizarreItin(foundBizarre)
            
            //* Finally we want to return our string of html items and place them at the target location on the DOM.
            return target.innerHTML += bizarreHTML;
        })
}