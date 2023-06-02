import React from 'react';
import { MenuItem, MenuList, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const NestedMenuItem = ({ label, children }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <MenuItem onClick={handleClick}>
        {open ? (
          <ExpandMoreIcon fontSize="small" />
        ) : (
          <ChevronRightIcon fontSize="small" />
        )}
        {label}
      </MenuItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <MenuList>{children}</MenuList>
      </Collapse>
    </React.Fragment>
  );
};

export default NestedMenuItem;
