import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import BasicBreadcrumbs from '../../components/Breadcumbs/BasicBreadcrumbs';
import CustomSeparator from '../../components/Breadcumbs/CustomSeparator';
import IconBreadcrumbs from '../../components/Breadcumbs/IconBreadcrumbs';
import CollapsedBreadcrumbs from '../../components/Breadcumbs/CollapsedBreadcrumbs';
import CustomizedBreadcrumbs from '../../components/Breadcumbs/CustomizedBreadcrumbs';

const BreadcrumbsPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <b>BasicBreadcrumbs</b><div>&nbsp;</div>
                        <BasicBreadcrumbs />
                    </Grid>
                    <Grid item xs={3}>
                        <b>CustomSeparator</b><div>&nbsp;</div>
                        <CustomSeparator />
                    </Grid>
                    <Grid item xs={3}>
                        <b>IconBreadcrumbs</b><div>&nbsp;</div>
                        <IconBreadcrumbs />
                    </Grid>
                    <Grid item xs={3}>
                        <b>CollapsedBreadcrumbs</b><div>&nbsp;</div>
                        <CollapsedBreadcrumbs />
                    </Grid>
                    <Grid item xs={3}>
                        <b>CustomizedBreadcrumbs</b><div>&nbsp;</div>
                        <CustomizedBreadcrumbs />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default BreadcrumbsPage;