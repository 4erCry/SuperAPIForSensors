import React, {Component} from "react";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default class Table extends Component {
    render() {
        return (
            <div>
                <BootstrapTable data={this.props.data}>
                    <TableHeaderColumn
                        isKey dataField='time'
                        dataAlign='center'
                        headerAlign="center"
                        width="50%">
                        Дата и время
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        dataField='value'
                        dataAlign='center'
                        headerAlign="center">
                        Значение
                    </TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}