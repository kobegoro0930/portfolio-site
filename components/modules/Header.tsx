
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
            <Link href="/"><a>TOP</a></Link>
          </Button>
          <Button color="inherit">
            <Link href="/about"><a>About</a></Link>
          </Button>
          <Button color="inherit">
            <Link href="/skills"><a>Skills</a></Link>
          </Button>
          <Button color="inherit">
            <Link href="/posts"><a>Posts</a></Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
