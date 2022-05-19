import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import BasicList from '../../components/List/BasicList';
import NestedList from '../../components/List/NestedList';
import FolderList from '../../components/List/FolderList';
import SelectedListItem from '../../components/List/SelectedListItem';
import AlignItemsList from '../../components/List/AlignItemsList';

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
                    <Grid item xs={3}>
                        <b>NestedList</b><div>&nbsp;</div>
                        <NestedList />
                    </Grid>
                    <Grid item xs={3}>
                        <b>FolderList</b><div>&nbsp;</div>
                        <FolderList />
                    </Grid>
                    <Grid item xs={3}>
                        <b>SelectedListItem</b><div>&nbsp;</div>
                        <SelectedListItem />
                    </Grid>
                    <Grid item xs={3}>
                        <b>AlignItemsList</b><div>&nbsp;</div>
                        <AlignItemsList />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default ListPage;