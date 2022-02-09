import React, {Component} from 'react'
import {Card, Table, Tooltip, message, Button} from 'antd';
import {EyeOutlined, DeleteOutlined} from '@ant-design/icons';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import axios from "axios";
import Loading from "../../../../../components/shared-components/Loading";
import EditProfile from "./EditProfile";
import userData from "assets/data/user-list.data.json";

export class ClientList extends Component {

    state = {
        users: [],
        userProfileVisible: false,
        editProfileVisible: false,
        selectedUser: null,
        downloadDataUser: null,
        userImage: userData
    }

    //Получение данных по API
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users/')
            .then((res) => {
                setTimeout(() => this.setState({users: res.data}), 1000)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    deleteUser = userId => {
        this.setState({
            users: this.state.users.filter(item => item.id !== userId),
        })
        message.success({content: `Deleted user ${userId}`, duration: 2});
    }

    showUserProfile = userInfo => {
        this.setState({
            userProfileVisible: true,
            selectedUser: userInfo,
            userImg: userData[userInfo.id].img
        });
    };

    closeUserProfile = () => {
        this.setState({
            userProfileVisible: false,
            selectedUser: null,
            userImg: ""
        });
    }

    showEditProfile = userInfo => {
        this.setState({
            editProfileVisible: true,
            downloadDataUser: userInfo,
            editImg: userData[userInfo.id].img
        });
    }

    closeEditProfile = () => {
        this.setState({
            editProfileVisible: false,
            downloadDataUser: null,
            editImg: ""
        });
    }

    render() {
        const {
            users, userImage, userProfileVisible, selectedUser, userImg,
            editProfileVisible, downloadDataUser, editImg
        } = this.state;

        const tableColumns = [
            {
                title: 'User',
                dataIndex: 'name',
                render: (_, record) => (
                    <a className="d-flex" onClick={() => {
                        this.showEditProfile(record)
                    }}>
                        <AvatarStatus
                            src={process.env.PUBLIC_URL + userImage[record.id].img}
                            name={record.name}
                            subTitle={record.email}/>
                    </a>

                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.name.toLowerCase();
                        b = b.name.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
            },
            {
                title: 'Username',
                dataIndex: 'username',
                sorter: {
                    compare: (a, b) => {
                        a = a.username.toLowerCase();
                        b = b.username.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
            },
            {
                title: 'Phone',
                dataIndex: 'phone',
                sorter: {
                    compare: (a, b) => {
                        a = a.phone.toLowerCase();
                        b = b.phone.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
            },
            {
                title: 'Website',
                dataIndex: 'website',
                sorter: {
                    compare: (a, b) => {
                        a = a.website.toLowerCase();
                        b = b.website.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
            },
            {
                title: '',
                dataIndex: 'actions',
                render: (_, elm) => (
                    <div className="text-right">
                        <Tooltip title="View">
                            <Button type="primary" className="mr-2" icon={<EyeOutlined/>} onClick={() => {
                                this.showUserProfile(elm)
                            }} size="small"/>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <Button danger icon={<DeleteOutlined/>} onClick={() => {
                                this.deleteUser(elm.id)
                            }} size="small"/>
                        </Tooltip>
                    </div>
                )
            }
        ];
        return (
            <Card bodyStyle={{'padding': '0px'}}>
                {(users.length == 0) && <Loading/>}
                {!editProfileVisible ?
                    <Table columns={tableColumns} dataSource={users} rowKey='id'/> :
                    <EditProfile data={downloadDataUser} img={editImg}
                                 close={() => {
                                     this.closeEditProfile()
                                 }}
                    />}
                <UserView data={selectedUser} visible={userProfileVisible} img={userImg} close={() => {
                    this.closeUserProfile()
                }}/>
            </Card>
        )
    }
}

export default ClientList
