const stopWatch = document.getElementById("stopwatch")
        reset = document.getElementById("reset"),
        start = document.getElementById("start"),
        stops = document.getElementById("stop"),
        lap = document.getElementById("lap"),
        laps = document.getElementById("laps");
        let hr=0, min=0, sec=0, ms=0;
        let timeInterval;

        start.onclick=()=>{
            timeInterval = setInterval(()=>{
                ms++;
                if(ms==100){
                    sec++;
                    ms=0;
                }
                if(sec==60){
                    min++;
                    sec=0;
                }
                if(min==60){
                    hr++;
                    min=0;
                }
                stopWatch.innerHTML = `${zeroPad(hr)}:${zeroPad(min)}:${zeroPad(sec)}:${zeroPad(ms)}`
            },10)
            start.setAttribute("style","display:none");
            stops.setAttribute("style","display:block");
            lap.setAttribute("style","display:block");
            reset.setAttribute("style","display:none");
            lap.removeAttribute("disabled")
        };
        const zeroPad=(num)=>{
            return String(num).padStart(2, "0")
        }
        stops.onclick=()=>{
            console.log("stop")
            clearInterval(timeInterval);

            lap.setAttribute("style","display:none")
            reset.setAttribute("style","display:block")
            start.setAttribute("style","display:block")
            start.innerHTML= "Resume"
            stops.setAttribute("style","display:none")
        }
        reset.onclick=()=>{
            laps.innerHTML = "";
            hr=min=sec=ms=count = 0;
            clearInterval(timeInterval);
            stopWatch.innerHTML = "00:00:00:00"

            start.innerHTML = "Start"
            lap.setAttribute("style","display:block")
            lap.setAttribute("disabled",true)
            start.setAttribute("style","display:block")
            reset.setAttribute("style","display:none")
            stops.setAttribute("style","display:none")
        }
        let count=0;
        lap.onclick=()=>{
            count++;
            let li=document.createElement("li")
            li.innerHTML = `${"#" + count} - ${zeroPad(hr)}:${zeroPad(min)}:${zeroPad(sec)}:${zeroPad(ms)}`
            laps.appendChild(li)
            
        }