function scan_mashup(){
   var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 250 });       
function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    console.log(decodedText);
    let encoded = decodedText;
    alert('Mashup: '+ encoded);
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
    let gert = encoded;
    /*alert("Mashup: "+gert);
    /*var gert2 = parseInt(gert);*/
    var conversion = convertBase(gert,16,2);
    /*alert("binary: "+conversion);*/
    const length = conversion.length;
    const new_bin = conversion.slice(1, length);
    /*alert("new binary: "+new_bin);*/
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
    var str_p_1 = document.getElementById("reverse_Personal_1").value;
    var str_p_2 = text2Binary(str_p_1);
    ("personal str: "+str_p_2);
    var personal_len = str_p_2.length;
    var mashup_len = new_bin.length;
    if(mashup_len > personal_len)
    {
        while(mashup_len> personal_len)
        {
            str_p_2 = str_p_2 + "0";
            personal_len = personal_len + 1;
        }
    }
    /*alert("corrected length"+str_p_2);*/
    const XOR= [];
    for(let i=0; i<mashup_len; i++)
    {
        if((new_bin[i]== "1") && (str_p_2[i]== "1") )
        {
            XOR.push("0");
        }
        if((new_bin[i]== "0") && (str_p_2[i]== "1") )
        {
            XOR.push("1");
        }
        if((new_bin[i]== "1") && (str_p_2[i]== "0") )
        {
            XOR.push("1");
        }
        if((new_bin[i]== "0") && (str_p_2[i]== "0") )
        {
            XOR.push("0");
        }
    }
    let information_raw = XOR.toString();
    const info_raw = information_raw.replaceAll(",","");
    /*alert("Information Bin: "+info_raw);*/
    var parts = info_raw.match(/.{1,7}/g);
     var new_value = parts.join(" "); //returns 123-456-789
     /*alert("new parts: "+new_value);*/
    var final_letter=
          new_value.replace(/\d+./g,x=>String.fromCharCode('0b'+x));
    /*alert("Final: "+ final_letter);*/
    var final_str = final_letter.replace(/\0/g,'');
    alert("Decoded Message: "+final_str);
    // ...
    html5QrcodeScanner.clear();
    // ^ this will stop the scanner (video feed) and clear the scan area.
}
 return html5QrcodeScanner.render(onScanSuccess)
}
