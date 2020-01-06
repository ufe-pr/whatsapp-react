import React from 'react';
import { faCamera, faSearch, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends React.Component {
    render() {
        return (
            <header className="whatsapp-header">
            <div className="app-bar">
              <div className="whatsapp">WhatsApp</div>
              <div className="action-buttons">
                <FontAwesomeIcon icon={faSearch} />
                <FontAwesomeIcon icon={faEllipsisV} />
              </div>
            </div>
            <div className="header-tabs">          
              <FontAwesomeIcon icon={faCamera} size='sm' />          
              <div className="selected">CHATS</div>
              <div>STATUS</div>
              <div>CALLS</div>
            </div>
          </header>
        );
    }
}

export default Header;