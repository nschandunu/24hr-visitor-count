console.log("Script is running...");

// Check and initialize variables
let visitorCount = localStorage.getItem('visitorCount') ? parseInt(localStorage.getItem('visitorCount')) : 0;
let startTime = localStorage.getItem('startTime') ? parseInt(localStorage.getItem('startTime')) : Date.now();

console.log("Initial visitorCount:", visitorCount);
console.log("Initial startTime:", startTime);

// Increment and save count
visitorCount++;
localStorage.setItem('visitorCount', visitorCount);
console.log("After increment, visitorCount:", visitorCount);

// Set start time if not already set
if (!localStorage.getItem('startTime')) {
    localStorage.setItem('startTime', startTime);
    console.log("startTime set to:", startTime);
}

const twentyFourHours = 24 * 60 * 60 * 1000;

function checkReset() {
    const elapsed = Date.now() - startTime;
    console.log("Elapsed time (ms):", elapsed);
    if (elapsed >= twentyFourHours) {
        visitorCount = 0;
        localStorage.setItem('visitorCount', visitorCount);
        localStorage.setItem('startTime', Date.now());
        console.log("Reset triggered! New visitorCount:", visitorCount);
    }
}

checkReset();

console.log("Final visitorCount:", visitorCount);