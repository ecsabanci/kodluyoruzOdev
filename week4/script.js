// datamizi tutalim
const data = {
    USD: {EUR: 0.82, GBP: 0.74, CHF: 0.89},
    EUR: {USD: 1.23, GBP: 0.91, CHF: 1.08},
    GBP: {USD: 1.35, EUR: 1.10, CHF: 1.18},
    CHF: {USD: 1.13, EUR: 0.92, GBP: 0.84}
};


const currencyKeys = Object.keys(data);


function createCurrencyElements(elements, root, inputName){
   
    for(let i =0; i< elements.length; i++){
      
        const currencyKeyDiv   = document.createElement("div");
       
        const currencyKeyInput = document.createElement("input");
        
        currencyKeyInput.setAttribute("type", "radio");
        
        currencyKeyInput.setAttribute("name", inputName);
       
        currencyKeyInput.setAttribute("id", inputName + elements[i]);
        
        currencyKeyInput.setAttribute("value", elements[i]);

        
        const currencyKeyLabel = document.createElement("label");
        
        currencyKeyLabel.setAttribute("for", inputName + elements[i]);
       
        currencyKeyLabel.textContent = elements[i];

        
        currencyKeyDiv.appendChild(currencyKeyInput);
        currencyKeyDiv.appendChild(currencyKeyLabel);

        
        root.appendChild(currencyKeyDiv);
    }
}


const parentEl = document.querySelector("#currency-box-from");
const fromInputName = "currency_from";
createCurrencyElements(currencyKeys, parentEl, fromInputName);


const parentToEl = document.querySelector("#currency-box-to");
const toInputName = "currency_to";
createCurrencyElements(currencyKeys, parentToEl, toInputName);


const calculateButton = document.querySelector("#calculate-button");

calculateButton.addEventListener("click", function(){
    
    let fromTarget = document.querySelector("input[name='currency_from']:checked");
    
    let toTarget   = document.querySelector("input[name='currency_to']:checked");
    
    const amount     = document.querySelector("input[name='amount']").value;

    const currencyResult = document.querySelector("#currency-result");


    if(fromTarget && toTarget){
        fromTarget = fromTarget.value;
        toTarget = toTarget.value;

        if(fromTarget === toTarget){

            currencyResult.innerHTML = " Please choose currencies different than each other...";
        
        
        } else if(isNaN(Number(amount))){
        
            currencyResult.innerHTML = "Please write a number for amount!!!";
        
        } else {
                
            const currentCurrencyObject = data[fromTarget];
            
            const resultForOne = currentCurrencyObject[toTarget];
            
            const result = amount * resultForOne;
                
                
            currencyResult.innerHTML = amount + " " + fromTarget + " = " + result + " " + toTarget;
        }
    }
    else {
        if(!fromTarget && !toTarget){
            currencyResult.innerHTML = "Please select both currencies!!!!"
        }

        else if(!fromTarget){
            currencyResult.innerHTML = "Please select FromTarget currency!!!!"
        }

        else if(!toTarget){
            currencyResult.innerHTML = "Please select ToTarget currency!!!!"
        }
        
    }




  


//     if(fromTarget === toTarget){

//         currencyResult.innerHTML = "Please choose currencies different than each other...";


//     } else if(isNaN(Number(amount))){

//         currencyResult.innerHTML = "Please write a number for amount!!!";

//     } 
//     // else if(checkFromTarget){

//     //     currencyResult.innerHTML = "You must choose two currencies...";

//     // } 
//     else {
        
//         const currentCurrencyObject = data[fromTarget];
    
//         const resultForOne = currentCurrencyObject[toTarget];
    
//         const result = amount * resultForOne;
        
        
//         currencyResult.innerHTML = amount + " " + fromTarget + " = " + result + " " + toTarget;
//     }

 });