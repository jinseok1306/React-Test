import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import ListDividers from '../../components/Divider/ListDividers';
import InsetDividers from '../../components/Divider/InsetDividers';
import SubheaderDividers from '../../components/Divider/SubheaderDividers';
import MiddleDividers from '../../components/Divider/MiddleDividers';
import DividerText from '../../components/Divider/DividerText';
import VerticalDividers from '../../components/Divider/VerticalDividers';
import VerticalDividerText from '../../components/Divider/VerticalDividerText';

const DividerPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <b>ListDividers</b><div>&nbsp;</div>
                        <ListDividers />
                    </Grid>
                    <Grid item xs={3}>
                        <b>InsetDividers</b><div>&nbsp;</div>
                        <InsetDividers />
                    </Grid>
                    <Grid item xs={3}>
                        <b>SubheaderDividers</b><div>&nbsp;</div>
                        <SubheaderDividers />
                    </Grid>
                    <Grid item xs={3}>
                        <b>MiddleDividers</b><div>&nbsp;</div>
                        <MiddleDividers />
                    </Grid>
                    <Grid item xs={6}>
                        <b>DividerText</b><div>&nbsp;</div>
                        <DividerText />
                    </Grid>
                    <Grid item xs={3}>
                        <b>VerticalDividers</b><div>&nbsp;</div>
                        <VerticalDividers />
                    </Grid>
                    <Grid item xs={3}>
                        <b>VerticalDividerText</b><div>&nbsp;</div>
                        <VerticalDividerText />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default DividerPage;