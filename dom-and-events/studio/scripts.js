// Write your JavaScript code here.
// Remember to pay attention to page loading!


window.addEventListener("load", function() {
    let takeOff = document.getElementById("takeoff");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let landing = document.getElementById("landing");
    let missionAbort = document.getElementById("missionAbort");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let rocket = document.querySelector("img")

    takeOff.addEventListener("click", function() {
        let launchConfirmation = confirm("Confirm that the shuttle is ready for takeoff."); 
            if(launchConfirmation) {
                flightStatus.textContent = "Shuttle in flight.";
                shuttleBackground.style.backgroundColor = "blue";
                spaceShuttleHeight.textContent = "10000";
            }
        }
    )
    landing.addEventListener("click", function() {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.textContent = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.textContent = "0";
    })
    missionAbort.addEventListener("click", function() {
        
        let abortConfirmation = confirm("Confirm abort."); 
        if(abortConfirmation) {
            flightStatus.textContent = "Flight aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.textContent = "0";
        }
    })
    up.addEventListener("click", function() {
        rocket.style.position = "relative"
    })

    down.addEventListener("click", function() {
        rocket.style.bottom = "-50px";

    })
    left.addEventListener("click", function() {
        rocket.style.position = "absolute"
    })
    right.addEventListener("click", function() {
        rocket.style.position = "absolute"
    })

})



