import React, { useRef, useEffect, useState } from 'react';
import { message, Tabs, Button } from 'antd';
import SmForm from '@/components/SmForm';

export default (props) => {
	const basicFormRef = useRef();
	const safeFormRef = useRef();
	const [userInfo, setUserInfo] = useState({});

	useEffect(() => {
		basicFormRef.current.setValues({
			username: 'admin',
			name: 'admin',
			phone: '18666666666',
			email: 'example@email.com',
			nickname: '管理员',
		});
	}, []);

	return (
		<div className='w-full h-full flex flex-col p-4 bg-[#F0F2F5]'>
			<div className='bg-white w-full h-full px-4 rounded-[8px]'>
				<Tabs>
					<Tabs.TabPane
						tab='基本信息'
						key='basic'
					>
						<SmForm
							ref={basicFormRef}
							schema={{
								type: 'object',
								displayType: 'row',
								properties: {
									avatar: {
										title: '头像',
										type: 'string',
										widget: 'SmUploadAvatar',
									},
									username: {
										title: '用户名',
										type: 'string',
										placeholder: '请输入用户名',
										disabled: true,
									},
									name: {
										title: '姓名',
										type: 'string',
										placeholder: '请输入姓名',
										required: true,
									},
									phone: {
										title: '手机号',
										type: 'string',
										placeholder: '请输入手机号',
										required: true,
										format: 'phone',
										props: {
											clearable: true,
										},
									},
									email: {
										title: '邮箱',
										type: 'string',
										placeholder: '请输入邮箱',
										format: 'email',
									},
									nickname: {
										title: '昵称',
										type: 'string',
										placeholder: '请输入你猜的内容',
									},
								},
							}}
							formProps={{
								labelWidth: 70,
							}}
						/>
						<Button
							type='primary'
							onClick={async () => {
								const formData = await basicFormRef.current.validateFields();
								const editData = { userId: userInfo?.userId, ...formData };
								console.log('editData :', editData);
								// const editRes = await editUserInfo(editData);
								// editRes?.ok
								// 	? message.success('更新信息成功')
								// 	: message.error(editRes.msg);
							}}
						>
							更新个人信息
						</Button>
					</Tabs.TabPane>
					<Tabs.TabPane
						tab='安全信息'
						key='safe'
					>
						<SmForm
							ref={safeFormRef}
							schema={{
								type: 'object',
								displayType: 'row',
								properties: {
									password: {
										title: '原始密码',
										type: 'string',
										// widget: 'password',
										placeholder: '请输入原始密码',
										required: true,
									},
									newpassword1: {
										title: '新密码',
										type: 'string',
										placeholder: '请输入新密码',
										required: true,
										rules: [
											{
												min: 8,
												message: '密码长度不能小于6位',
											},
											{
												max: 20,
												message: '密码长度不能大于20位',
											},
											{
												pattern:
													/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+[\]{}|;:'",.<>/?]).{8,}$/,
												message: '密码必须包含大小写字母和数字',
											},
										],
									},
									newpassword2: {
										title: '确认密码',
										type: 'string',
										dependencies: ['newpassword1'],
										placeholder: '请再次输入新密码',
										required: true,
										rules: [
											{
												validator: (_, value, { form }) => {
													const oldPassword =
														form.getValueByPath('newpassword1');
													const isSame = !value || oldPassword === value;
													return isSame ? true : false;
												},
												message: '你输入的两个密码不匹配',
											},
										],
									},
								},
							}}
							formProps={{
								labelWidth: 90,
							}}
						/>
						<Button
							type='primary'
							onClick={async () => {
								const formData = await safeFormRef.current.validateFields();
								const editData = { userId: userInfo?.userId, ...formData };
								console.log('editData :', editData);
								// const editRes = await resetPassword(editData);
								// editRes?.ok
								// 	? message.success('更新密码成功')
								// 	: message.error(editRes.msg);
								// editRes?.ok && safeFormRef.current.resetFields();
							}}
						>
							更新账户密码
						</Button>
					</Tabs.TabPane>
				</Tabs>
			</div>
		</div>
	);
};
