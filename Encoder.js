function mashup()
{

function text2Binary(string) {
    return string.split('').map(function (char) {
        if ((char.charCodeAt(0).toString(2)).length != 7) {
            return '0'+ char.charCodeAt(0).toString(2) ;
        }
        else {
            return char.charCodeAt(0).toString(2);
        }
    }).join('');
}
/*function bin2dec(num){
    return num.split('').reverse().reduce(function(x, y, i){
      return (y === '1') ? x + Math.pow(2, i) : x;
    }, 0);
  }
  function DecimalToBinary( binary ) {
    let decimal = 0;
    let l = binary.length;
    for (let i = l - 1; i >= 0; i--) {
       if ( binary[i] == '1' )
       decimal += Math.pow( 2, l - 1 - i );
    }
    return decimal;
    }
    var convertBase = function () {

        function convertBase(baseFrom, baseTo) {
            return function (num) {
                return parseInt(num, baseFrom).toString(baseTo);
    
            };
        }
    
        // binary to decimal
        convertBase.bin2dec = convertBase(2, 10);
    
        // binary to hexadecimal
        convertBase.bin2hex = convertBase(2, 16);
    
        // decimal to binary
        convertBase.dec2bin = convertBase(10, 2);
    
        // decimal to hexadecimal
        convertBase.dec2hex = convertBase(10, 16);
    
        // hexadecimal to binary
        convertBase.hex2bin = convertBase(16, 2);
    
        // hexadecimal to decimal
        convertBase.hex2dec = convertBase(16, 10);
    
        return convertBase;
    }();
    function final_try(sol){
             breakdown= sol.split();
             jerq= sol.length;
             sum =0;
             for(i=0; i<=jerq; i++){
                if (breakdown[i]=="1")
                sum = sum + Math.pow(2, jerq-i);
                 i=i+1;
                 return sum;
             }
    }*/
    function formatBigInt(values, base) {
        //convert array of digit values to bigint string
        for (var bigint = '', i = 0; i < values.length; i++) {
          bigint += values[i].toString(base);
        }
        return bigint;
      }      
    function parseBigInt(bigint, base) {
        //convert bigint string to array of digit values
        for (var values = [], i = 0; i < bigint.length; i++) {
          values[i] = parseInt(bigint.charAt(i), base);
        }
        return values;
      }
    function convertBase(bigint, inputBase, outputBase) {
        //takes a bigint string and converts to different base
        var inputValues = parseBigInt(bigint, inputBase),
          outputValues = [], //output array, little-endian/lsd order
          remainder,
          len = inputValues.length,
          pos = 0,
          i;
        while (pos < len) { //while digits left in input array
          remainder = 0; //set remainder to 0
          for (i = pos; i < len; i++) {
            //long integer division of input values divided by output base
            //remainder is added to output array
            remainder = inputValues[i] + remainder * inputBase;
            inputValues[i] = Math.floor(remainder / outputBase);
            remainder -= inputValues[i] * outputBase;
            if (inputValues[i] == 0 && i == pos) {
              pos++;
            }
          }
          outputValues.push(remainder);
        }
        outputValues.reverse(); //transform to big-endian/msd order
        return formatBigInt(outputValues, outputBase);
      }
            
function encode()
{
    var str = document.getElementById("Information").value; 
    var str2= document.getElementById("Personal_1").value; 
    var str3 = text2Binary(str);
    alert("text to binary: "+str3);
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
    /*var reverse= p2^xor;*/
    alert("Binary P1: "+str3);
    alert("Binary P2: "+str4);
    alert("Binary XOR: "+mashup);
    /*alert("Binary combine: "+combine);*/
    var solution = "1"+mashup; 
    alert("solution: "+solution); 
    alert("solution int:"+ BigInt(solution));
    var p3 = convertBase(solution,2,16).toUpperCase();
    /*var p3 = DecimalToBinary(hexa);*/
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
