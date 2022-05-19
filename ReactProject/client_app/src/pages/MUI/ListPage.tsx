import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import BasicList from '../../components/List/BasicList';

const ListPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <b>BasicList</b><div>&nbsp;</div>
                        <BasicList />
                    </Grid>                    
                </Grid>
            </div>
        </div>
    );
};

export default ListPage;