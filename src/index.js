let name = prompt("What is your name?");
let age = prompt("How old are you?");
let email = prompt("Your Email address");
 {if (age < 12){
    alert(`Hi ${name}, you are ${age} years old and you are too young to register. Sorry 😔😔`);
} else if (age >= 12 && age < 18){
    alert(`Hi ${name}, you are ${age} years old and you have limited options to register for. We will keep in touch via your Email ${email} 👋👋.`);
} else if (age >= 18){
    alert(`Hi ${name}, you are ${age} years old and you can register for any option of your choosing. We will keep in touch via you Email ${email} 👋👋`);
} else {
    alert(`Please enter age.`)
}
}