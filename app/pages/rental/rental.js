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
            
            if(hoursCounter == 24){
                hoursCounter = 0
                daysCounter += 1
            }
        } else{
            hoursCounter -= 1

            if(hoursCounter < 0){
                if(daysCounter > 0){
                    hoursCounter = 23
                    daysCounter -= 1
                } else {
                    hoursCounter = 0
                }
            }
        }
    }


    hoursSpan.textContent = hoursCounter
    daysSpan.textContent = daysCounter
}