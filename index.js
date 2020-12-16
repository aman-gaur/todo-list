var b=document.querySelector(".btn");
var input=document.querySelector(".inputdiv > input");
var x=document.querySelector(".notcompleted");
var y=document.querySelector(".completed");
var z=document.querySelector("ol > li");
b.addEventListener('click',addList);
input.addEventListener('keypress',function(e){
  if(e.keyCode===13){
    addList();
  }
});
function addList(){
  if(input.value==""){
    alert('add something');
  }
  else{
  var n=document.createElement("li");
  x.appendChild(n);
  var val=input.value;
  n.innerHTML=val;
  input.value="";
  var btn1=document.createElement('button');
  var btn2=document.createElement('button');
  btn1.innerHTML='<i class="fa fa-check"></i>';
  btn2.innerHTML='<i class="fa fa-trash"></i>';
  n.appendChild(btn1);
  n.appendChild(btn2);
  btn1.addEventListener('click',function(){
    var parent=this.parentNode;
    parent.remove();
    y.appendChild(parent);
    btn1.style.display="none";
  });

  btn2.addEventListener('click',function(){
    var parent=this.parentNode;
    parent.remove();
  });
  }
}
