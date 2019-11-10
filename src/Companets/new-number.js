import React from 'react'

class Numbers extends React.Component {
    render() {
        return (
            <div>
                <div className={'random_number'}> {this.props.numbers} </div>
            </div>
        )
    }
}

export default Numbers