let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homePoints = 0
let guestPoints = 0

function addOneHome() {
    homePoints += 1
    console.log(homeScore.textContent = homePoints)
}

function addTwoHome() {
    homePoints += 2
    console.log(homeScore.textContent = homePoints)
}

function addThreeHome() {
    homePoints += 3
    console.log(homeScore.textContent = homePoints)
}

function addOneGuest() {
    guestPoints += 1
    console.log(guestScore.textContent = guestPoints)
}

function addTwoGuest() {
    guestPoints += 2
    console.log(guestScore.textContent = guestPoints)
}

function addThreeGuest() {
    guestPoints += 3
    console.log(guestScore.textContent = guestPoints)
}