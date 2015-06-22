var socialMedia = {
  facebook : 'http://facebook.com/viewsource',
  twitter: 'http://twitter.com/planetoftheweb',
  flickr: 'http://flickr.com/planetotheweb',
  youtube: 'http://youtube.com/planetoftheweb'
};

var addIcons = function(iconsList) {
    var uList = "<ul>";
    for (var key in socialMedia){
        uList += "<li><a href = ' " + socialMedia[key] + "'><img src= 'images/" + key + ".png' alt = '" + key + " icon'></a></li>"
    }
    uList += "</ul>"
    $(".socialmediaicons").append(uList)
};

addIcons(socialMedia);