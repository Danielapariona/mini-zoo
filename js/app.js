var select = document.getElementById('select');
var images = document.querySelectorAll('img');
select.addEventListener('change', filter);

function filter(e) {
  var optionSelected = e.target.value;

  if(optionSelected === 'original') {
    for (var i = 0; i < images.length; i++) {
      images[i].classList.remove('sepia', 'white-black', 'negative-color');
    }
  } else if (optionSelected === 'sepia') {
    for (var i = 0; i < images.length; i++) {
      images[i].classList.remove('white-black', 'negative-color');
      images[i].classList.add('sepia');
    }
  } else if (optionSelected === 'white-black') {
    for (var i = 0; i < images.length; i++) {
      images[i].classList.remove('sepia', 'negative-color');
      images[i].classList.add('white-black');
    }
  } else if (optionSelected === 'negative-color') {
    for (var i = 0; i < images.length; i++) {
      images[i].classList.remove('sepia', 'white-black');
      images[i].classList.add('negative-color');
    }
  }
}

