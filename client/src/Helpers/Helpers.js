const url = 'http://localhost:9000';

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
}

export default Helpers;