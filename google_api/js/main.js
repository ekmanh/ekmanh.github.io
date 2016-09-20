
// //Sources Utalized:
// -https://developers.google.com/places/javascript/
// -https://www.youtube.com/watch?v=2n_r0NDekgc
// -https://developers.google.com/maps/documentation/javascript/styling



var map = new google.maps.Map(document.getElementById('map-canvas'),{
	center: {
		lat: 39.7392,
		lng: -104.9903
	},
	zoom:13,
	disableDefaultUI: true,
	
	styles: [
            {
              featureType: 'landscape',
              elementType: 'labels',
              stylers: [
                { visibility: 'off' }
              ]
            },{
              featureType: 'road',
              elementType: 'labels',
              stylers: [
                { visibility: 'off' }
              ]
            },{
              featureType: 'all',
              elementType: 'labels.text.stroke',
              stylers: [
                { visibility: 'off' }
              ]
              
            },{
              featureType: 'all',
              elementType: 'labels.text.fill',
              stylers: [
                { color: '#ffffff' }
              ]

            },{
              featureType: 'water',
              elementType: 'geometry',
              stylers: [
                { color: '#8c8cd9' }
              ]

            },{
              featureType: 'landscape',
              elementType: '#333399',
              stylers: [
                { color: '#333399' }
              ]
            },{
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [
                { color: '#333399' }
              ]  

            },{
              featureType: 'poi',
              elementType: 'geometry',
              stylers: [
                { color: '#333399' }
              ]  

            },{
              featureType: 'road.arterial',
              elementType: 'geometry',
              stylers: [
                { color: '#ff0066' }
              ]
            },{
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [
                { color: '#ff0066' }
              ]
            },{
              featureType: 'road.local',
              elementType: 'geometry',
              stylers: [
                { color: '#ff0066' }
              ]  
            },{
              featureType: 'poi.business',
              elementType: 'labels',
              stylers: [
                { visibility: 'off' }
              ]
            }
          ]
        });


	var searchBox = new google.maps.places.SearchBox(document.getElementById('mapsearch'));

	google.maps.event.addListener(searchBox,'places_changed',function(){

	var places = searchBox.getPlaces();

	var bounds = new google.maps.LatLngBounds();
	var i, place;

	for(i=0; place=places[i];i++){

		bounds.extend(place.geometry.location);
	}

	map.fitBounds(bounds);
	map.setZoom(15);

});


