import React, { Component} from 'react'
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { SettingOutlined, DeleteOutlined } from '@ant-design/icons';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import fetchData from "assets/data/user-list.data.js";
import { useLocation, Link } from 'react-router-dom';
import { redirect } from 'react-router-dom';



//let userData = []

function UserListWrapper() {
	const history = useLocation().pathname;

	return <UserList history={history} />;
  }

 class UserList extends Component {
	buttonRef = React.createRef();

	componentDidMount() {
		fetchData()
  		.then(data => {
    		this.setState({
				users: data,
			})
  		})
 		.catch(error => {
    		console.log('Error:', error);
  		});
	  }

	state = {
		users: null,
		userProfileVisible: false,
		selectedUserId: 3
	}

	deleteUser = userId => {
		this.setState({
			users: this.state.users.filter(item => item.id !== userId),
		})
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
		//console.log(this.state)
	}

	showUserProfile = userId => {
		// this.setState({
		// 	userProfileVisible: true,
		// })
		//return redirect("/app/dashboards")
		this.setState({
			selectedUserId: userId,
		})


		setTimeout(()=>this.buttonRef.current.click(),0)
		
			//<Link to={'/app/dashboards/clients/list/edit-profile/'+userId}></Link>
		
	};
	
	// closeUserProfile = () => {
	// 	this.setState({
	// 		userProfileVisible: false,
	// 		selectedUserId: null
    // });
	// }

	render() {
		const { users, userProfileVisible, selectedUserId } = this.state;

		const tableColumns = [
			{
				title: 'User',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex">
						<AvatarStatus src={record.img} name={record.name} subTitle={record.email}/>
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
				dataIndex: 'phone'
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
					<div className="text-right d-flex justify-content-end">
						<Tooltip title="Edit profile">
						<Button id='btn' type="primary" className="mr-2" icon={<SettingOutlined />} onClick={() => {this.showUserProfile(elm.id)}} size="small"/>
						<Link ref={this.buttonRef} to={this.props.history+'/edit-profile/'+selectedUserId}></Link>
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={()=> {this.deleteUser(elm.id)}} size="small"/>
						</Tooltip>
					</div>
				)
			}
		];
		return (
			<Card bodyStyle={{'padding': '0px'}}>
				<div className="table-responsive">
					<Table columns={tableColumns} dataSource={users} rowKey='id' />
				</div>
				{/* <EditProfile data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
			</Card>
		)
	}
}

export default UserListWrapper;
