
// Pass
var el_down = document.getElementById("pass");
function generateP()
{
     var pass = '';
     var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
          'abcdefghijklmnopqrstuvwxyz0123456789@#$';

     for (let i = 1; i <= 8; i++)
     {
          var char = Math.floor(Math.random()
               * str.length + 1);

          pass += str.charAt(char)
     }

     return pass;
}

function pass()
{
     var otpass = generateP()
     sessionStorage.setItem("pass", otpass);
     el_down.innerHTML = generateP();
}


// Otp

const generateOTP = () =>
{
     const length = 6;
     let otp = '';

     for (let i = 0; i < length; i++)
     {
          otp += Math.floor(Math.random() * 10);
     }
     return otp;
}

var el_otp = document.getElementById('otp')
function generOtp()
{
     var otps = generateOTP()
     el_otp.innerHTML = generateOTP()
     sessionStorage.setItem("otp", otps);
}


// Random
function randompass()
{
     el_up.innerHTML =
          Math.random().toString(36).slice(2) +
          Math.random().toString(36)
               .toUpperCase().slice(2);
}

var el_up = document.getElementById("random");


//fps
let be = Date.now(), fps = 0, info = '';
requestAnimationFrame(
     function loop()
     {
          let now = Date.now()
          fps = Math.round(1000 / (now - be))
          be = now
          requestAnimationFrame(loop)
          if (fps < 35)
          {
               kFps.style.color = "red"
               kFps.textContent = fps
          } if (fps >= 35 && fps <= 41)
          {
               kFps.style.color = "deepskyblue"
               kFps.textContent = fps + " FPS"
          } else
          {
               kFps.style.color = "black"
               kFps.textContent = fps + " FPS"
          }
          kpFps.value = fps;
          info += ('' + new Date() + ' ' + fps + '\n');
     }
);
