const url = 'https://server-gashaders.herokuapp.com';

class Helpers {
    static url(route = '/') {
        return url + route;
    }

    static fetch(route = '/') {
        return fetch(this.url(route));
    }

    static getVertex(folder) {
        return fetch(this.url('/api/'+folder+'/vertex'));
    }

    static getFragment(folder) {
        return fetch(this.url('/api/'+folder+'/fragment'));
    }

    static getDescription(folder) {
        return fetch(this.url('/api/'+folder+'/description'));
    }

    static getImageData( image ) {

        let canvas = document.createElement( 'canvas' );
        canvas.width = image.width;
        canvas.height = image.height;
    
        let context = canvas.getContext( '2d' );
        context.drawImage( image, 0, 0 );
    
        return context.getImageData( 0, 0, image.width, image.height );
    
    }
    
    static getPixel( imagedata, x, y ) {
    
        let position = ( x + imagedata.width * y ) * 4, data = imagedata.data;
        return { r: data[ position ], g: data[ position + 1 ], b: data[ position + 2 ], a: data[ position + 3 ] };
    }
}

export default Helpers;