import React from 'react'

export default function Timer(props) {
    var hours='',minutes='',seconds='';
    var time =props.myList;
    if(Math.floor(time/3600)>0){
        if(Math.floor(time/3600)<10){
        hours='0'+Math.floor(time/3600)+':';
        }else{
        hours=Math.floor(time/3600)+':';
        }
    }else{
        hours='00:';
    }

    if(time%3600>=60){
        if(Math.floor((time%3600)/60)<10){
        minutes='0'+Math.floor((time%3600)/60)+':';
        }else{
        minutes=Math.floor((time%3600)/60)+':';
        }
    }else{
        minutes='00:';
    }
    
    if(time-(Math.floor(time/3600)*3600)-Math.floor((time%3600)/60)*60<60){
        if((time-(Math.floor(time/3600)*3600)-Math.floor((time%3600)/60)*60)<10){
        seconds='0'+(time-(Math.floor(time/3600)*3600)-Math.floor((time%3600)/60)*60);
        }else{
        seconds=time-(Math.floor(time/3600)*3600)-Math.floor((time%3600)/60)*60;
        }
    }else{
        seconds='00';
    }
    return (
        <div className="timer-display">
            <div className="time">
                <p>{hours}</p>
                <p>{minutes}</p>
                <p>{seconds}</p>
            </div>
            <div className="time-caption">
                <p>Hour</p>
                <p>Minute</p>
                <p>Second</p>
            </div>
        </div>
    )
}
