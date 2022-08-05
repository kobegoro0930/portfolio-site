import Link from "../node_modules/next/link";

export default function Home() {
  return (
    <div>
      <h1>TOPページ</h1>
      <ul>
        <li><Link href="/about">自己紹介</Link></li>
        <li><Link href="/skills">スキル</Link></li>
        <li><Link href="/posts">日々の記録</Link></li>
      </ul>
    </div>
  )
}
