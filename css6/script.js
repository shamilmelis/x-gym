

const getInfo = document.getElementById('getInfo');

getInfo.addEventListener('click', function() {
  const day = document.getElementById('day');
  const time = document.getElementById('time');
  const priory = document.getElementById('priory')
  const textArea = document.getElementById('textArea');
});
//данные getElementById(...).



const addInfo = [];




function myFunction() {
  console.log(addInfo);
  addInfo.push(day.value);
  addInfo.push(time.value);
  addInfo.push(priory.value);
  addInfo.push(textArea.value);
  document.getElementById("myForm").reset();
}
//функция push().


function myFunctional() {
  document.getElementById('response').innerHTML = (addInfo);
    addInfo.forEach(function(item, index, arr) {
    console.log(item);
  })
  response.style.backgroundColor = "yellow";
  response.style.borderRadius = "5px";
}

//функция которая выводит данные.