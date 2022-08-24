let receptor = document.getElementById("receptor")

let welcomeEl = document.getElementById("welcome")

let saveEl = document.getElementById("save-el")

let count = 0


let name = "Cuu.j69 and this is my counter app"


let greeting = "Hi, my name is "

let myGreeting =  greeting + name 
console.log(myGreeting)

function increment(){
    count += 1
    receptor.textContent  = count
}


function decrement(){
    count -= 1
    receptor.textContent = count
}

function save(){
    // alert(count)
    let countStr = count + " - "
    saveEl.textContent += countStr
    receptor.textContent = 0
    count = 0


}


welcomeEl.innerHTML = myGreeting 

