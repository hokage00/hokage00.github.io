function calculateDistance(lat, lon){
    let depulze = haversine(lat, lon,2.922561,101.650965)
    let pyramid = haversine(lat, lon,3.073065,101.607787)
    let klcc = haversine(lat, lon,3.158761,101.714524)

    return [depulze,pyramid,klcc]

}

let elLocate = document.getElementById("locate")
elLocate.addEventListener("click", function(){
 if(navigator.geolocation){
 navigator.geolocation.getCurrentPosition(function(position){
     let elLat = document.getElementsById("lat")
     let elLong = document.getElementsById("long")
     let elDepulze = document.getElementsById("depulze")
     let elKlcc = document.getElementsById("klcc")
     let elSunway = document.getElementsById("sunway")

    let userLat = position.coords.latitude
    let userLong = position.coords.longitude

    let distance = calculateDistance(userLat,userLong)

    elLat.innerHTML = "Your Latitude" + userLat
    elLong.innerHTML = "Your Longitude" + userLong
    elDepulze.innerHTML = "Distance to Dpluze, Cyberjaya is" + distance[0] + "km"
    elKlcc.innerHTML = "Distance to Klcc is" + distance[2] + "km"
    elSunway.innerHTML = "Distance to Sunway Pyramid is" + distance[1] + 'km'

    })

}else{
     alert("Geolocation is not supported")
    }
})
