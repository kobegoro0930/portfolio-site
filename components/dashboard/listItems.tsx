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
    <NextLink href="/">
      <ListItemButton>
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <MuiLink underline="none" color="teal">
          ブログ
        </MuiLink>
      </ListItemButton>
    </NextLink>
    <NextLink href="/charts">
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <MuiLink underline="none" color="teal">
          トレーニング記録
        </MuiLink>
      </ListItemButton>
    </NextLink>
    <NextLink href="/about">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <MuiLink underline="none" color="teal">
          自己紹介
        </MuiLink>
      </ListItemButton>
    </NextLink>
    <NextLink href="/skills">
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <MuiLink underline="none" color="teal">
          スキル
        </MuiLink>
      </ListItemButton>
    </NextLink>
  </React.Fragment>
);
