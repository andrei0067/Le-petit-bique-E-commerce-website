import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from "@mui/material/Typography";
import {Card, CardContent} from "@mui/material";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
    return {id, date, name, shipTo, paymentMethod, amount};
}


const rows = [
    createData(
        0,
        '16 Mar, 2019',
        'Elvis Presley',
        'Tupelo, MS',
        'VISA ⠀•••• 3719',
        312.44,
    ),
    createData(
        1,
        '16 Mar, 2019',
        'Paul McCartney',
        'London, UK',
        'VISA ⠀•••• 2574',
        866.99,
    ),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
    createData(
        3,
        '16 Mar, 2019',
        'Michael Jackson',
        'Gary, IN',
        'AMEX ⠀•••• 2000',
        654.39,
    ),
    createData(
        4,
        '15 Mar, 2019',
        'Bruce Springsteen',
        'Long Branch, NJ',
        'VISA ⠀•••• 5919',
        212.79,
    ),
];

function preventDefault(event) {
    event.preventDefault();
}

export default function Orders(props) {
    const {orders} = props
    console.log("ORDERS IN ORDERADMINGENNNNNN", orders)
    return (
        <React.Fragment>
                <Card variant="outlined">
                    <CardContent>
                        <Typography fontSize={"24px"} color={"#008CBA"} margin={'10px 0 10px 0'}>Recent
                            Orders</Typography>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>First name/Last name</TableCell>
                                    <TableCell>Ship to</TableCell>
                                    <TableCell align="right">Sale Amount</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.map((order) => (
                                    <TableRow key={order.id}>
                                        <TableCell>{order.firstName} {order.lastName}</TableCell>
                                        <TableCell>{order.address}</TableCell>
                                        <TableCell align="right">{`$${order.expDate}`}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
        </React.Fragment>
    );
}