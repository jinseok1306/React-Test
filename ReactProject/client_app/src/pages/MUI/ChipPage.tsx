import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import BasicChips from '../../components/Chip/BasicChips';
import DeletableChips from '../../components/Chip/DeletableChips';
import CustomDeleteIconChips from '../../components/Chip/CustomDeleteIconChips';
import AvatarChips from '../../components/Chip/AvatarChips';

const ChipPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <b>BasicChips</b><div>&nbsp;</div>
                        <BasicChips />
                    </Grid>
                    <Grid item xs={3}>
                        <b>DeletableChips</b><div>&nbsp;</div>
                        <DeletableChips />
                    </Grid>
                    <Grid item xs={3}>
                        <b>CustomDeleteIconChips</b><div>&nbsp;</div>
                        <CustomDeleteIconChips />
                    </Grid>
                    <Grid item xs={3}>
                        <b>AvatarChips</b><div>&nbsp;</div>
                        <AvatarChips />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default ChipPage;