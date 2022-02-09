import React, {Component} from 'react';
import {Avatar, Drawer, Divider} from 'antd';


export class UserView extends Component {
    render() {
        const {data, visible, close, img} = this.props;

        return (
            <Drawer
                width={300}
                placement="right"
                onClose={close}
                closable={false}
                visible={visible}
            >
                <div className="text-center mt-3">
                    <Avatar size={80} src={process.env.PUBLIC_URL + img}/>
                    <h3 className="mt-2 mb-0">{data?.name}</h3>
                </div>
                <Divider dashed/>
                <div className="">
                    <h6 className="text-muted text-uppercase mb-3">ADDRESS</h6>
                    <p>
                        <span className="ml-3 text-dark">street: {data?.address.street}</span>
                    </p>
                    <p>
                        <span className="ml-3 text-dark">suite: {data?.address.suite}</span>
                    </p>
                    <p>
                        <span className="ml-3 text-dark">city: {data?.address.city}</span>
                    </p>
                    <p>
                        <span className="ml-3 text-dark">zipcode: {data?.address.zipcode}</span>
                    </p>
                </div>
                <div className="mt-5">
                    <h6 className="text-muted text-uppercase mb-3">COMPANY</h6>
                    <p>
                        <span className="ml-3 text-dark">company: {data?.company.name}</span>
                    </p>
                    <p>
                        <span className="ml-3 text-dark">{data?.company.catchPhrase}</span>
                    </p>
                    <p>
                        <span className="ml-3 text-dark">{data?.company.bs}</span>
                    </p>
                </div>
            </Drawer>
        )
    }
}

export default UserView
