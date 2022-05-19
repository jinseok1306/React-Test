﻿import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import SimpleDialogDemo from '../../components/Dialog/SimpleDialogDemo';
import AlertDialog from '../../components/Dialog/AlertDialog';
import AlertDialogSlide from '../../components/Dialog/AlertDialogSlide';
import FormDialog from '../../components/Dialog/FormDialog';

const DialogPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <b>SimpleDialogDemo</b><div>&nbsp;</div>
                        <SimpleDialogDemo />
                    </Grid>
                    <Grid item xs={3}>
                        <b>AlertDialog</b><div>&nbsp;</div>
                        <AlertDialog />
                    </Grid>
                    <Grid item xs={3}>
                        <b>AlertDialogSlide</b><div>&nbsp;</div>
                        <AlertDialogSlide />
                    </Grid>
                    <Grid item xs={3}>
                        <b>FormDialog</b><div>&nbsp;</div>
                        <FormDialog />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default DialogPage;