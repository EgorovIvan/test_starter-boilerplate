import React, {Component} from 'react'
import {Card, Table, Tag, Tooltip, message, Button} from 'antd';
import {EyeOutlined, DeleteOutlined} from '@ant-design/icons';
import moment from 'moment';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import userData from "assets/data/user-list.data.json";
import axios from "axios";


export class UserList extends Component {

    state = {
        users: [],
        userProfileVisible: false,
        selectedUser: null
    }

    componentDidMount() {

        axios.get('https://jsonplaceholder.typicode.com/users/')
            .then((res) => {
                this.setState({users: res.data})
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
            selectedUser: userInfo
        });
    };

    closeUserProfile = () => {
        this.setState({
            userProfileVisible: false,
            selectedUser: null
        });
    }

    render() {
        const {users, userProfileVisible, selectedUser} = this.state;

        const tableColumns = [
            {
                title: 'User',
                dataIndex: 'name',
                render: (_, record) => (
                    <div className="d-flex">
                        <AvatarStatus
                            src={process.env.PUBLIC_URL + "/public/img/avatars/thumb-11.jpg"}
                            name={record.name}
                            subTitle={record.email}/>
                    </div>
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
                <Table columns={tableColumns} dataSource={users} rowKey='id'/>
                <UserView data={selectedUser} visible={userProfileVisible} close={() => {
                    this.closeUserProfile()
                }}/>
            </Card>
        )
    }
}

export default UserList
