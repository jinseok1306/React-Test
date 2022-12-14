import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import BasicTabs from '../../components/Tabs/BasicTabs';
import FullWidthTabs from '../../components/Tabs/FullWidthTabs';
import ScrollableTabsButtonAuto from '../../components/Tabs/ScrollableTabsButtonAuto';
import ScrollableTabsButtonPrevent from '../../components/Tabs/ScrollableTabsButtonPrevent';
import CustomizedTabs from '../../components/Tabs/CustomizedTabs';
import VerticalTabs from '../../components/Tabs/VerticalTabs';

const TabsPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                        <b>BasicTabs</b><div>&nbsp;</div>
                        <BasicTabs />
                    </Grid>
                    <Grid item xs={4}>
                        <b>FullWidthTabs</b><div>&nbsp;</div>
                        <FullWidthTabs />
                    </Grid>
                    <Grid item xs={4}>
                        <b>ScrollableTabsButtonAuto</b><div>&nbsp;</div>
                        <ScrollableTabsButtonAuto />
                    </Grid>
                    <Grid item xs={4}>
                        <b>ScrollableTabsButtonPrevent</b><div>&nbsp;</div>
                        <ScrollableTabsButtonPrevent />
                    </Grid>
                    <Grid item xs={4}>
                        <b>CustomizedTabs</b><div>&nbsp;</div>
                        <CustomizedTabs />
                    </Grid>
                    <Grid item xs={4}>
                        <b>VerticalTabs</b><div>&nbsp;</div>
                        <VerticalTabs />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default TabsPage;