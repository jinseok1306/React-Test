import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import BasicTable from '../../components/Table/BasicTable';
import DataTable from '../../components/Table/DataTable';
import DenseTable from '../../components/Table/DenseTable';
import EnhancedTable from '../../components/Table/EnhancedTable';
import CollapsibleTable from '../../components/Table/CollapsibleTable';

const TablePage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <b>BasicTable</b><div>&nbsp;</div>
                        <BasicTable />
                    </Grid>
                    <Grid item xs={6}>
                        <b>DataTable</b><div>&nbsp;</div>
                        <DataTable />
                    </Grid>
                    <Grid item xs={6}>
                        <b>DenseTable</b><div>&nbsp;</div>
                        <DenseTable />
                    </Grid>
                    <Grid item xs={6}>
                        <b>EnhancedTable</b><div>&nbsp;</div>
                        <EnhancedTable />
                    </Grid>
                    <Grid item xs={6}>
                        <b>CollapsibleTable</b><div>&nbsp;</div>
                        <CollapsibleTable />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default TablePage;