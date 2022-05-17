import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import BasicButtons from '../../components/Button/BasicButtons';
import TextButtons from '../../components/Button/TextButtons';
import OutlinedButtons from '../../components/Button/OutlinedButtons';
import UploadButtons from '../../components/Button/UploadButtons';
import IconLabelButtons from '../../components/Button/IconLabelButtons';
import IconButtons from '../../components/Button/IconButtons';

const ButtonPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <b>Basic Buttons</b>
                        <BasicButtons />
                    </Grid>
                    <Grid item xs={3}>
                        <b>Text Buttons</b>
                        <TextButtons />
                    </Grid>
                    <Grid item xs={3}>
                        <b>Outlined Buttons</b>
                        <OutlinedButtons />
                    </Grid>
                    <Grid item xs={3}>
                        <b>Upload Buttons</b>
                        <UploadButtons />
                    </Grid>
                    <Grid item xs={3}>
                        <b>IconLabelButtons</b>
                        <IconLabelButtons />
                    </Grid>
                    <Grid item xs={3}>
                        <b>IconButtons</b>
                        <IconButtons />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default ButtonPage;