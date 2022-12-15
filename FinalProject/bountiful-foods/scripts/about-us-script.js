function initMap() {
    const carlsbad = { lat: 33.1581, lng: -117.3506};
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: carlsbad,
    });
    const marker = new google.maps.Marker({
      position: carlsbad,
      map: map,
    });
  }
  
  window.initMap = initMap;

// Google wanted credit card information inorder to have access to their free trial to get to their maps api.
//I didnt want to risk getting charged for it.