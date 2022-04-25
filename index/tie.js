var btn = document.getElementById("btn") /* Declaring button variable */

/*https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector*/
var optionRadio1 = document.querySelectorAll('input[name="Q1"]')
var optionRadio2 = document.querySelectorAll('input[name="Q2"]')
var optionRadio3 = document.querySelectorAll('input[name="Q3"]')
var optionRadio4 = document.querySelectorAll('input[name="Q4"]')
var optionRadio5 = document.querySelectorAll('input[name="Q5"]')
var optionRadio6 = document.querySelectorAll('input[name="Q6"]')
var optionRadio7 = document.querySelectorAll('input[name="Q7"]')

while (btn.addEventListener("click", () => {
  let aCounter = 0
  let bCounter = 0
  let cCounter = 0
  let dCounter = 0

  for(radioButton of optionRadio1) {
    if (radioButton.checked){
      if(radioButton.value == "A") {
          aCounter++
        }
      else if (radioButton.value == "B") {
          bCounter++
        }
      else if (radioButton.value == "C") {
          cCounter++
        }
      else if (radioButton.value == "D") {
          dCounter++
        }
     }
  }

  if (aCounter > bCounter) { /*Checking for majority As to redirect to Frodo result*/
  if (aCounter > cCounter) {
    if (aCounter > dCounter) {
      location.href = 'frodo.html'
      }
    }
  }

if (bCounter > aCounter) { /*Checking for majority Bs to redirect to Sam result*/
  if (bCounter > cCounter) {
    if (bCounter > dCounter) {
      location.href = 'sam.html'
    }
  }
}
if (cCounter > aCounter) { /*Checking for majority Bs to redirect to Merry result*/
  if (cCounter > bCounter) {
    if (cCounter > dCounter) {
      location.href = 'merry.html'
    }
  }
}
if (dCounter > aCounter) { /*Checking for majority Ds to redirect to Pippin result*/
  if (dCounter > bCounter) {
    if (dCounter > cCounter) {
      location.href = 'pippin.html'
    }
  }
}
}));