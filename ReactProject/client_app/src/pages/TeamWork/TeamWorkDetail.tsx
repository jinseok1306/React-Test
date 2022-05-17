import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu';
import { useParams } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider, Box } from '@mui/material';
import { GridColumns, DataGrid, GridToolbar, GridCellParams } from '@mui/x-data-grid';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkIcon from '@mui/icons-material/Work';
import GroupIcon from '@mui/icons-material/Group';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const columns: GridColumns = [
    { field: 'id', headerName: 'ID', width: 90, headerClassName: 'super-app-theme--header', },
    {
        field: 'teamWorkGroup',
        headerName: 'Group',
        width: 110,
        editable: false,
        headerClassName: 'super-app-theme--header',
    },
    {
        field: 'teamWorkTask',
        headerName: 'Task',
        width: 110,
        editable: false,
        headerClassName: 'super-app-theme--header',
    },
    {
        field: 'started',
        headerName: '시작일자',
        type: 'date',
        width: 140,
        editable: false,
        valueFormatter: ({ value }) => `${value?.toString().slice(0, 10)}`,
        headerClassName: 'super-app-theme--header',
    },
    {
        field: 'ended',
        headerName: '종료일자',
        type: 'date',
        width: 140,
        editable: false,
        valueFormatter: ({ value }) => `${value?.toString().slice(0, 10)}`,
        headerClassName: 'super-app-theme--header',
    },
];

let teamWork_name = "";
let teamWork_deptName = "";
let teamWork_group = "";
let teamWork_task = "";
let teamWork_started = "";

let oldTeamWorkList = [
    { id: "", teamWorkGroup: "", teamWorkTask: "", started: "", ended: "" },
];

const TeamWorkDetail = () => {
    const { id } = useParams();

    const [loading, setLoading] = useState(false);

    //페이지 렌더링 이후
    useEffect(() => {
        searchWorker();
    }, [])

    //근무자 조회
    function searchWorker() {

        const fetchUsers = async () => {
            try {
                setLoading(true);

                const response = await axios.get(
                    `https://gw.seetec.com/seeteccustom/api/TeamWork/Detail/${id}`
                );
                teamWork_name = response.data.name;
                teamWork_deptName = response.data.deptName;
                teamWork_group = response.data.teamWorkGroup;
                teamWork_task = response.data.teamWorkTask;
                teamWork_started = `${(response.data.started)?.slice(0, 10)}`

                oldTeamWorkList = response.data.oldTeamWorkList;
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };

        fetchUsers();
    }

    //데이터 가져오는 동안 로딩바 실행
    if (loading) {
        return (<div>
            <Menu />
            <div style={{ height: '80vh', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                <Spinner animation="border" role="status" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        </div>
        );
    }

    //로딩바 실행 후 화면 실행
    return (
        <div>
            <Menu />
            <div style={{ marginTop: 10, marginLeft: 20, marginRight: 20 }}>
                <h3>Team Worker Detail List Page</h3>
            </div>
            <div style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}>
                <List
                    sx={{
                        width: '100%',

                        bgcolor: 'background.paper',
                    }}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <AccountCircleIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="이름" secondary={teamWork_name} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <WorkIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="부서" secondary={teamWork_deptName} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <GroupIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Group" secondary={teamWork_group} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <AssignmentIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Task" secondary={teamWork_task} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <CalendarMonthIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="시작일자" secondary={teamWork_started} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <AccessTimeIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="이전 근무조" />
                    </ListItem>
                    <div style={{ marginLeft: 20 }}>
                        <Box
                            sx={{
                                height: 700,
                                width: 1,
                                '& .super-app-theme--header': {
                                    backgroundColor: 'rgba(255, 7, 0, 0.55)',
                                },
                            }}
                        >
                            <DataGrid
                                rows={oldTeamWorkList}
                                columns={columns}
                                sx={{
                                    '& .MuiTablePagination-displayedRows ': {
                                        marginBottom: 0
                                    },
                                }}
                                pageSize={10}
                                rowsPerPageOptions={[10]}
                                components={{ Toolbar: GridToolbar }}
                            />
                        </Box>
                    </div>
                </List>
            </div>
        </div>
    );
};

export default TeamWorkDetail;