import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import PeopleIcon from '@mui/icons-material/People';
import ConstructionIcon from '@mui/icons-material/Construction';
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
        <MuiLink underline="none" color="rgba(0, 0, 0, 0.54)">
          ブログ
        </MuiLink>
      </ListItemButton>
    </NextLink>
    <NextLink href="/charts">
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <MuiLink underline="none" color="rgba(0, 0, 0, 0.54)">
          トレーニング記録
        </MuiLink>
      </ListItemButton>
    </NextLink>
    <NextLink href="/about">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <MuiLink underline="none" color="rgba(0, 0, 0, 0.54)">
          自己紹介
        </MuiLink>
      </ListItemButton>
    </NextLink>
    <NextLink href="/skills">
      <ListItemButton>
        <ListItemIcon>
          <ConstructionIcon />
        </ListItemIcon>
        <MuiLink underline="none" color="rgba(0, 0, 0, 0.54)">
          スキル
        </MuiLink>
      </ListItemButton>
    </NextLink>
  </React.Fragment>
);
