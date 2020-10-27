var expression = prompt("Comment Here", "Insert Comment Here");

if (expression === expression.toUpperCase()){
    console.log("Stop Shouting");
}

else if (expression === expression.toLowerCase()){
    console.log("Stop Whispering");
}

else console.log("Thanks for Speaking Normally");