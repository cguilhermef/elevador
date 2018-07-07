$(document).ready(function() {
  console.log('pronto!');
  botoes();
});

var botoes = function() {
  $(document).on('click', 'button', function(e) {
    var key = e.target.innerText;
    switch(key) {
      case 'Limpa': {
        updateDisplay('Digite o valor', true);
        break;
      }
      case 'Confirma': {
        updateDisplay('^', true);
        break;
      }
      default: {
        updateDisplay(key);
        break;
      }
    }
  });
}

var updateDisplay = function(value, overwrite) {
  var display = $('.display')[0];

  if(overwrite) {
    display.innerText = value;
    return;
  }
  // console.log(display);
  // display.innerText = value;
  var current = display.innerText;
  if (isNaN(Number(current))) {
    display.innerText = value;
  } else {
    display.innerText = String(current) + String(value);
  }
}
