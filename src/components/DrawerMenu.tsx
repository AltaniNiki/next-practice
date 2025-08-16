

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const drawerWidth = 240;

export default function DrawerMenu({
    open,
    onClose
}: {
    open: boolean;
    onClose: () => void;
}) {
    const items = [
        { href: '/', label: 'Home' },
        { href: '/products', label: 'Products' },
        { href: '/categories', label: 'Categories' },
    ];


    return (
        <Drawer
            variant="temporary"
            open={open}
            onClose={onClose}
            ModalProps={{ keepMounted: true }}
            sx={{ '& .MuiDrawer-paper': { width: drawerWidth } }}
        >
            <Box sx={{ p: 2 }}>
                <Typography variant="h6">My App</Typography>
            </Box>
            <Divider />
            <List>
                {items.map(it => (
                    <Link
                        key={it.href}
                        href={it.href}
                        prefetch
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <ListItemButton onClick={onClose}>
                            <ListItemText primary={it.label} />
                        </ListItemButton>
                    </Link>
                ))}
            </List>
        </Drawer>
    );
}