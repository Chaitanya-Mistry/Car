let audio = document.createElement('audio');
audio.setAttribute('src', 'Sound.mp3');

// Grabbing the elements
let start = document.getElementById('start');
let sun = document.getElementById('Sun_Image');
let leftWheel = document.getElementById('LeftTire');
let rightWheel = document.getElementById('RightTire');
let car = document.getElementsByClassName('car')[0];
let sky = document.getElementsByClassName('sky')[0];
let track = document.getElementsByClassName('Track')[0];

// When user click on Start Button 

start.addEventListener('click', () => {

    if (start.innerText == "Start") 
    {
        sun.classList.add('Sun_Animation');
        sky.classList.add('Sky_Animation');
        car.classList.add('CarShake_Animation');
        leftWheel.classList.add('CarWheel_Rotation_Animation');
        rightWheel.classList.add('CarWheel_Rotation_Animation');
        track.classList.add('Track_Running_Animation');
        start.innerText = "Stop";
        audio.play();
        audio.loop = true;
    }
    else
    {
        sun.classList.remove('Sun_Animation');
        sky.classList.remove('Sky_Animation');
        car.classList.remove('CarShake_Animation');
        leftWheel.classList.remove('CarWheel_Rotation_Animation');
        rightWheel.classList.remove('CarWheel_Rotation_Animation');
        track.classList.remove('Track_Running_Animation');
        audio.pause();
        start.innerText = "Start";
    }
});
