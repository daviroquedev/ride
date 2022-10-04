import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

export default function HeaderLogout() {

    return (
        <AppBar position="static" style={{ background: '#08B5CE' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                 
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            GIVEMEARIDE
                        </Typography>
               
                </Toolbar>
            </Container>
        </AppBar>
    )
}