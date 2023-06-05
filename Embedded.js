function encoden(str){
    var spr= str.split(",");
    return spr; 
  }
  function p_seqence(){
    var info= document.getElementById("Information_n").value;
    var inter=encoden(info);
    var inter3=[];
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
  function p_display(){
    var html5QrcodeScanner = new Html5QrcodeScanner(
        "reader2", { fps: 10, qrbox: 250 });       
    function onScanSuccess(decodedText, decodedResult) {
        // Handle on success condition with the decoded text or result.
        console.log(decodedText);
        var tot= decodedText;
        var inter= encoden(tot);
    document.getElementById("demo").innerHTML= inter[0];
    if(inter.length>1){
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
        document.getElementById('qrcode2').style.display = 'none';
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
