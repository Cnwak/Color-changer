//Time change background-color
// function changeColor() {
//   const timeNow = Date.now();

//   console.log(timeNow);

//   // const threeNumbers = Array.from(String(timeNow), Number);
//   const threeNumbers = timeNow.toString();

//   console.log(threeNumbers);

//   let r = threeNumbers.substr(10, 3);
//   console.log(r);

//   const body = document.querySelector('body');

//   if (r > 250) {
//     r = Math.floor(Math.random() * 250);
//   }

//   body.style.backgroundColor = `rgb(${r},${r},${r})`;
//   console.log(r);
// }

// changeColor();
function changeColor() {
  // ASSIGNED RANDOM NUMBERS BETWEEN 1 AND 250 TO VALUES
  const change = Math.floor(Math.random() * 250);
  const change1 = Math.floor(Math.random() * 250);
  const change2 = Math.floor(Math.random() * 250);

  // PLACED ASSIGNED VALUES INTO THE BODYS BACKGROUND-COLOR USING RGB FOMART
  const body = document.querySelector('body');
  body.style.backgroundColor = `rgb(${change},${change1},${change2})`;

  console.log(change);
  console.log(change1);
  console.log(change2);
}
// CALLED FUNCTION
changeColor();
