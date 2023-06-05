 function encode_n(){
     var fileinput= document.getElementById("file_n");
     var url_list=[];
     var i;
     for(i=0;i<fileinput.files.length;i++){
     var Element = fileinput;
    var url = URL.createObjectURL(Element.files[i]);
    url_list.push(url);}
    /*alert(url_list);*/
    return url_list;
    }
    function encode(){
    var count= 0;
    const str_gen = document.getElementById("Video_content").value;
    const str_name = document.getElementById("File_name").value;
    const str_array = str_gen.split(',');
    const str_num = str_array.length;
    alert(str_array);
    var count_array=[]
    for(i=0; i<str_num;i++){
      var count= count+1;
      var count_str = count.toString()
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
     function video_qr_1(){
    var list_n= encode_n();
    var createGIF = function() {
  gifshot.createGIF({
    images: list_n,
    interval: .8
  }, function(obj) {
    if (!obj.error) {
      var image = obj.image,
        animatedImage = document.getElementById('animatedGIF');
      animatedImage.src = image;
    }
  })
};
createGIF();
}
document.getElementById('qrcode').style.display = 'none';

  }
function downloadQR() {
      var link = document.createElement('a');
      link.download = str_name+count_str+'.jpeg';
      link.href = document.getElementById('qrcode').toDataURL()
      link.click();
  } 
   makeQR(str_array[i])
 }
 document.getElementById('qrcode').style.display = 'none';
}
function video_qr_1(){
    var list_n= encode_n();
    var createGIF = function() {
  gifshot.createGIF({
    images: list_n,
    interval: .8
  }, function(obj) {
    if (!obj.error) {
      var image = obj.image,
        animatedImage = document.getElementById('animatedGIF');
      animatedImage.src = image;
    }
  })
};
createGIF();
}
