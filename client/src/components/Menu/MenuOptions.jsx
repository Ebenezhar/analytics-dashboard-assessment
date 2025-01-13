import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';


function MenuOptions({ data, chosenHeader, setChosenHeader }) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCheckBox = (value) => {
        setChosenHeader((prevChosenHeader) => {
            if (prevChosenHeader.includes(value)) {
                if (!(prevChosenHeader.length === 1 && prevChosenHeader.includes(value))) {
                    return prevChosenHeader.filter((item) => item !== value);
                }
            } else {
                return [...prevChosenHeader, value];
            }
            return prevChosenHeader; 
        });
    };

    return (
        <div>
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
               <span>Filter</span> 
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                {data.map((header) => (
                    <MenuItem ><p><span>
                        <input
                            type="checkbox"
                            className="blue-checkbox"
                            value={header}
                            checked={chosenHeader.includes(header)}
                            onChange={() => handleCheckBox(header)}
                            disabled={chosenHeader.length === 1 && chosenHeader.includes(header)}
                        />
                    </span><span>{header}</span></p></MenuItem>
                ))}

            </Menu>
        </div>
    )
}

export default MenuOptions