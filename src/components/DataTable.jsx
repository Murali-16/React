import React from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
} from "@mui/material";

const DataTable = ({setOpenForm,complaintData}) => {
  return (
    <Box sx={{ p: 4, backgroundColor: "#f2f6f9", minHeight: "100vh" ,paddingLeft:'6%',paddingRight:'6%'}}>
      {/* <Box sx={{ mb: 2 }}>
        <Typography variant="h6">Complaints ( 258 )</Typography>
        <Typography variant="body2" color="text.secondary">
          View list of Complaints Below
        </Typography>
      </Box> */}

      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: 2,
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Filter Your Search"
          size="small"
          sx={{ width: "40%" }}
        />

        {/* <Stack direction="row" spacing={1} alignItems="center">
          <Chip label="Jan 12 - Mar 11" color="success" onDelete={() => {}} />
          <Chip label="Solved" color="success" onDelete={() => {}} />
          <Chip label="Himadri Boys Hostel" color="error" onDelete={() => {}} />
          <Button variant="contained" color="primary">
            + Add Complaint
          </Button>
        </Stack> */}
        <Button variant="outlined" sx={{fontSize:'18px',textAlign:'center',color:'#000',border:'1px solid #000'}} onClick={()=>{setOpenForm(true)}}> + Add Complaint</Button>
      </Box>

      <TableContainer component={Paper} sx={{ mt: 3,height:'500px'}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{fontSize:'18px',textAlign:'center'}}><b>FullName</b></TableCell>
              <TableCell sx={{fontSize:'18px',textAlign:'center'}}><b>Email</b></TableCell>
              <TableCell sx={{fontSize:'18px',textAlign:'center'}}><b>AccountNumber</b></TableCell>
              <TableCell sx={{fontSize:'18px',textAlign:'center'}}><b>Status</b></TableCell>
              <TableCell sx={{fontSize:'18px',textAlign:'center'}}><b>TypeofComplaint</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {complaintData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.fullName}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.accountNumber}</TableCell>
              <TableCell align="center">Pending</TableCell>
              <TableCell align="center">{row.complaintType}</TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DataTable;
