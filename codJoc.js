background(149, 106, 189);
var balon=function(){
fill(15, 220, 247);
ellipse(150,80,80,120);
fill(245, 5, 5);
ellipse(50,80,80,120);
fill(8, 245, 35);
ellipse(250,80,80,120);
fill(229, 245, 8);
ellipse(350,80,80,120);
};
var button= function(){
fill(15, 220, 247);
rect(250,280,50,50,10);
fill(245, 5, 5);
rect(320,280,50,50,10);
fill(8, 245, 35);
rect(250,340,50,50,10);
fill(229, 245, 8);
rect(320,340,50,50,10);

fill(0, 0, 0);
textSize(40);
text("",335,290,50,50);
text("",266,290,50,50);
text("",266,350,50,50);
text("",336,350,50,50);
};


var GetMax = function(n1,n2,n3,n4)
{
    if(n2>n1){
     n1=n2;
    }
    if(n3>n1){
     n1=n3;
    }
    if(n4>n1){
     n1=n4;
    }
  return n1;
};




mouseClicked= function(){
    
balon();
button();
var random1= floor(random(0,10));    
var random2= floor(random(0,10));
var random3= floor(random(0,10));
var random4= floor(random(0,10));    
fill(0, 0, 0);
textSize(80);
text(random1,30,50,80,80);
text(random2,128,50,80,80);
text(random4,331,50,80,80);
text(random3,230,50,80,80);
textSize(25);
//b1
if(mouseX>=320 && mouseX<=370 && mouseY>=280 && mouseY<=280+50)
{
  rect(30,280,150,100); 
  if(random1===GetMax(random1,random2,random3,random4))
  {
      
      fill(8, 250, 36);
      text("FELICITARI",40,300,140,90);
  }
   else{
       fill(250, 10, 18);
      text("GRESIT",40,300,140,90);
  }
}

//b2
if(mouseX>=250 && mouseX<=300 && mouseY>=280 && mouseY<=280+50)
{
     rect(30,280,150,100);
     if(random2===GetMax(random1,random2,random3,random4))
  {
      
      fill(8, 250, 36);
      text("FELICITARI",40,300,140,90);
  }
   else{
       fill(8, 250, 36);
      text("GRESIT",40,300,140,90);
  }
}
//b3
if(mouseX>=250 && mouseX<=300 && mouseY>=340 && mouseY<=340+50)
{
     rect(30,280,150,100);
     if(random3===GetMax(random1,random2,random3,random4))
  {
      
      fill(8, 250, 36);
      text("FELICITARI",40,300,140,90);
  }
   else{
       fill(8, 250, 36);
      text("GRESIT",40,300,140,90);
  }
}
//b4
if(mouseX>=320 && mouseX<=370 && mouseY>=340 && mouseY<=340+50)
{
     rect(30,280,150,100);
     if(random4===GetMax(random1,random2,random3,random4))
  {
      
      fill(8, 250, 36);
      text("FELICITARI",40,300,140,90);
  }
   else{
       fill(8, 250, 36);
      text("GRESIT",40,300,140,90);
  }
}

};