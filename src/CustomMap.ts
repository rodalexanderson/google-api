// /// <reference types="@types/google.maps" />

// Instructions to other class on how to be an argument to 'addMarker'
export interface Mappeable {
    location: {
        latitude: number;
        longitude: number;
    }
    markerContent(): string;
}



export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: 1,
            center: { 
                lat: 0, 
                lng: 0,
            },
        });
    }

    async addMarker(mappable: Mappeable): Promise<void> {
        if (!this.googleMap) {
            console.error('El mapa no está inicializado');
            return;
        }

        //Problems with deprecated Google API library made .Marker unusable, {Marker} is next closest way to use it, but returns issues. Markers are rendered in Map, that's why is left annotated as ANY.
        const { Marker } = (await google.maps.importLibrary('marker')) as any;

        const marker = new Marker({
            position: {
                lat: mappable.location.latitude,
                lng: mappable.location.longitude,
            },
            map: this.googleMap,
        });
        marker.addListener('click', () => {
            const infowindow = new google.maps.InfoWindow({
                content: mappable.markerContent(),
            })
            infowindow.open(this.googleMap, marker);
        })
    }
}


    
