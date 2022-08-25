import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BarChartIcon from '@mui/icons-material/BarChart';
import NextLink from "next/link";
import MuiLink from "@mui/material/Link"

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <MenuBookIcon />
      </ListItemIcon>
      <NextLink href="/">
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
