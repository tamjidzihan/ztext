import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { MoreVert } from "@mui/icons-material";

interface SettingsMenuProps {
  onDelete: () => void;
  onEdit: () => void;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({ onDelete, onEdit }: SettingsMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton aria-label="settings" onClick={handleMenuClick}>
        <MoreVert />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => { handleMenuClose(); onEdit(); }}>Edit</MenuItem>
        <MenuItem onClick={() => { handleMenuClose(); onDelete(); }}>Delete</MenuItem>
      </Menu>
    </>
  );
};

export default SettingsMenu;
