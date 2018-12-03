import React from 'react';
import { Text, View, FlatList, Image, TouchableWithoutFeedback } from 'react-native';

export class Video extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            listLoaded: false,
            videoList: []
        };
    }

    componentDidMount () {
       return fetch(
            'https://www.googleapis.com/youtube/v3/search?part=snippet&q=reactjs&type=video&key=AIzaSyBNlbEy3G4wf9T_b-5f5x3hIWveoErVVcA'
        )
        .then(response => response.json())
        .then(responseJson => {
            debugger
            this.setState({
                listLoaded: true,
                videoList: Array.from(responseJson.items)
            })
        })
        .catch(error => console.log(error))
    }
}