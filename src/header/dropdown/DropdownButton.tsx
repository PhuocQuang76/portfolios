import React from 'react';
import classes from './Dropdown.module.css';
import Flag from 'react-flagkit';
import { IconContext } from 'react-icons';

const DropdownButton:React.FC<{country_code:string}> = (props)  => {
    return (
        <div>
            <div>
                <Flag country={props.country_code} />
            </div>
        </div>
    )
}
export default DropdownButton;
