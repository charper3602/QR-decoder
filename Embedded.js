function encoden(str){
    var spr= str.split(",");
    return spr; 
  }
  function p_seqence(){
    var info= document.getElementById("Information").value;
    var inter=encoden(info);
    var inter3=[];
    var geno2= new Converter();
    for(let i=0; i<(inter.length);i++){
       inter3.push(getCharCodes(inter[i]));
    }
    var inter2=[];
    for(let i=0; i<(inter.length)-1;i++){
        inter2.push((inter3[i]-inter3[i+1]));
     }
     inter2.unshift(inter[0]);
     QR_gen(inter2);
     return inter2; 
  }
  function p_seqence_only(){
    var info= document.getElementById("Information").value;
    var inter=encoden(info);
    var inter3=[];
    for(let i=0; i<(inter.length);i++){
       inter3.push(getCharCodes(inter[i]));
    }
    var inter2=[];
    for(let i=0; i<(inter.length)-1;i++){
        inter2.push(inter3[i]-inter3[i+1]);
     }
     inter2.push((inter2.length)+1);
     inter2.unshift(inter[0]);
     alert("p seqence:" + inter2);
     return inter2; 
  }
  function p_display(){
    var html5QrcodeScanner = new Html5QrcodeScanner(
        "reader", { fps: 10, qrbox: 250 });       
    function onScanSuccess(decodedText, decodedResult) {
        // Handle on success condition with the decoded text or result.
        console.log(decodedText);
        var tot= decodedText;
        var inter= encoden(tot);
    document.getElementById("demo").innerHTML= inter[0];
    if(inter.length>1){
     var geno2= new Converter();
    var letter= getCharCodes(inter[0]);
    var dif= letter-BigInt(inter[1]);
    var convert=dif
    .toString()
  .match(/(32|[6-9]\d|1[0-2]\d)/g)
  .map(Number)
  .map(i => String.fromCharCode(i))
  .join('');
    var inter2=inter;
    inter2[0]=convert;
    inter2.splice(1,1);
    QR_gen(inter2);}
   else{
        document.getElementById('qrcode').style.display = 'none';
    }
        html5QrcodeScanner.clear();
}
return html5QrcodeScanner.render(onScanSuccess);}
  function getCharCodes(s) {
    let charCodeArr = [];
    for(let i = 0; i < s.length; i++){
    let code = s.charCodeAt(i);
    charCodeArr.push(code);
}
return BigInt(charCodeArr.join(''));
      }
      function QR_gen(p3){
        makeQR = (your_data) => {
            let qrcodeContainer = document.getElementById("qrcode2");
              qrcodeContainer.innerHTML = "";
              new QRious({
                element: qrcodeContainer,
                value: your_data,
                size: 500,
                padding:50,
              }); // generate QR code in canvas
        
          }
           var P3 = p3.toString();
           makeQR(P3)
        }
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
          class Converter{
            toASCII = (hex = '') => {
               const res = [];
               for(let i = 0; i < hex.length; i += 2){
                  res.push(hex.slice(i,i+2));
               };
            return res
               .map(el => String.fromCharCode(parseInt(el, 16)))
               .join('');
            };
            toHex = (ascii = '') => {
               return ascii
                  .split('')
                  .map(el => el.charCodeAt().toString(16))
                  .join('');
            };
         };
