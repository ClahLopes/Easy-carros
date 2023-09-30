let daysCounter = 0
let hoursCounter = 0
const daysSpan = document.getElementById('days')
const hoursSpan = document.getElementById('hours')

daysSpan.textContent = daysCounter
hoursSpan.textContent = hoursCounter

function updateCounter(counter, typeOfUpdate) {
    if(counter == 'days'){
        if(typeOfUpdate == 'increase'){
            daysCounter += 1
        } else{
            if(daysCounter > 0)
                daysCounter -= 1
        }

    }else{
        if(typeOfUpdate === 'increase'){
            hoursCounter += 1
        } else{
            if(hoursCounter > 0)
                hoursCounter -= 1
        }
    }


    hoursSpan.textContent = hoursCounter
    daysSpan.textContent = daysCounter
}