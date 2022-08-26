import { Container, Rating, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";

export default function Skills() {
  return (
    <Container maxWidth="lg">
      <Typography variant='h4' component='h1' py={3}>
        スキル
      </Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>TypeScript</TableCell>
            <TableCell>6ヶ月</TableCell>
            <TableCell><Rating name="read-only" value={2} readOnly /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>React</TableCell>
            <TableCell>6ヶ月</TableCell>
            <TableCell><Rating name="read-only" value={2} readOnly /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Next.js</TableCell>
            <TableCell>6ヶ月</TableCell>
            <TableCell><Rating name="read-only" value={2} readOnly /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>HTML/CSS</TableCell>
            <TableCell>3年</TableCell>
            <TableCell><Rating name="read-only" value={5} readOnly /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Sass, SCSS</TableCell>
            <TableCell>2年</TableCell>
            <TableCell><Rating name="read-only" value={5} readOnly /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>jQuery</TableCell>
            <TableCell>2年</TableCell>
            <TableCell><Rating name="read-only" value={3} readOnly /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>JavaScript</TableCell>
            <TableCell>2年</TableCell>
            <TableCell><Rating name="read-only" value={3} readOnly /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Wordpress</TableCell>
            <TableCell>3年</TableCell>
            <TableCell><Rating name="read-only" value={4} readOnly /></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  )
}
