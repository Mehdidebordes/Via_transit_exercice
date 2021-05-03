import StopT1 from './assets/T1.png';
import StopT2 from './assets/T2.png';
import StopT3 from './assets/T3.png';
import StopT4 from './assets/T4.png';

function Pos_Timer_stop(StopTime, Pos_tram) {
    if (Pos_tram === 0) {
        StopTime.setAttribute("class", "Stop_1");
    } else if (Pos_tram === 1) {
        StopTime.setAttribute("class", "Stop_2");
    } else if (Pos_tram === 2) {
        StopTime.setAttribute("class", "Stop_3");
    }
}

function Line_checker(stop) {
    // eslint-disable-next-line
    if (stop.line.id == 1)
    return (StopT1);
    // eslint-disable-next-line
    if (stop.line.id == 2)
    return (StopT2);
    // eslint-disable-next-line
    if (stop.line.id == 3)
    return (StopT3);
    // eslint-disable-next-line
    if (stop.line.id == 4)
    return (StopT4);
}

function Display_tram_timer(departure) {
    if (Number(departure.departure) > 120)
        return(Math.floor(Number(departure.departure) / 60) + " mins")
    else
        return("proche");
}

function Read_Json() {
    return (JSON.parse(JSON.stringify(require('./json/data.json'))));
}

window.onload = () => {
    let tram_index = 0;
    let tram_head_index = -1;
    let all_stop_index = 100;
    let Pos_tram = 0;
    const data = Read_Json();

    data.forEach(stop => {
        let Tram_Elem_Head = document.createElement("div");
        let Tram_Sign_Div = document.createElement("div");
        let Tram_img = document.createElement("img");
        let Tram_Sign = document.createElement("div");

        Tram_Elem_Head.setAttribute("id", tram_index);
        document.getElementById('zone').appendChild(Tram_Elem_Head);
        Tram_Sign_Div.setAttribute("id", tram_head_index);
        Tram_Sign_Div.setAttribute("class", "Tram_header");
        document.getElementById(tram_index).appendChild(Tram_Sign_Div);
        Tram_img.setAttribute("src", Line_checker(stop));
        document.getElementById(String(tram_head_index)).appendChild(Tram_img);
        Tram_Sign.appendChild(document.createTextNode("    " + stop.headsign.toUpperCase()));
        document.getElementById(String(tram_head_index)).appendChild(Tram_Sign);

        let Tram_timer = document.createElement("div");
        Tram_timer.setAttribute("id", all_stop_index);
        Tram_timer.setAttribute("class", "Tram_departure");
        document.getElementById('zone').appendChild(Tram_timer);
        
        stop.schedules.forEach(departure => {
            let StopTime = document.createElement("div");
            StopTime.appendChild(document.createTextNode(Display_tram_timer(departure)));
            Pos_Timer_stop(StopTime, Pos_tram);
            if (Display_tram_timer(departure) === "proche") {
                StopTime.setAttribute("style", "color: green;");
            }
            document.getElementById(String(all_stop_index)).appendChild(StopTime);
            Pos_tram += 1;
        })
        Pos_tram = 0;
        all_stop_index += 1;
        tram_index += 1;
        tram_head_index -= 1;
    });
}