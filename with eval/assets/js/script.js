let newOp;
let symbol;
let last;

function writeToOutput(element) {

  last = document.getElementById('output').innerHTML.charAt(document.getElementById('output').innerHTML.length - 1);

  if ( last !== '*' && last !== '/' && last !== '+' && last !== '-' ) {
    if (element == '*' || element == '/' || element == '+' || element == '-'){
      newOp = false
    }
        
    if (newOp == true) {
      document.getElementById('output').innerHTML = ''
      document.getElementById('output').innerHTML += element
      newOp = false
    }
    else {
      document.getElementById('output').innerHTML += element
    }
  }
  else {
    document.getElementById('output').innerHTML += ''
    console.log('errore')
  }

}
  



  
function showResults() {
    newOp = true;
    symbol = false;
    let result = eval(document.getElementById('output').innerHTML)
    console.log(result)
    console.log(typeof result)
    

  if (isNaN(result) == true) {
      document.getElementById('output').innerHTML = 'ERROR'
   }
   else {
      document.getElementById('output').innerHTML = result
  }
}
  
function deleteOutput() {
  document.getElementById('output').innerHTML = '' 
}

document.getElementById('output').innerHTML

