/*
** GET THE INPUT €
** SELECT THE %
** GET THE #PEOPLE 
** DISPLAY THE TOTAL €
*/

//VARIABLES 
let inputBill; 
let euro;
let calculatedTotal;

//INPUT
inputBill = document.getElementById('inputBill');

//PROCESS
function calculateTip(percetage)
{     
      //GET EURO FROM USER
      euro = parseFloat(inputBill.value);

      if (euro !== '' && !isNaN(euro)) 
      { 
           
      }
      else
      {
            alert("Please enter a valid number"); 
            return false;
      }
      

      //SELECT EACH PERCENTAGE BUTTON AND ADD AN
      //EVENT LISTENER TO IT
      let percentButtons = document.getElementById('tip5');
      for (i = 0 ; i < percentButtons.length ;i++)
      {
            percentButtons[i].addEventListener('click', function()
            {
                  selectPercent(this.id);
            });
      }

      //CALL FUNCTION WITH DEFAULT VALUE WHEN PAGE LOADS
      selectPercent('default');
}

//FUNCTION THAT HANDLES THE LOGIC OF CALCULATION
function selectPercent()
{
      //REMOVE ALL ACTIVE CLASSES ON PERCENTAGE
      //BUTTONS THEN ADD 'active' TO THE SELECTED ONE
      for (i = 0 ; i < percentButtons.length ; i++)
      {
            percentButtons[i].classList.remove('active');
            percentButtons[i].classList.add('not-active');  
      }

      percentButtons[document.getElementById(id).dataset.index].classList.remove    
      ('not-active');

      percentButtons[document.getElementById(id).dataset.index].classList.add 
      ('active');

      //CALL CALCULATE TIP WITH THE SELECTED % VALUE
      calculateTipWithValue(document.getElementById(id).dataset.value);
}




//TESTE
function reset()
{
alert("Hello!")
}