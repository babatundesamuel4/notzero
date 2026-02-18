function greetUser() {
  let name = prompt("What is your name?");
  let birthYear = prompt("What year were you born?");
  let Sex = prompt("What is your Gender")

  let currentYear = new Date().getFullYear();
  let age = currentYear - Number(birthYear);

  alert("Hello " + name + "! You are a " + Sex + "! You are " + age + " years old.");
}
