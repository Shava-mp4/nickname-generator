document.getElementById("randBtn").addEventListener("click", randNick);
document.getElementById("allBtn").addEventListener("click", allNick);

let nickOut = document.getElementById("output");

let nicknames = [
  '"The Scientist"',
  '"Crusher"',
  '"The Hawk"',
  '"The Cheif"',
  '"The Sloth"',
  '"The Jester"',
];

function randNick() {
  let firstName = document.getElementById("first").value;
  let lastName = document.getElementById("last").value;
  nickOut.innerHTML = `${firstName} ${
    nicknames[Math.floor(Math.random() * nicknames.length)]
  } ${lastName}`;
}

function allNick() {
  let firstName = document.getElementById("first").value;
  let lastName = document.getElementById("last").value;
  for (let i = 0; i < nicknames.length; i++) {
    nickOut.innerHTML += `${firstName} ${nicknames[i]} ${lastName} <br>`;
  }
}
