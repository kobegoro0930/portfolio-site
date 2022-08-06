import Link from "../node_modules/next/link";
import Button from '@mui/material/Button';
import { Typography } from "../node_modules/@mui/material/index";
import AccessibilityIcon from '@mui/icons-material/Accessibility';

export default function Home() {
  return (
    <div>
      <Typography variant="h1" p={3}>TOPページ</Typography>
      <ul>
        <li><Link href="/about">自己紹介</Link></li>
        <li><Link href="/skills">スキル</Link></li>
        <li><Link href="/posts">日々の記録</Link></li>
      </ul>
      <Button variant="text"><AccessibilityIcon />Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  )
}
