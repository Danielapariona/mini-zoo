var select = document.getElementById('select');
var images = document.querySelectorAll('img');
select.addEventListener('change', filter);

function filter(e) {
  var optionSelected = e.target.value;
  for (var i = 1; i < select.length; i++) {
    if (optionSelected === select[i].value) {
      //Agrega las classes
      for (var j = 0; j < images.length; j++) {
        images[j].classList.add(select[i].value);
      }
    } else {
      //Quita las clases que no sean iguales al que se encontro
      for (var j = 0; j < images.length; j++) {
        images[j].classList.remove(select[i].value);
      }
    }
  }
}