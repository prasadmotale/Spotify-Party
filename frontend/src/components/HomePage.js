import React, { Component } from 'react';
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";
import Room from './Room';
import { BrowserRouter as Router, Switch,Redirect,Route,Link } from "react-router-dom";

export default class HomePage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <p>This is Home page</p>
                        </Route>
                        <Route path='/join' component={RoomJoinPage}/>
                        <Route path='/create' component={CreateRoomPage}/>
                        <Route path='/room/:roomCode' component={Room}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}