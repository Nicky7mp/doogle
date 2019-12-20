import React from 'react';

// class Telmo extends React.Component {

//     render() {
//         const breedArray = [
//             {Labradoodle: ["Labrador", "Poodle"]},
//             {Corgipoo: ["Corgi", "Poodle"]},
//             {Corgidor: ["Corgi", "Labrador"]}
//         ]

//         const breeds = breedArray.map( (object) => {
//             return <li>{object.value}</li>
//         });
//         return (
//             <ul>
//                 {breeds}
//             </ul>
//         )
//     }
// }

class Telmo extends React.Component {
    state = {
        persons: [
            "Becky",
            "Paul",
            "Augustin"
        ]
    }

    addPerson = (name) => {
        this.setState({
            persons: [
                ...this.state.persons,
                name
            ]
        })
    }

    render() {
        const names = this.state.persons.map( (n) => {
            return <li>{n}</li>
        })
        
        return (
            <div>
            <button onClick={() => this.addPerson("Nicky")}>ADD PERSON</button>
                <ul>
                    {names}
                </ul>
            </div>
        )
    }
}

export default Telmo;