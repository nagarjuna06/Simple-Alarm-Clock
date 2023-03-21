const time = document.querySelector('.time');
const alarmImg = document.querySelector('.alarm-img');
const ringtone = document.getElementById('ringtone');

let setAlarmTime = null;
const RingTheAlarm = () => {
    alarmImg.classList.replace('alarm-img', 'img-animation');
    ringtone.play()
}




const currentTime = () => {
    const date = new Date()
    let state = ''
    let hours = date.getHours()

    if (hours >= 12) {
        state = "PM"
    }
    else {
        state = 'AM'
    }
    hours = hours > 12 ? hours - 12 : hours
    hours = hours < 10 ? `0${hours}` : hours
    let minutes = date.getMinutes()
    minutes = minutes < 10 ? `0${minutes}` : minutes
    let seconds = date.getSeconds()
    seconds = seconds < 10 ? `0${seconds}` : seconds
    const Time = `${hours}:${minutes}:${seconds} ${state}`
    if (Time === setAlarmTime) {
        RingTheAlarm()
    }
    time.textContent = Time
}
setInterval(currentTime, 1000)

const hoursDropdown = document.getElementById('hours');
for (let i = 1; i <= 12; i++) {
    const option = document.createElement('option');
    const value = i < 10 ? `0${i}` : i
    option.textContent = value;
    option.value = value;
    hoursDropdown.appendChild(option)
}

const minutesDropdown = document.getElementById('minutes');
for (let i = 0; i <= 60; i++) {
    const option = document.createElement('option');
    const value = i < 10 ? `0${i}` : i
    option.textContent = value;
    option.value = value;
    minutesDropdown.appendChild(option)
}

const secondsDropdown = document.getElementById('seconds');
for (let i = 0; i <= 60; i++) {
    const option = document.createElement('option');
    const value = i < 10 ? `0${i}` : i
    option.textContent = value;
    option.value = value;
    secondsDropdown.appendChild(option)
}

const setAlarm = alarmTime => {
    const { hours, minutes, seconds, state } = alarmTime
    const alarmTimeString = `${hours}:${minutes}:${seconds} ${state}`;
    setAlarmTime = alarmTimeString
}



const form = document.querySelector('.form');
const getFormData = (e) => {
    e.preventDefault()
    const data = new FormData(e.target);
    const object = Object.fromEntries(data)
    if (setAlarmTime === null) {
        setAlarm(object)
        e.target.submit.textContent = 'CLEAR ALARM'
    }
    else {
        setAlarmTime = null
        e.target.reset()
        e.target.submit.textContent = 'SET ALARM'
        alarmImg.classList.replace('img-animation', 'alarm-img')
        ringtone.pause()
    }
}
form.addEventListener('submit', getFormData);