import React, {Component} from 'react';
import './App.css';
import Numbers from "./Companets/New-number";
import './Companets/New-numbers.css'

class App extends Component {
    state = {
        numbers: []
    }
    randomNumber = () => Math.floor(Math.random() * (36 - 5) + 5);

    newNumber = () => {
        const numbers = [];
        for (let i = 0; i < 5;) {
            const number = this.randomNumber();
            if (numbers.includes(number)) {
                continue
            } else {
                numbers.push(number);
                i++
            }
        }
        const stateNumber = this.state;
        stateNumber.numbers = numbers.sort(function (a, b) {
            return a - b
        });
        this.setState({stateNumber})


    };

    render() {
        return (
            <div className="App">
                <button onClick={this.newNumber} className={'btn'}>New numbers</button>
                <div className={'wrapper'}>
                    {this.state.numbers.map((number, id) => (
                        <Numbers numbers={number} key={id}/>
                    ))}

                </div>
            </div>
        )

    }

}
    export default App;
