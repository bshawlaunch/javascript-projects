function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    
    button.addEventListener("click", function() {
        paragraph.innerText = "Houston, we have liftoff!";
    })
    missionAbort.addEventListener("mouseover", function() {
        missionAbort.style.backgroundColor = "red";
    });

    missionAbort.addEventListener("mouseout", function() {
        missionAbort.style.backgroundColor = "";
    });
    missionAbort.addEventListener("click", function() {
        let confirmAbort = confirm("Are you sure you want to abort the mission?");
        if (confirmAbort) {
            paragraph.innerText = "Mission aborted! Space shuttle returning home";
        }
    })

}

window.addEventListener("load", init);
