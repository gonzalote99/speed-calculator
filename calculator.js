function ValidateSpeedCalculatorForm(distance, time, speed) {
    _cmnRemoveAllErrorMessage();

    var validDistance = true, validTime = true, validSpeed = true;

    if( distance == '' || distance  <= 0) {
        _cmnShowErrorMessageBottomOfTheInputFiled('Distance', 'enter correct');
       validDistance = false;
    }
    if( time == '' || time  <= 0) {
        _cmnShowErrorMessageBottomOfTheInputFiled('Time', 'enter correct');
       validTime = false;
    }

    if(speed == '' || speed <= 0) {
        _cmnShowErrorMessageBottomOfTheInputFiled('Speed', 'enter correct');
      validSpeed  = false;
    }

    if(validDistance == true && validTime == true && validSpeed == true) {
        if(speed.toFixed(2) == (distance / time).toFixed(2)) {
            _cmnRemoveAllErrorMessage();
            return true;
        } else {
            _cmnShowErrorMessageBottomOfTheInputFiled('Speed', 'enter correct');
            _cmnShowErrorMessageBottomOfTheInputFiled('Time', 'enter correct');
            _cmnShowErrorMessageBottomOfTheInputFiled('Distance', 'enter correct');
        }
    } else if(validDistance == true && validSpeed == true || 
              validDistance == true && validTime == true || 
              validTime == true && validSpeed == true )

              {
                  _cmnRemoveAllErrorMessage();
                  return true;
              }


     return false;

}


function ResetSpeedCalculator() {
    if(confirm('want delete?')) {
        document.getElementById('Distance').value = '';
        document.getElementById('Time').value = '';
        document.getElementById('Speed').value = '';

        _cmnRemoveAllErrorMessage();

        _cmnHideElement('OutputResult');
        _cmnShowElement('OutputInfo', 'flex')
    }
}

function CalculateSpeed() {
    var distanceInputFiled = document.getElementById('Distance');
    var timeInputFiled = document.getElementById('Time');
    var speedInputFiled = document.getElementById('Speed');

    var showDistanceDiv = document.getElementById('ShowDistance');
    var showTimeDiv = document.getElementById('ShowTime');
    var showSpeedDiv = document.getElementById('ShowSpeed');

    var distance = Number(distanceInputFiled.value);
    var time = Number(timeInputFiled.value);
    var speed = Number(speedInputFiled.value);

    var calculatedSpeed, calculatedTime, calculatedDistance;


    if(ValidateSpeedCalculatorForm(distance, time, speed)) {
        showDistanceDiv.innerHTML = `Distance =` + distance  + `km`;
        showTimeDiv.innerHTML = ` Time =` + time + `h`;
        showSpeedDiv.innerHTML = `Speed =` + speed + `km/h`;

        if( distance == '') {
            calculatedDistance = speed * time;
            calculatedDistance = calculatedDistance.toFixed(2);

            distanceInputFiled.value = calculatedDistance;
            distanceInputFiled.focus();
            showDistanceDiv.innerHTML = `Distance =` + calculatedDistance + `km` 
        }
        else if (time == '') {
            calculatedTime = distance / speed
            calculatedTime = calculatedTime.toFixed(2);

            timeInputFiled.value = calculatedTime;
            timeInputFiled.focus();
            showTimeDiv.innerHTML = `Time =` + calculatedTime + `h` 
        } 
        else if ( speed == '') {
            calculatedSpeed = distance / time;
            calculatedSpeed = calculatedSpeed.toFixed(2);

            speedInputFiled.value = calculatedSpeed;
            speedInputFiled.focus();
            showSpeedDiv.innerHTML = `Speed =` + calculatedSpeed + `km/h` 
        } 


        _cmnHideElement('OutputInfo');
        _cmnShowElement('OutputResult', 'flex')
    }
}