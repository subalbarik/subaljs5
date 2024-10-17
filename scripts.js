
    let countdownTime = 600; 

    function formatTime(seconds) {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
 
    function startCountdown() {
        const timerElement = document.getElementById('timer');
        timerElement.textContent = formatTime(countdownTime);

        const countdownInterval = setInterval(() => {
            countdownTime--;

            timerElement.textContent = formatTime(countdownTime);

            if (countdownTime <= 0) {
                clearInterval(countdownInterval);
                timerElement.textContent = "00:00:00";
                alert("Time's up!");
            }
        }, 1000); 
    }

    window.onload = startCountdown;
