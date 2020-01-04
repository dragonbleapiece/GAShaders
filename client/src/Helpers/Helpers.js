const url = 'http://localhost:9000/';

class Helpers {
    get url(route) {
        return url + route;
    }
}

export default Helpers;