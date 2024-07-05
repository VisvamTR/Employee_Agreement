import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, TableCell } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';

// Created the action menu function and an object represents the agreement it include the id.,
//  and handledelete the func to delete the agreement.
const ActionMenu = ({ agreement, handleDelete }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    // The func handlemenuopen will handle the current events of setanchire1 func
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // The func will help us to close the action menu
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    // handleview func is used to navigate to the viewaggrement componenet using usenavigate, react-router-dom library
    // and then it will call the action menu close func
    const handleView = () => {
        navigate(`/view/${agreement.id}`);
        handleMenuClose();
    };

    // handleupdate func is used to navigate to the updateaggrement componenet using usenavigate, react-router-dom library
    // and then it will call the action menu close func
    const handleUpdate = () => {
        navigate(`/update/${agreement.id}`);
        handleMenuClose();
    };

    //  Triggers the handleDelete func passed as a prop with the agreement ID, and closes the action menu.
    const handleDeleteAction = () => {
        handleDelete(agreement.id);
        handleMenuClose();
    };

    return (
        <TableCell>
            <IconButton  onClick={handleMenuOpen}>
                <MoreVertIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                PaperProps={{
                    style: {
                        maxHeight: 48 * 4.5,
                        width: '20ch',
                    },
                }}
            >
                <MenuItem onClick={handleView}>View</MenuItem>
                <MenuItem onClick={handleUpdate}>Update</MenuItem>
                <MenuItem onClick={handleDeleteAction} style={{ color: 'red' }}>Delete</MenuItem>
            </Menu>
        </TableCell>
    );
};

export default ActionMenu;