let newOp;

function writeToOutput(element) {
    newOp = false;
    document.getElementById('output').innerHTML += element
  
    // Altri modi per fare la STESSA IDENTICA COSA:
    // Primo modo:
    // document.getElementById('display').value = document.getElementById('display').value + stringa
  
    // Secondo modo:
    // let display = document.getElementById('display')
    // display = display + stringa
  }
  
  function showResults() {
    newOp = true;
    let result = eval(document.getElementById('output').innerHTML)
    console.log(result)
    console.log(typeof result)
  
    if (Number.isNaN(result) == true) {
      document.getElementById('output').innerHTML = 'ERROR'
    }
    else {
      document.getElementById('output').innerHTML = result
    }
  }
  
  function deleteOutput() {
    document.getElementById('output').innerHTML = '' // Stringa vuota
  }