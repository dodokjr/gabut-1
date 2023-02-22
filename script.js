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
     el_otp.innerHTML = generateOTP()
}



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
     el_down.innerHTML = generateP();
}



function randompass()
{
     el_up.innerHTML =
          Math.random().toString(36).slice(2) +
          Math.random().toString(36)
               .toUpperCase().slice(2);
}

var el_up = document.getElementById("random");