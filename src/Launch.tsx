import React from 'react';

import './Launch.css';
import clientConfig from './client.json';
const client: ClientJson = clientConfig as ClientJson;

class ClientJson {
  description?: string = 'description';
  title?: string = 'title';
}

interface LaunchProps {
  Launch: () => void;
}

export const LaunchView: React.FC<LaunchProps> = (props: LaunchProps) => {
    return (
    <div id="launchContainer" className="launchContainer">
      <div>
        <h1>{client.description}</h1>
            <button className="button_metamask" onClick={() => props.Launch()}><svg width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.51557 1.484C6.29363 0.705946 7.43519 0.41627 8.4901 0.72921L9.24732 0.953843C9.87872 1.14115 10.1598 1.87706 9.814 2.43758L8.36706 4.78308C8.23739 4.99327 8.52922 5.20578 8.68947 5.01785L10.2398 3.19965C11.0064 2.30057 12.2293 1.93518 13.3635 2.26635L29.738 7.04763C30.6954 7.32722 30.6983 8.68261 29.742 8.96626L8.49005 15.27C7.43517 15.5829 6.29365 15.2932 5.51562 14.5151L1.12135 10.1209C-0.0502246 8.94929 -0.0502245 7.0498 1.12135 5.87822L5.51557 1.484Z" fill="white" />
                </svg>
                    <span>Launch Game</span>
            </button>
      </div>
    </div>
  );
};
