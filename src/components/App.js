import TimeboxesAPI from "../api/AxiosTimeboxesApi";

import React from "react";

class App extends React.Component {
    state = {
        "timeboxes": [],
        error: null
    };

    componentDidMount() {
        TimeboxesAPI.getAllTimeboxes().then(
            (timeboxes) => this.setState({timeboxes})
        ).catch(
            (error) => this.setState({error})
        ).finally(
            () => this.setState({loading: false})
        )
    }

    render() {

        return (
            <div>
                By Patryk Zdral
                <span>{JSON.stringify(this.state.timeboxes)}</span>
                <hr/>
                <span>Has error: {JSON.stringify(this.state.error)}</span>
            </div>
        );
    }
}

export default App;
