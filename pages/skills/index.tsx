import { Container, Rating, Table, TableHead, TableBody, TableCell, TableRow, Typography } from "@mui/material";

export default function Skills() {
  return (
    <Container maxWidth="lg">
      <Typography variant='h4' component='h1' py={3} sx={{fontWeight: "800"}}>
        スキル
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>技術</TableCell>
            <TableCell>使用期間</TableCell>
            <TableCell>熟練度</TableCell>
            <TableCell>できること</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>TypeScript</TableCell>
            <TableCell>6ヶ月</TableCell>
            <TableCell><Rating name="read-only" value={2} readOnly /></TableCell>
            <TableCell>
              基本的な型定義
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>React</TableCell>
            <TableCell>6ヶ月</TableCell>
            <TableCell><Rating name="read-only" value={2} readOnly /></TableCell>
            <TableCell>
              JSX<br />
              フック（useState, useEffect, useContextなど）<br />
              UIライブラリ（Material UI）
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Next.js</TableCell>
            <TableCell>6ヶ月</TableCell>
            <TableCell><Rating name="read-only" value={2} readOnly /></TableCell>
            <TableCell>
              ルーティング<br />
              microCMSとの連携
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>HTML/CSS</TableCell>
            <TableCell>3年</TableCell>
            <TableCell><Rating name="read-only" value={5} readOnly /></TableCell>
            <TableCell>
              デザインに合わせたコーディング<br />
              SEOを意識したコーディング
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Sass, SCSS</TableCell>
            <TableCell>2年</TableCell>
            <TableCell><Rating name="read-only" value={5} readOnly /></TableCell>
            <TableCell>
              ファイル分割<br />
              mixin
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>JavaScript, jQuery</TableCell>
            <TableCell>2年</TableCell>
            <TableCell><Rating name="read-only" value={3} readOnly /></TableCell>
            <TableCell>
              DOM操作<br />
              各種ライブラリの導入とカスタマイズ<br />
              非同期処理
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Wordpress</TableCell>
            <TableCell>3年</TableCell>
            <TableCell><Rating name="read-only" value={4} readOnly /></TableCell>
            <TableCell>
              テーマ作成<br />
              カスタム投稿・タクソノミー<br />
              その他カスタマイズ色々
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  )
}
