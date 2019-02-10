import React from "react";
import PropTypes from "prop-types";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const AvatarHeader = props => {
    const {
        label,
        src,
        subheader,
        title
    } = props;

    return(
        <Card>
            <CardHeader
                title="コンソール"/>
            <CardContent>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Enviroment
                            </TableCell>
                            <TableCell align="right">Ganache</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Enviroment
                            </TableCell>
                            <TableCell align="right">Ganache</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Enviroment
                            </TableCell>
                            <TableCell align="right">Ganache</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

AvatarHeader.propTypes = {
    label: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    subheader: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default AvatarHeader;