import React from 'react';

import { ReactComponent as SettingIcon } from '../images/settings.svg';

export default class ChannelsFooter extends React.Component {

    render() {
        return (
            <div className="ChannelsFooter">
                <SettingIcon className='setting-icon' onClick={this.props.handleShowModal} />
            </div>
        )
    }
};
