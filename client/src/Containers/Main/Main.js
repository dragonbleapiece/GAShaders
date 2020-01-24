import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Helpers from '../../Helpers/Helpers.js';
import Thumbnail from '../../Components/Thumbnail/Thumbnail.js';
import Demo from '../Demo/Demo.js';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    getList() {
        Helpers.fetch('/api')
        .then(res => res.json())
        .then(list => this.setState({ list }))
        .catch(err => console.error(err));
    }

    testAPI() {
        Helpers.fetch('/testAPI')
        .then(res => res.text())
        .then(text => console.info(text));
    }

    componentDidMount() {
        this.testAPI();
        this.getList();
    }

    render() {

        const thumbnails = this.state.list.map((item, index) =>
            <Thumbnail key={index} folderName={item} />
        );

        return (
            <main className="App-main">
                <Switch>
                    <Route exact path="/">
                        {thumbnails}
                    </Route>
                    <Route path="/shader/:folderName" component={Demo} />
                </Switch>
            </main>
        );
    }
}

export default Main;