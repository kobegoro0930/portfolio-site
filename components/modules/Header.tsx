
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '../../node_modules/@mui/material/index';
import Link from '../../node_modules/next/link';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KEN TERAMOTO
          </Typography>
          <Button color="inherit">
            <Link href="/">TOP</Link>
          </Button>
          <Button color="inherit">
            <Link href="/about">About</Link>
          </Button>
          <Button color="inherit">
            <Link href="/skills">Skills</Link>
          </Button>
          <Button color="inherit">
            <Link href="/posts">Posts</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
