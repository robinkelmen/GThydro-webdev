import { Button } from '@material-ui/core';
import React, {useState} from 'react';
import "./Share.css";




function Share() {
    const [isOpen,setOpen] = useState(false)
    return (
        <div>

        {isOpen && <div className="container-share">
            <p>Dialog</p>

        </div>}
        </div>
    )
}

export default Share
