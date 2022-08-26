import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { Table, TableBody, TableCell, TableRow } from "../../node_modules/@mui/material/index";

export default function About() {
  return (
    <Container maxWidth="lg">
      <Typography variant='h4' component='h1' py={3}>
        自己紹介
      </Typography>
      <Typography variant='h5' component='h2' py={3}>
        経歴
      </Typography>
      <Typography pb={5}>
        元々は広告・人材・飲食など、いろいろな業界でお仕事をしてきました。<br />
        2018年〜Web業界へ。ディレクターからスタートし、現在は主にWebサイト・LPの制作をしています。
      </Typography>
      <Typography variant='h5' component='h2' py={3}>
        制作例
      </Typography>
      <Grid container>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="/hp_kys.webp"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                HP（コーポレートサイト）
              </Typography>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>担当</TableCell>
                    <TableCell>コーディング・WordPress実装</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>技術</TableCell>
                    <TableCell>WordPress・HTML・SCSS</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>制作意図</TableCell>
                    <TableCell>シンプルながらオリジナリティのあるWebサイトにしたいとのご要望だった為、パララックスを用いたり、コンテンツ幅を複雑に構成するなどをして、印象に残るサイトになるよう制作をしました。</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a href="https://kys-consulting.com/" target="_blank" rel="noopener noreferrer">OPEN SITE</a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="/om_amore.webp"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                OM（オウンドメディア）
              </Typography>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>担当</TableCell>
                    <TableCell>コーディング・WordPress実装</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>技術</TableCell>
                    <TableCell>WordPress・HTML・SCSS</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>制作意図</TableCell>
                    <TableCell>メディアサイトのリニューアル依頼。SEO向上の為、導線を意識した仕様を盛り込みました。</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a href="https://amore.escrit.jp/howto/" target="_blank" rel="noopener noreferrer">OPEN SITE</a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="/lp_amore.webp"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                LP（ランディングページ）
              </Typography>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>担当</TableCell>
                    <TableCell>コーディング</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>技術</TableCell>
                    <TableCell>HTML・SCSS</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>制作意図</TableCell>
                    <TableCell>短納期での依頼でしたが、デザインに忠実に制作しました。JSでシンプルでさりげない動きをつけました。</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a href="https://amore.escrit.jp/lp/" target="_blank" rel="noopener noreferrer">OPEN SITE</a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

    </Container>
  )
}
