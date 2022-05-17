import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu';
import { Link } from 'react-router-dom';
import { GridColumns, DataGrid, GridToolbar, GridCellParams } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

const columns: GridColumns = [
    { field: 'id', headerName: 'ID', width: 90, headerClassName: 'super-app-theme--header', },
    {
        field: 'name',
        headerName: '이름',
        width: 150,
        editable: false,
        headerClassName: 'super-app-theme--header',
        renderCell: (params) => (
            <Link to={"/TeamWork/Detail/" + params.row.id} style={{ color: 'black', textDecoration: 'none' }}>{params.row.name}</Link>
        ),
    },
    {
        field: 'deptName',
        headerName: '부서명',
        width: 150,
        editable: false,
        headerClassName: 'super-app-theme--header',
    },
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
];

let rows = [
    { id: "", name: "", deptName: "", teamWorkGroup: "", teamWorkTask: "", started: "" },
];

const TeamWorkList = () => {
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
                    'https://gw.seetec.com/seeteccustom/api/TeamWork/List'
                );
                rows = response.data;
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
                <h3>Team Worker List Page</h3>
            </div>
            <div style={{ height: 700, marginTop: 20, marginLeft: 20, marginRight: 20 }}>
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
                        rows={rows}
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
        </div>
    );
};

export default TeamWorkList;