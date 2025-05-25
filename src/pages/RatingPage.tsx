import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { data } from '../static/data';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { Player } from '../types/player';

function RatingPage() {
    const tableData: Player[] = data
    const navigate = useNavigate()

    const value = tableData[5].gamesHistoryNew

    const handleRedirect = (id: number) => {
        navigate(`/player/${id}`)
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell width={2}>№</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">elo</TableCell>
                            <TableCell align="left">game history</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((row, i) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell width={2}>{i+1}</TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">{row.elo}</TableCell>
                                <TableCell align="left">
                                    {row.gamesHistoryNew && row.gamesHistoryNew.length > 0 ? (
                                        <Button onClick={() => handleRedirect(row.id)}>view history</Button>
                                    ) : "<empty>"}
                                </TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default RatingPage
