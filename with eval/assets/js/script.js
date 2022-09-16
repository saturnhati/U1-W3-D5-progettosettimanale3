let newOp;

function writeToOutput(element) {
  if (element == '*' || element == '/' || element == '+' || element == '-'){
    newOp = false
  }
  
  if (newOp == true) {
    document.getElementById('output').innerHTML = ''
    document.getElementById('output').innerHTML += element
    newOp = false
    console.log('ciao')
  }
  else {
    document.getElementById('output').innerHTML += element
  }
}
  
  function showResults() {
    newOp = true;
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