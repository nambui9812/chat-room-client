import React from 'react';

import logo from '../logo.svg';

const EachRoom = () => {
    return (
        <div className="EachRoom">
            <img className="room-images" src={logo} alt="Each room here" />
        </div>
    )
}

export default class Rooms extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const keys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        return (
            <div className="Rooms">
                {keys.map(key => <EachRoom key={key} />)}
            </div>
        )
    }
};
