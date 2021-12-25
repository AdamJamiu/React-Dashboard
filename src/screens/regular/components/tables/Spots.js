import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button
} from "@mui/material";

const tableHeaders = [
  "Name",
  "Price",
  "24H Change",
  "24H Volume",
  "Chart",
  "Trade",
];

const bodyData = [
  {
    name: "BIT/USDT",
    price: "2, 990",
    twofourChange: "+4.5",
    twofourVol: "-1.4",
    chart: "../../../../images/svg/decorative/green-chart.svg",
    trade: <Button variant="contained">Trade</Button>,
  },
  {
    name: "BIT/USDT",
    price: "2, 990",
    twofourChange: "+4.5",
    twofourVol: "-1.4",
    chart: "",
    trade: <Button variant="contained">Trade</Button>,
  },
  {
    name: "ETH/USDT",
    price: "2, 990",
    twofourChange: "+4.5",
    twofourVol: "-1.4",
    chart: "",
    trade: <Button variant="contained">Trade</Button>,
  },
  {
    name: "XRP/USDT",
    price: "2, 990",
    twofourChange: "+4.5",
    twofourVol: "-1.4",
    chart: "",
    trade: <Button variant="contained">Trade</Button>,
  },
  {
    name: "LUNA/BNB",
    price: "2, 990",
    twofourChange: "+4.5",
    twofourVol: "-1.4",
    chart: "",
    trade: <Button variant="contained">Trade</Button>,
  },
  {
    name: "LUNA/BNB",
    price: "2, 990",
    twofourChange: "+4.5",
    twofourVol: "-1.4",
    chart: "",
    trade: <Button variant="contained">Trade</Button>,
  },
  {
    name: "FTT/BNB",
    price: "2, 990",
    twofourChange: "+4.5",
    twofourVol: "-1.4",
    chart: "",
    trade: <Button variant="contained">Trade</Button>,
  },
  {
    name: "FTT/BNB",
    price: "2, 990",
    twofourChange: "+4.5",
    twofourVol: "-1.4",
    chart: "",
    trade: <Button variant="contained">Trade</Button>,
  },
];

export default function Spot() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">24H Change</TableCell>
            <TableCell align="right">24H Volume(USD)</TableCell>
            <TableCell align="right">Chart</TableCell>
            <TableCell align="right">Trade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bodyData.map((row, idx) => (
            <TableRow
            hover={true}
              key={idx}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.twofourChange}</TableCell>
                <TableCell align="right">{row.twofourVol}</TableCell>
                <TableCell align="right">
                  <img src={row.chart} />{" "}
                </TableCell>
                <TableCell align="right">{row.trade}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
