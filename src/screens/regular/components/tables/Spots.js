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
import chart from '../../../../images/svg/decorative/green-chart.svg';
import btc from '../../../../images/svg/coins/bitcoin-btc.svg'
import etherum from '../../../../images/svg/coins/ethereum-eth.svg'
import xrp from '../../../../images/svg/coins/xrp-xrp.svg'
import ftt from '../../../../images/svg/coins/ftx-token-ftt.svg'

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
    logo: btc,
    name: "BIT/USDT",
    price: 2990,
    twofourChange: +3.33,
    twofourVol: "82.64M",
    chart: chart,
    trade: <Button sx={{background: "#e9ebfd", color:'#237bef', fontWeight:"bold"}} variant="contained">Trade</Button>,
  },
  {
    logo: btc,
    name: "BIT/USDT",
    price: 2990,
    twofourChange: +1.64,
    twofourVol: "82.64M",
    chart: chart,
    trade: <Button variant="contained">Trade</Button>,
  },
  {
    logo: etherum,
    name: "ETH/USDT",
    price: 2990,
    twofourChange: +20.64,
    twofourVol: "82.64M",
    chart: chart,
    trade: <Button variant="contained">Trade</Button>,
  },
  {
    logo: xrp,
    name: "XRP/USDT",
    price: 2990,
    twofourChange: -10.16,
    twofourVol: "82.64M",
    chart: chart,
    trade: <Button variant="contained">Trade</Button>,
  },
  {
    logo: xrp,
    name: "LUNA/BNB",
    price: 2990,
    twofourChange: +9.64,
    twofourVol: "82.64M",
    chart: chart,
    trade: <Button variant="contained">Trade</Button>,
  },
  {
    logo: ftt,
    name: "LUNA/BNB",
    price: 2990,
    twofourChange: -10.16,
    twofourVol: "82.64M",
    chart: chart,
    trade: <Button variant="contained">Trade</Button>,
  },
  {
    logo: ftt,
    name: "FTT/BNB",
    price: 2990,
    twofourChange: +4.5,
    twofourVol: "82.64M",
    chart: chart,
     trade: <Button variant="contained">Trade</Button>,
  },
  {
    logo: btc,
    name: "FTT/BNB",
    price: 2990,
    twofourChange: +4.5,
    twofourVol: "82.64M",
    chart: chart,
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
                <TableCell scope="row">
                  <div class="flex items.center pl-2 gap-2">
                    <img src={row.logo} alt={row.logo}/>
                    <p class="font-medium">{row.name}</p>
                  </div>
                </TableCell>
                <TableCell class="text-right font-medium">{row.price}</TableCell>
                <TableCell class={row.twofourChange <= 0 ? "text-red-500 text-right" : "text-green-500 text-right" }>{row.twofourChange}%</TableCell>
                <TableCell class="text-right font-medium" >{row.twofourVol}</TableCell>
                <TableCell class="text-right font-medium">
                  <img src={row.chart} alt="chart"/>
                </TableCell>
                <TableCell align="right">{row.trade}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
