import { Container, Rating, Table, TableBody, TableCell, TableRow } from "../../node_modules/@mui/material/index";

export default function Skills() {
  return (
    <Container maxWidth="lg">
      <h1>スキル</h1>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>TypeScript</TableCell>
            <TableCell><Rating name="read-only" value={2} readOnly /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>React</TableCell>
            <TableCell><Rating name="read-only" value={2} readOnly /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Next.js</TableCell>
            <TableCell><Rating name="read-only" value={2} readOnly /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>HTML/CSS</TableCell>
            <TableCell><Rating name="read-only" value={5} readOnly /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Sass, SCSS</TableCell>
            <TableCell><Rating name="read-only" value={5} readOnly /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>jQuery</TableCell>
            <TableCell><Rating name="read-only" value={3} readOnly /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>JavaScript</TableCell>
            <TableCell><Rating name="read-only" value={3} readOnly /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Wordpress</TableCell>
            <TableCell><Rating name="read-only" value={4} readOnly /></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  )
}
