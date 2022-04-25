var btn = document.getElementById("btn") /* Declaring button variable */

/*https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector*/
var optionRadio1 = document.querySelectorAll('input[name="Q1"]')
var optionRadio2 = document.querySelectorAll('input[name="Q2"]')
var optionRadio3 = document.querySelectorAll('input[name="Q3"]')
var optionRadio4 = document.querySelectorAll('input[name="Q4"]')
var optionRadio5 = document.querySelectorAll('input[name="Q5"]')
var optionRadio6 = document.querySelectorAll('input[name="Q6"]')
var optionRadio7 = document.querySelectorAll('input[name="Q7"]')


while (btn.addEventListener("click", () => { /*Setting counters for each answer*/
  let aCounter = 0
  let bCounter = 0
  let cCounter = 0
  let dCounter = 0

/*Checking to see if radio buttons for Q1-7 has been clicked and adding to a counter of 1 for A,B,C or D*/
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

  for(radioButton2 of optionRadio2) {
    if (radioButton2.checked){
      if(radioButton2.value == "A") {
          aCounter++
        }
      else if (radioButton2.value == "B") {
          bCounter++
        }
      else if (radioButton2.value == "C") {
          cCounter++
        }
      else if (radioButton2.value == "D") {
          dCounter++
        }
     }
  }

  for(radioButton3 of optionRadio3) {
    if (radioButton3.checked){
      if(radioButton3.value == "A") {
          aCounter++
        }
      else if (radioButton3.value == "B") {
          bCounter++
        }
      else if (radioButton3.value == "C") {
          cCounter++
        }
      else if (radioButton3.value == "D") {
          dCounter++
        }
     }
  }

  for(radioButton4 of optionRadio4) {
    if (radioButton4.checked){
      if(radioButton4.value == "A") {
          aCounter++
        }
      else if (radioButton4.value == "B") {
          bCounter++
        }
      else if (radioButton4.value == "C") {
          cCounter++
        }
      else if (radioButton4.value == "D") {
          dCounter++
        }
     }
  }

  for(radioButton5 of optionRadio5) {
    if (radioButton5.checked){
      if(radioButton5.value == "A") {
          aCounter++
        }
      else if (radioButton5.value == "B") {
          bCounter++
        }
      else if (radioButton5.value == "C") {
          cCounter++
        }
      else if (radioButton5.value == "D") {
          dCounter++
        }
     }
  }

  for(radioButton6 of optionRadio6) {
    if (radioButton6.checked){
      if(radioButton6.value == "A") {
          aCounter++
        }
      else if (radioButton6.value == "B") {
          bCounter++
        }
      else if (radioButton6.value == "C") {
          cCounter++
        }
      else if (radioButton6.value == "D") {
          dCounter++
        }
     }
  }

  for(radioButton7 of optionRadio7) {
    if (radioButton7.checked){
      if(radioButton7.value == "A") {
          aCounter++
        }
      else if (radioButton7.value == "B") {
          bCounter++
        }
      else if (radioButton7.value == "C") {
          cCounter++
        }
      else if (radioButton7.value == "D") {
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
/* Checking to see for equal answers to redirect to tiebreaker question */
/*Comparing As with Bs, Cs and Ds*/
/*Counters are checked for a number of 1 or more and compared with the others. If both are true, user is redirected to tiebreaker*/
if (aCounter > 1 && aCounter == bCounter) {
  location.href = 'tie.html'}
  else if (aCounter > 1 && aCounter == cCounter) {
    location.href = 'tie.html'}
  else if (aCounter > 1 && aCounter == dCounter) {
    location.href = 'tie.html'}
/*Comparing Bs with Cs and Ds*/
if (bCounter > 1 && bCounter == cCounter) {
  location.href = 'tie.html'}
  else if (bCounter > 1 && bCounter == dCounter) {
    location.href = 'tie.html'}
/*Comparing Cs with Ds*/
if (cCounter > 1 && cCounter == cdCounter) {
  location.href = 'tie.html'}

}
));
