import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Transaction } from "../../../database/Home/newMember";

const TransactionUsers = () => {
  return (
    <>
      <TableContainer
        className="overflow-x-auto font-bold flex-1 w-100 rounded-xl h-fit p-5"
        component={Paper}
      >
        <h1>Latest Transactions</h1>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <p className="text-xs font-bold">Customer</p>
              </TableCell>
              <TableCell>
                <p className="text-xs font-bold">Date </p>
              </TableCell>
              <TableCell>
                <p className="text-xs font-bold">Amount</p>
              </TableCell>
              <TableCell>
                <p className="text-xs font-bold">Status </p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Transaction.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell scope="row" className="text-xs">
                  <div class="w-max flex flex-row items-center gap-2">
                    <img
                      className="rounded-3xl"
                      src={item.image}
                      width="20"
                      height="20"
                      alt="image"
                    />
                    <p class="font-bold  text-xs">{item.name}</p>
                  </div>
                </TableCell>
                <TableCell class="text-xs font-light">{item.date}</TableCell>
                <TableCell className="text-xs">
                  <p className="text-xs">${item.amount} </p>
                </TableCell>
                <TableCell>
                  <div
                    className={
                      item.status == "Rejected"
                        ? "p-1 rounded-xl font-medium text-xs text-red-700 bg-red-100"
                         : item.status == "Approved" ? "font-medium text-xs bg-green-100 p-1 rounded-xl text-green-700"
                         : "font-medium text-xs bg-blue-100 p-1 rounded-xl text-blue-700"
                    }
                  >
                    {item.status}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TransactionUsers;
