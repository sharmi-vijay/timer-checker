const task=document.getElementById('task')
const description=document.getElementById('description')
const newRow = document.getElementById('tab')
const timerCont = document.getElementById('timer-cont')
const seconds = document.getElementById('seconds')
const minutes = document.getElementById('minutes')
const hours = document.getElementById('hours')

let intervalId

function startTimer(){
    if(timerCont.textContent == "Start")
    {
      let s=0
      let m=0
      let h=0
      intervalId = setInterval(function () {
        s++
        if(s>=60)
        {
          s=0
          m++
        }
        if(m >= 60)
        {
          m=0
          h++
        }
        seconds.textContent = s.toString().padStart(2, '0')
        minutes.textContent = m.toString().padStart(2, '0')
        hours.textContent = h.toString().padStart(2, '0')
      },75)
        
      timerCont.textContent = 'Stop'
      timerCont.style.setProperty('background-color', 'tomato')
    }
    else if(timerCont.textContent == 'Stop'){
        let hr 
        let min
        let sec   
        hr = hours.textContent
        min = minutes.textContent
        sec = seconds.textContent
        newRow.innerHTML+= 
        `<tr>
        <td>${task.value}</td>
        <td>${description.value}</td>
        <td>${hr}:${min}:${sec}</td>
        </tr>`
        task.value=''
        description.value=''
        clearInterval(intervalId) 
        seconds.textContent = '00'
        minutes.textContent = '00'
        hours.textContent = '00'
      timerCont.textContent = 'Start'
      timerCont.style.setProperty('background-color', 'rgb(69, 210, 69)')
    }
}

timerCont.addEventListener('click', startTimer)










