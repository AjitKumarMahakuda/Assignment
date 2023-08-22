
let progress = 0;
const progressBar = document.querySelector('.progress');
const progressCount = document.querySelector('.progress-count');
const bottomSheet = document.querySelector('.bottom-sheet-container');
const startBtn = document.querySelector('.centered-button-inner');
const angleDown = document.querySelector('.angle-down');
const angleUp = document.querySelector('.angle-up');

const alertsuccess = document.getElementsByClassName("alertsuccess")[0];

function updateProgress() {
    if (progress < 100) {
        progress += 1;
        progressBar.style.width = `${progress}%`;
        progressCount.innerHTML = `${progress}%`;
       
    }else{
        alertsuccess.style.display = "block";
    }  
}


// Update progress every 100 milliseconds
function getStarted() {
    bottomSheet.style.display = 'block';
    startBtn.style.display = 'none';
    angleDown.style.display = 'block';
    setInterval(updateProgress, 100);
}

function toggleBtn() {
    const isVisible = bottomSheet.style.display;
    if (isVisible === 'block') {
        bottomSheet.style.display = 'none';
        angleUp.style.display = 'flex';
        angleDown.style.display = 'none';
    } else {
        bottomSheet.style.display = 'block';
        angleDown.style.display = 'flex';
        angleUp.style.display = 'none';
    }
}

// for close button of Alert message
var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function(){ div.style.display = "none"; }, 600);
    }
}
