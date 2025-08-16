'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBarHeader from '@/components/AppBarHeader';
import DrawerMenu from '@/components/DrawerMenu';

export default function Shell({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <AppBarHeader onMenuClick={() => setOpen(true)} />
            <DrawerMenu open={open} onClose={() => setOpen(false)} />
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar /> {/* offset για το AppBar */}
                {children}
            </Box>
        </>
    );
}