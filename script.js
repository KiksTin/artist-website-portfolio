
for(let n = 0; n<=11; n++){
  async function loadJSON(){
    const response = await fetch("works.json");
    const image = await response.json();
    var img = new Image();
    img.src = image[n].layout;
    img.setAttribute("class", "demo-pic");
    img.setAttribute("alt", "effy");
    myDisplayer(img);
  }

  loadJSON();
  
  function myDisplayer(img){
    document.getElementById("demo").appendChild(img);
  }
}

  
