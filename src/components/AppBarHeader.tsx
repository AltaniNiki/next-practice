'use client';

import AppBar from "@mui/material/AppBar"
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

export default function AppBarHeader({
    onMenuClick
}: {
    onMenuClick: () => void;
}) {
    return (
        <AppBar position="fixed" sx={{ zIndex: (t) => t.zIndex.drawer + 1 }}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    edge="start"
                    onClick={onMenuClick}
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" noWrap>
                    Dashboard
                </Typography>
            </Toolbar>
        </AppBar>
    )
}