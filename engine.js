var canvas = document.getElementById("c1");
var image = null;
var filtered;
var grayImage;
var crimson;
var colorful;


function loadImage(){

  var fileinput = document.getElementById("img");
  image = new SimpleImage(fileinput);
  colorful = new SimpleImage(fileinput);
  crimson = new SimpleImage(fileinput);
  filtered = new SimpleImage(fileinput);
  grayImage = new SimpleImage(fileinput);
  image.drawTo(canvas);
  if (image != null){
    alert("Image loaded successfully");
  }
}


function sunlight(){

  clearScreen();

  for (var pix of filtered.values()){
    var x = pix.getRed();
    var y = pix.getBlue();
    pix.setRed(0.9 * x);
    pix.setBlue(0.55 * y);
  }
  filtered.drawTo(canvas);
}


function grayScale(){

  clearScreen();

  for (var pixel of grayImage.values()){
    var val =((pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3);
    pixel.setRed(val);
    pixel.setBlue(val);
    pixel.setGreen(val);
    }
  grayImage.drawTo(canvas);
}


function doCrimson(){

  clearScreen();
  for (var pix of crimson.values()){
    var aver =((pix.getRed()+pix.getBlue()+pix.getGreen())/3);
    if (aver < 128){
      pix.setRed(aver * 2);
      pix.setBlue(0);
      pix.setGreen(0);
    }
    else{
      pix.setRed(255);
      pix.setBlue((aver * 2) - 255);
      pix.setGreen((aver * 2) - 255);
    }
  }
  crimson.drawTo(canvas);
}


function doColorful(){
  clearScreen();
  var key = colorful.getWidth();
  for (var pix of colorful.values()){
       
    if (pix.getX() <= key/4){
      var red =((pix.getRed()+pix.getBlue()+pix.getGreen())/3);
      if (red < 128){
        pix.setRed(red * 2);
        pix.setBlue(0);
        pix.setGreen(0);
    }
      else{
        pix.setRed(255);
        pix.setBlue((red * 2) - 255);
        pix.setGreen((red * 2) - 255);
    }
  }
    else if (pix.getX() <= key/2){
      var bl =((pix.getRed()+pix.getBlue()+pix.getGreen())/3);
      if (bl < 128){
        pix.setGreen(bl * 1.56);
        pix.setRed(bl * 1.56);
        pix.setBlue(0);
    }
      else{
        pix.setGreen(200);
        pix.setRed(200);
        pix.setBlue((bl * 1.56) - 200);
    }
    }
    else if (pix.getX() <= (key * 0.75)){
      var bl =((pix.getRed()+pix.getBlue()+pix.getGreen())/3);
      if (bl < 128){
        pix.setBlue(bl * 1.56);
        pix.setGreen(0);
        pix.setRed(0);
    }
      else{
        pix.setBlue(200);
        pix.setGreen((bl * 1.56) - 200);
        pix.setRed((bl * 1.56) - 200);
    }
    }
    else {
      var gr =((pix.getRed()+pix.getBlue()+pix.getGreen())/3);
      if (gr < 128){
        pix.setGreen(gr * 1.56);
        pix.setBlue(0);
        pix.setRed(0);
    }
      else{
        pix.setGreen(200);
        pix.setBlue((gr * 1.56) - 200);
        pix.setRed((gr * 1.56) - 200);
    }
    }
  }
  
  colorful.drawTo(canvas);
}


function addFrame(){
  //still in process
}


function clearScreen(){
  var c1 = document.getElementById("c1");
  var ctx = c1.getContext("2d");
  ctx.clearRect(0,0,c1.width,c1.height);
}


function resetImg(){
  clearScreen();
  var fff = document.getElementById("img");
  var immg = new SimpleImage(fff);
  filtered = new SimpleImage(fff);
  grayImage = new SimpleImage(fff);
  crimson = new SimpleImage(fff);
  colorful = new SimpleImage(fff);
  immg.drawTo(canvas);
}
