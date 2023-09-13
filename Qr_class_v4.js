 var limit_c=1500;
class Mashup {
    #key;
    #information;
    iterated;
    mashup;
    constructor() {
     this.#key='';
     this.#information='';
     this.mashup=''
     this.iterated= [];
  }
  mashup_(info,key){
    if((info=='')||(key=='')||(info.length>limit_c)||(key.length>limit_c)){
        console.log("Missing Feild/Overflow");
       alert("Missing Feild/Overflow");
    }
    else{
        this.#information=info;
        this.#key=key; 
        var str = this.#information;
        var str2= this.#key; 
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
        var solution = "1"+mashup; 
        var p3 = convertBase(solution,2,16).toUpperCase();
        this.mashup=p3;
        console.log("Mashup: "+p3);
        alert("Mashup: "+p3);
        QR_gen(this.mashup);
        document.getElementById('qrcode').style.display = 'none';
  }}
  reverse_mashup(mash,key){
    if((mash=='')||(key=='')||(mash.length>limit_c)||(key.length>limit_c)){
        console.log("Missing Feild/Overflow");
       alert("Missing Feild/Overflow");
    }
    else{
    this.mashup=mash;
    this.#key=key;
    let gert = this.mashup;
    var conversion = convertBase(gert,16,2);
    const length = conversion.length;
    const new_bin = conversion.slice(1, length);
    var str_p_1 = this.#key;
    var str_p_2 = text2Binary(str_p_1);
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
    var parts = info_raw.match(/.{1,7}/g);
     var new_value = parts.join(" "); //returns 123-456-789
    var final_letter=
          new_value.replace(/\d+./g,x=>String.fromCharCode('0b'+x));
    var final_str = final_letter.replace(/\0/g,'');
    this.#information=final_str;
    var p3=final_str;
    console.log("Information: "+p3);
    const isValidUrl = urlString =>{
      var inputElement = document.createElement('input');
      inputElement.type = 'url';
      inputElement.value = urlString;

      if (!inputElement.checkValidity()) {
        return false;
      } else {
        return true;
      }
    }
    if(isValidUrl(p3)){
    console.log("Information: "+p3); 
    window.location.replace(p3);}
      else{
          alert("Access denied");}
    }
  }
  getter(){
    if(this.mashup!=''){
    console.log("Current Mashup: "+this.mashup);
    alert("Current Mashup: "+this.mashup);}
    else{
        console.log("No Mashup");
        alert("No Mashup");
    }
  }
  test_getter(){
    console.log(this.#information);
    console.log(this.#key);
  }
  setter(info,key){
   this.#information=info;
   this.#key=key;
  }
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
function parseBigInt(bigint, base) {
    //convert bigint string to array of digit values
    for (var values = [], i = 0; i < bigint.length; i++) {
      values[i] = parseInt(bigint.charAt(i), base);
    }
    return values;
  }
  function formatBigInt(values, base) {
    //convert array of digit values to bigint string
    for (var bigint = '', i = 0; i < values.length; i++) {
      bigint += values[i].toString(base);
    }
    return bigint;
  }
function QR_gen(p3){
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
          link.download = 'Mashup.png';
          link.href = document.getElementById('qrcode').toDataURL()
          link.click();
      } 
       var P3 = p3.toString();
       makeQR(P3)
    }

function QR_gen_2(p3){
    makeQR2 = (your_data) => {
        let qrcodeContainer = document.getElementById("qrcode");
          qrcodeContainer.innerHTML = "";
          new QRious({
            element: qrcodeContainer,
            value: your_data,
            size: 500,
            padding:50,
          }); // generate QR code in canvas
          downloadQR_2(); // function to download the image
    
      }
    
    function downloadQR_2() {
          var link = document.createElement('a');
          link.download = 'Key.png';
          link.href = document.getElementById('qrcode').toDataURL()
          link.click();
      } 
       var P3 = p3.toString();
       makeQR2(P3)
    }

function scanner(test,key){
    var html5QrcodeScanner = new Html5QrcodeScanner(
        "reader", { fps: 10, qrbox: 250 });       
    function onScanSuccess(decodedText, decodedResult) {
        // Handle on success condition with the decoded text or result.
        console.log(decodedText);
        let encoded = decodedText;
        test.reverse_mashup(encoded,key);
        html5QrcodeScanner.clear();
}
return html5QrcodeScanner.render(onScanSuccess);}
function scanner_demo_key(test,info){
    var html5QrcodeScanner = new Html5QrcodeScanner(
        "reader", { fps: 10, qrbox: 250 });       
    function onScanSuccess(decodedText, decodedResult) {
        // Handle on success condition with the decoded text or result.
        console.log(decodedText);
        let encoded = decodedText;
        test.reverse_mashup(info,encoded);
        html5QrcodeScanner.clear();
}
return html5QrcodeScanner.render(onScanSuccess);}
function scanner_demo_mashup(){
    var html5QrcodeScanner = new Html5QrcodeScanner(
        "reader", { fps: 10, qrbox: 250 });       
    function onScanSuccess(decodedText, decodedResult) {
        // Handle on success condition with the decoded text or result.
        console.log(decodedText);
        let encoded = decodedText;
        this.mashup=encoded;
        html5QrcodeScanner.clear();
}
    // ^ this will stop the scanner (video feed) and clear the scan area.
 return html5QrcodeScanner.render(onScanSuccess);
}
function video_scanner(test){
    var html5QrcodeScanner = new Html5QrcodeScanner(
        "reader", { fps: 10, qrbox: 250 });
    function onScanSuccess(decodedText, decodedResult) {
        // Handle on success condition with the decoded text or result.
         console.log(decodedText);
         test.iterated.push(decodedText);
    
    }
    return html5QrcodeScanner.render(onScanSuccess);
}
function combine_scanner(test){
    var indicator=0;
    var html5QrcodeScanner = new Html5QrcodeScanner(
        "reader", { fps: 10, qrbox: 250 });
    function onScanSuccess(decodedText, decodedResult) {
        // Handle on success condition with the decoded text or result.
         console.log(decodedText);
         test.iterated.push(decodedText);
         test.iterated=array_qr_combine(test);
        if((test.iterated.length>1)&&(indicator==0)&&((((test.iterated)[0]).length)>=(((test.iterated)[1]).length))){
            test.reverse_mashup((test.iterated)[0],(test.iterated)[1]);
            indicator=1;
        }
         if((test.iterated.length>1)&&(indicator==0)&&((((test.iterated)[0]).length)<(((test.iterated)[1]).length))){
            test.reverse_mashup((test.iterated)[1],(test.iterated)[0]);
            indicator=1;
        }
    }
    return html5QrcodeScanner.render(onScanSuccess);
}
function array_qr(test){
    function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }
        var jar= removeDuplicates(test.iterated);
        var jar2= jar.join("");
        alert(jar2);
     window.location.replace(jar2);
    
}
function array_qr_combine(test){
    function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }
    return removeDuplicates(test.iterated);
}
try{
function mashup_driver(){
    var test = new Mashup();
    var info =document.getElementById("Information").value;
    var key= document.getElementById("Personal_1").value;
    test.setter(info,key);
    test.mashup_(info,key);
}
function mashup_driver_demo(){
    var test = new Mashup();
    var info =document.getElementById("Information").value;
    var key= document.getElementById("Personal_1").value;
    test.setter(info,key);
    test.mashup_(info,key);
    QR_gen_2(key);
}
function reverse_mashup_driver(){
    var test_n = new Mashup();
    var info =document.getElementById("Information").value;
    var key= document.getElementById("Personal_1").value;
    test_n.setter(info,key);
    test_n.reverse_mashup(info,key);
}
function reverse_mashup_scan_driver(){
    var test_n = new Mashup();
    var key= document.getElementById("Personal_1").value;
    scanner(test_n,key);
}
function reverse_mashup_scan_driver_mashup(){
    scanner_demo_mashup();
}
function reverse_mashup_scan_driver_key(){
    var test_n = new Mashup();
    test_n.mashup=this.mashup;
    scanner_demo_key(test_n,test_n.mashup);
}
function combine_driver(){
    var test_n = new Mashup();
    combine_scanner(test_n);
}
function video_scan_driver(){
    var test_n = new Mashup();
    video_scanner(test_n);
    this.iterated= test_n.iterated;
}
function array_driver(){
    var test_n = new Mashup();
    test_n.iterated= this.iterated;
    array_qr(test_n);
}
}
catch(error){
    console.error(error+"Error has occured");
}
