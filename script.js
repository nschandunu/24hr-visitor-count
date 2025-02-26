let visitorCount = localStorage.getItem('visitorCount') ? parseInt(localStorage.getItem('visitorCount')) : 0;
let startTime = localStorage.getItem('startTime') ? parseInt(localStorage.getItem('startTime')) : Date.now();

visitorCount++;
localStorage.setItem('visitorCount', visitorCount);

if (!localStorage.getItem('startTime')) {
    localStorage.setItem('startTime', startTime);
}

const twentyFourHours = 24 * 60 * 60 * 1000;

function checkReset() {
    const elapsed = Date.now() - startTime;
    if (elapsed >= twentyFourHours) {
        visitorCount = 0;
        localStorage.setItem('visitorCount', visitorCount);
        localStorage.setItem('startTime', Date.now());
    }
}

checkReset();

console.log(`Current visitor count: ${visitorCount}`);