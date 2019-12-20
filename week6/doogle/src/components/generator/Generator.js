import React from 'react'

import Option from './Option'
import Result from './Result'

class Generator extends React.Component {
    state = {
        dogsArray: [
            {

            }
        ],
        dog1: "",
        dog2: "",
        result: "",
    }

    selectDog1 = (event) => {
       this.setState({
            option1: event.target.value
       }) 
    }

    selectDog2 = (event) => {
        this.setState({
             option2: event.target.value
        }) 
     }
    
    render() {
        

        return (
            <div>
                Let's make a crossbreed
                {/* <Dog breed="corgi"/>
                <Dog breed={breed1}/> */}
                <Option />
                <Option />
                <Result />
            </div>
        )
    }
}

export default Generator;
