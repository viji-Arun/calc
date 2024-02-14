let result = document.querySelector('.result'); // Change to querySelector('.result')
let nums = document.querySelectorAll('li');

for (let i = 0; i < nums.length; i++) {
  nums[i].addEventListener('click', function() {
    let getvalue = result.value;

    if (nums[i].innerHTML === "=") {
      result.value = eval(result.value);
    } else {
      if (nums[i].innerHTML === "C" || nums[i].innerHTML === "CE") {
        result.value = "";
      } else if (nums[i].innerHTML === "DEL") { // Corrected to uppercase "DEL"
        result.value = getvalue.slice(0, -1);
      } else {
        result.value += nums[i].innerHTML;
      }
    }
  });
}
