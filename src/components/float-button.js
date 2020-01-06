import React from 'react';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class FloatButton extends React.Component {
    render() {
        return (
            <div className="float-button">
                <FontAwesomeIcon icon={faCommentAlt} />
            </div>
        );
    }
}

export default FloatButton;