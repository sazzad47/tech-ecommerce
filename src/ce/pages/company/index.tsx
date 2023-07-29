import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ceo from "../../assets/profile.svg";

const Company = () => {
  const headers = ["Photo", "Name", "Position", "Phone", "Email", "Address"];
  return (
    <div className="flex flex-col relative pb-[5rem] bg-yellow-500">
      <div className="w-full px-[1rem] md:px-[5rem] flex flex-col gap-5 items-center">
        <div className="w-full text-center text-gray-900 my-[3rem]">
          <div className="one">
            <h1 className="text-2xl sm:text-4xl">Our Company</h1>
          </div>
          <TableContainer className="bg-gray-100 mt-[2rem]" component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead className="bg-yellow-600">
                <TableRow>
                  {headers.map((header, index) => (
                    <TableCell key={index} className="text-white" align="left">
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell className="text-gray-900">
                    <img src={ceo} style={{ width: 56, height: 56 }} alt="" />
                  </TableCell>
                  <TableCell className="text-gray-900">Sazzad Hossen</TableCell>
                  <TableCell className="text-gray-900">CEO</TableCell>
                  <TableCell className="text-gray-900">0030000000</TableCell>
                  <TableCell className="text-gray-900">
                    example@example.com
                  </TableCell>
                  <TableCell className="text-gray-900">
                    Dhaka, Bangladesh
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Company;
