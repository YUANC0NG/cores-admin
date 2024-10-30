import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { history } from 'umi';

export default () => {
	return (
		<div
			className='w-full h-full flex items-center justify-center min-h-screen bg-gray-100'
			style={{
				backgroundImage:
					'url(https://static.tdesign.tencent.com/starter/react/assets/assets-login-bg-white.439b0654.png)',
				backgroundSize: 'contain',
			}}
		>
			<div className='w-full max-w-md'>
				<div className='bg-white shadow-md rounded-lg p-8'>
					<h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>
						登录 Cores Admin
					</h2>
					<Form
						name='login_form'
						layout='vertical'
						initialValues={{ remember: true }}
						onFinish={(values) => {
							console.log('登录信息:', values);
						}}
					>
						<Form.Item
							name='username'
							rules={[{ required: true, message: '请输入用户名' }]}
						>
							<Input
								prefix={<UserOutlined className='text-gray-400' />}
								placeholder='用户名'
								className='py-2'
							/>
						</Form.Item>
						<Form.Item
							name='password'
							rules={[{ required: true, message: '请输入密码' }]}
						>
							<Input.Password
								prefix={<LockOutlined className='text-gray-400' />}
								placeholder='密码'
								className='py-2'
							/>
						</Form.Item>
						<Form.Item className='mb-2'>
							<div className='flex items-center justify-between'>
								<Form.Item
									name='remember'
									valuePropName='checked'
									noStyle
								>
									<Checkbox>记住密码</Checkbox>
								</Form.Item>
								<a
									className='text-blue-600 hover:text-blue-800'
									href=''
								>
									忘记密码
								</a>
							</div>
						</Form.Item>
						<Form.Item>
							<Button
								type='primary'
								htmlType='submit'
								className='w-full py-2 bg-blue-600 hover:bg-blue-700'
								onClick={() => {
									history.push('/Home');
								}}
							>
								登录
							</Button>
						</Form.Item>
					</Form>
					<div className='text-center text-sm text-gray-600'>
						果核开源实验室（Cores Admin）
					</div>
				</div>
			</div>
		</div>
	);
};
