var data = {
    "images": [{
      "bannerImg1": "https://res.cloudinary.com/dskostzgy/image/upload/f_auto/q_auto/profile_pictures/fvuloh24acsjx6synkih.jpg",
    },
    {"bannerImg1" : "https://res.cloudinary.com/dskostzgy/image/upload/f_auto/q_auto/24e42b2e-2260-45c6-aaae-f6fcb258b6b1.png"
    }]
  };
  data.images.forEach( function(obj) {
    var img = new Image();
    img.src = obj.bannerImg1;
    img.setAttribute("class", "demo-pic");
    img.setAttribute("alt", "effy");
    document.getElementById("demo").appendChild(img);
  });