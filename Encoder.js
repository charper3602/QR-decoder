function mashup()
{

function text2Binary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join('');
}
function encode()
{
    var str = document.getElementById("Information").value; 
    var str2= document.getElementById("Personal_1").value; 
    var str3 = text2Binary(str);
    var str4 = text2Binary(str2);
    var len1 = str3.length;
    var len2 = str4.length;
    if(len1 != len2)
    {
        while(len1> len2)
        {
            str4 = str4 + "0";
            len2 = len2 + 1;
        }
    }
    if (len1 < len2)
    {
        while(len1< len2)
        {
            str3 = str3 + "0";
            len1 = len1 +1;
        }
    }
    var xor1=str3.split("");
    var xor2=str4.split("");
    /*var p1 = parseInt(str3, 2);
    var p2 = parseInt(str4, 2);
    var xor= p1^p2;*/
    var combine = str3+str4;
    const XOR= [];
    var inter = (combine.length)/2;
    for(let i=0; i<inter; i++)
    {
        if((str3[i]== "1") && (str4[i]== "1") )
        {
            XOR.push("0");
        }
        if((str3[i]== "0") && (str4[i]== "1") )
        {
            XOR.push("1");
        }
        if((str3[i]== "1") && (str4[i]== "0") )
        {
            XOR.push("1");
        }
        if((str3[i]== "0") && (str4[i]== "0") )
        {
            XOR.push("0");
        }
    }
    let mashup_raw = XOR.toString();
    const mashup= mashup_raw.replaceAll(",","");
    /*var reverse= p2^xor;
    alert("Binary P1: "+str3);
    alert("Binary P2: "+str4);
    alert("Binary XOR: "+mashup);
    alert("Binary combine: "+combine);*/
    const solution = "1"+mashup; 
    var p3 = parseInt(solution, 2);
    alert("Binary mashup: "+p3);
makeQR = (your_data) => {
    let qrcodeContainer = document.getElementById("qrcode");
      qrcodeContainer.innerHTML = "";
      new QRious({
        element: qrcodeContainer,
        value: your_data,
        size: 500,
        padding:50,
      }); // generate QR code in canvas
      downloadQR(); // function to download the image

  }

function downloadQR() {
      var link = document.createElement('a');
      link.download = 'Mashup.jpeg';
      link.href = document.getElementById('qrcode').toDataURL()
      link.click();
  } 
   var P3 = p3.toString();
   makeQR(P3)
}
encode()
}