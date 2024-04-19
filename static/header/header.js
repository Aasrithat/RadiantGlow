window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("navbar").style.backgroundColor= "black";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
    document.addEventListener("click",()=>{
      var element=document.getElementById("dropdown");
      element.style.display="none";
    })
});


// profile dropdown

var dropdown=document.getElementById("profile");
dropdown.addEventListener("click",(event)=>{
  event.stopPropagation()
  var element=document.getElementById("dropdown");
  if(element.style.display=="block"){
    element.style.display="none";
  }
  else{
    element.style.display="block";
  }
  
})
  