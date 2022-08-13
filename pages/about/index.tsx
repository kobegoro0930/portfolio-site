import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "../../node_modules/@mui/material/index";
import Link from "../../node_modules/next/link";

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
        2018年〜Web業界へ。ディレクターからスタートし、現在は主にコーダーとしてお仕事をさせていただいています。
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
              <Typography variant="body2" color="text.secondary">
                担当：コーディング<br />
                技術：WordPress・SCSS
              </Typography>
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
              <Typography variant="body2" color="text.secondary">
                担当：コーディング<br />
                技術：WordPress・SCSS
              </Typography>
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
              <Typography variant="body2" color="text.secondary">
                担当：コーディング<br />
                技術：SCSS
              </Typography>
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
