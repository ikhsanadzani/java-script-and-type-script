var imageAddr = "speedometer/IMG_20260409_182409_894.jpg.jpeg"
var downloadSize = 7300000;

function LihatProgress(lp) {
    if(console) {
        if (typeof lp == "string") {
            console.log(lp);
        } else {
            for (var i = 0; i < lp.length; i++) {
                console.log(lp[i]);
            }
        }
    }
    var oProgress = document.getElementById("progress");
    if (oProgress) {
        var actualHTML = (typeof lp == "string") ? lp : lp.join("<br />");
        oProgress.innerHTML = actualHTML;
    }
}

function inisiasiDeteksi() {
    LihatProgress("sedang loading gambarnya");
    window.setTimeout(ukurKecepatanInternet, 1);
};

if (window.addEventListener) {
    window.addEventListener('load', inisiasiDeteksi, flase);
}  else if (window.attachEvent) {
    window.attachEvent('onload', inisiasiDeteksi);
}

function ukurKecepatanInternet() {
    var startTime, endTime;
    var download = new Image();
    download.onload = function () {
        endTime = (new Date()).getTime();
        showResults();
    }
    download.onerror = function (err, msg) {
        LihatProgress("gambar tidak valid, atau gagal download")
    }
    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr + cacheBuster;

    function showResults() {
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadSize * 8;
        var speedBps = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);
        ShowProgressMessage([
            "Your connection speed is:", 
            speedBps + " bps", 
            speedKbps + " kbps", 
            speedMbps + " Mbps"
        ]);
    }
}