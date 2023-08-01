import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { icon, LatLng, latLng, LatLngExpression, LatLngTuple, map, Map, marker, Marker, tileLayer } from 'leaflet';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'map',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  private readonly MARKER_ZOOM_LEVEL =16;
  private readonly MARKER_ICON = icon({
    iconUrl:
      'https://res.cloudinary.com/dny5whls7/image/upload/v1675908749/samples/punto_sxxnwc.png',
    iconSize: [42, 42],
    iconAnchor: [21, 42],
  })

  private readonly DEFAULT_LATLNG: LatLngTuple = [13.75, 21.62]

  @ViewChild('map', {static:true})
  mapRef!: ElementRef;

  map!:Map;
  currentMarker!:Marker;

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.initializeMap();
  }




  initializeMap(){
    if(this.map) return;

    this.map = map(this.mapRef.nativeElement, {
      attributionControl: false
    }).setView(this.DEFAULT_LATLNG, 1)

    tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);
  }


  findMyLocation(){
    this.locationService.getCurrentLocation().subscribe({
      next: (latlng) => {
        this.map.setView(latlng, this.MARKER_ZOOM_LEVEL)
        this.setMarker(latlng)
      }
    })
  }

  setMarker(latlng:LatLngExpression){
    if(this.currentMarker)
    {
      this.currentMarker.setLatLng(latlng);
      return;
    }

    this.currentMarker = marker(latlng, {
      draggable: true,
      icon: this.MARKER_ICON,
    }).addTo(this.map)
  }
}
