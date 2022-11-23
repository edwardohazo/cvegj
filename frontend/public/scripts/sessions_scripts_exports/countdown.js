function Countdown (id, limitDate, finalMessage) {
   const $countdown = document.getElementById(id);
   const countDownDate = new Date(limitDate).getTime();
   
   const countDownTempo = setInterval(() => {
        let now = new Date().getTime(),
        limitTime = countDownDate - now,
        days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
        hours = ("0" + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2), 
        minutes = ("0" + Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60))).slice(-2), 
        seconds = ("0" + Math.floor(limitTime % (1000 * 60) / (1000))).slice(-2);

        $countdown.innerHTML = `<h3>${days} days:${hours} hours:${minutes} minutes:${seconds} seconds</h3>`;

        if (limitTime <= 0) {
            $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
            clearInterval(countDownTempo);
        }
   }, 1000)
}



export default Countdown;



