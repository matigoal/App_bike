function Bike(){
  var _UrlBike = "https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey="";
  var _UrlCaller = new UrlCall();
  var _Stations = [];
  var lat = 45.7578;
  var lon = 4.8351;
  var myIcon = L.icon({
    iconUrl: ' http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|e85141&chf=a,s,ee00FFFF',
    iconSize: [30, 30],
  });
   var clustericon = L.icon({
                        iconUrl: 'images/m1.png',
                        iconSize: [50, 50],
                        iconAnchor: [25, 50],
                        popupAnchor: [-3, -76],
                    });
  var macarte = L.map('mapid').setView([lat, lon], 12);
  mgroup = new L.markerClusterGroup();

  var _ApresAppelUrl = function(data) {
    console.log(data);
    _Stations = data;
    for(var i = 0; i < _Stations.length ; i++){
      var station = _Stations[i];
      var markers = new L.marker([station.position.lat, station.position.lng],{icon:myIcon}).bindPopup(station.name + "<br>" +  station.status);
      markers.station = station;
      markers.bindPopup(station.name + "<br>" +  station.status);
      mgroup.addLayer(markers); 
      macarte.addLayer(mgroup);
      markers.openPopup();
      markers.on("click" ,function(event){
        var dispo = document.getElementById("velo-dispo").innerHTML = "Vélo(s) disponible(s)" + "<br>" + event.sourceTarget.station.available_bikes;
        var places = document.getElementById("velo-indispo").innerHTML = "Place(s) disponible(s)" +"<br>" + event.sourceTarget.station.bike_stands;
        var infosta = document.getElementById("infosta").innerHTML = "Détails de la station" + "<br>" + event.sourceTarget.station.name +"<br>"+ event.sourceTarget.station.address;
       console.log(infosta); 

      
     
      });
    }
   
  }

  this.Init = function(){
    
    // couche map
     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 18,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Points &copy 2012 LINZ'
                    }).addTo(macarte);
    // définit icone a utiliser pour marqueur
    

    _UrlCaller.Get(_UrlBike,_ApresAppelUrl);

    document.getElementById('submit_canvas').addEventListener('click', function(e) {
      e.preventDefault();
      var T = new Timer(20,'timer');
      T.Run();
    });
  }
}




 console.log("marqueur charger");






//classe timer
function Timer(DureeEnMinute,cible){

  var min = DureeEnMinute, sec=0,dse=0;
  var TotalMilliseconde = DureeEnMinute* 60 *10;
  var Decrement = function(){
      min=Math.floor(TotalMilliseconde/600);
      sec=Math.floor((TotalMilliseconde-min*600)/10);
      dse=TotalMilliseconde-((min*60)+sec)*10;
      TotalMilliseconde--;
  }

  var AfficheTemp = function(){
    console.log(min+':'+sec+':'+dse);
    document.getElementsByClassName(cible)[0].innerText = min+':'+sec+':'+dse;
  }

  this.Run = function(){
    setInterval(function(){
      Decrement();
      AfficheTemp();
    },100);
  }

}

