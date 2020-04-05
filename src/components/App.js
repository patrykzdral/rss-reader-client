import AxiosHttpApi from '../api/AxiosHttpApi';

import React from 'react';

class App extends React.Component {
    state = {
        'data': [],
        error: null
    };

    componentDidMount() {
        AxiosHttpApi.getAllData().then(
            (data) => this.setState({data})
        ).catch(
            (error) => this.setState({error})
        ).finally(
            () => this.setState({loading: false})
        )
    }

    render() {

        return (
            <div>
                Test angular Page by Patryk Zdral
                <span> Data fetched from server: {JSON.stringify(this.state.data)}</span>
                <hr/>
                <span>Has error: {JSON.stringify(this.state.error)}</span>
            </div>
        );
    }
}

export default App;
