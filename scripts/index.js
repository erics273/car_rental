"use strict"

/*
    - Basic Car Rental is $29.99 per day
    - There is a 30% surcharge if you are under 25
    - Option costs
        - Electric Toll Tag $3.95
        - GPS $2.95
        - Roadside Assistance $2.95
    - Data to display
        - Car rental cost
        - Options cost
        - under 25 surcharge cost
        - Total due
*/

window.onload = function(){

    let rentalForm = document.querySelector("#rentalForm");

    rentalForm.addEventListener("submit", calcCarRentalFees)

}

function calcCarRentalFees(event){
    //keep the form from submitting and refreshing the page
    event.preventDefault();

    //lets get the form from the event and assign to a variable
    let theForm = event.target

    //create a variable for the total car rental
    let totalCarRentalPrice = 29.99 * Number(theForm.numDays.value);

    //hande the option coasts
    let optionsCost = 0;
    if(theForm.tollTag.checked){
        optionsCost += 3.95;
        //the same as
        //optionCost = optionsCost + 3.95
    }

    if(theForm.gps.checked){
        optionsCost += 2.95;
        //the same as
        //optionCost = optionsCost + 2.95
    }

    if(theForm.rsa.checked){
        optionsCost += 2.95;
        //the same as
        //optionCost = optionsCost + 2.95
    }

    //handle the surchage for under25 (30% charge if under 25)
    let ageSurcharge = 0;
    if(theForm.under25.value === "yes"){

        ageSurcharge = totalCarRentalPrice * (30 / 100);

    }

    //add all the things to get the total
    let totalDue = totalCarRentalPrice + optionsCost + ageSurcharge;

    let message = `
        <div>Car Rental Cost: $${totalCarRentalPrice.toFixed(2)}</div>
        <div>Options Cost: $${optionsCost.toFixed(2)}</div>
        <div>Under 25 surcharge: $${ageSurcharge.toFixed(2)}</div>
        <div class="mt-3">Total Due: $${totalDue.toFixed(2)}</div>
    `;

    //put the message on the screen
    document.querySelector("#results").innerHTML =  message;

}