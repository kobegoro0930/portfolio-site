import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import NextLink from "next/link";
import MuiLink from "@mui/material/Link"
import { Menu } from '../../node_modules/@mui/icons-material/index';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <NextLink href="/" underline="none" passHref>
        <MuiLink underline="none" color="teal">
          TOP
        </MuiLink>
      </NextLink>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MenuBookIcon />
      </ListItemIcon>
      <NextLink href="/posts">
        <MuiLink underline="none" color="teal">
          ブログ
        </MuiLink>
      </NextLink>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <NextLink href="/charts">
        <MuiLink underline="none" color="teal">
          チャート
        </MuiLink>
      </NextLink>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <NextLink href="/about">
        <MuiLink underline="none" color="teal">
          自己紹介
        </MuiLink>
      </NextLink>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <NextLink href="/skills">
        <MuiLink underline="none" color="teal">
          スキル
        </MuiLink>
      </NextLink>
    </ListItemButton>
  </React.Fragment>
);
