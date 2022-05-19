import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import TransferList from '../../components/TransferList/TransferList';

const TransferListPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                        <b>TransferList</b>
                        <TransferList />
                    </Grid>                    
                </Grid>
            </div>
        </div>
    );
};

export default TransferListPage;