const url = 'http://localhost:9000';

class Helpers {
    static url(route = '/') {
        return url + route;
    }

    static fetch(route = '/') {
        return fetch(this.url(route));
    }
}

export default Helpers;