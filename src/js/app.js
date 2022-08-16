document.querySelectorAll('div.b-item').forEach(function(Add) {
  console.log(document.querySelectorAll('div.b-item'));
  let elem = document.createElement("img");
  elem.setAttribute("src", "goblin.png");
});

function random(randoms) {
      var interval = setInterval(function() {
        ajax_form.querySelector('#result_form').textContent = `Изменения: ${result.name} приняты!`;
      }, 1);
      setTimeout(function() {
        clearInterval(interval);
        ajax_form.querySelector('#result_form').textContent = '';
      }, 5000); 
}
