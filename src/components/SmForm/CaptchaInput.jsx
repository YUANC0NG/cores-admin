import React, { useEffect, useState, useRef, useMemo } from 'react';
import { Button, Input, Space } from 'antd';

// 示例自定义组件
const CaptchaInput = (props) => {
	const { value, onChange, title } = props;
	console.log('widget props:', props);
	const sendCaptcha = (phone) => {
		console.log('send captcha to:', phone);
	};

	return (
		<Space>
			<Input
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder={'请输入手机号码'}
			/>
			<Button onClick={() => sendCaptcha(value)}>发送验证码</Button>
		</Space>
	);
};
export default CaptchaInput;
