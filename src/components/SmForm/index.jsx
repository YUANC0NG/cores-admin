import React, { useEffect, forwardRef, useImperativeHandle } from 'react';
import FormRender, { useForm } from 'form-render';
import CaptchaInput from './CaptchaInput';

const example = {
	type: 'object',
	displayType: 'row',
	properties: {
		input1: {
			title: '名称',
			type: 'string',
			required: true,
		},
		input2: {
			title: '描述',
			type: 'string',
			required: true,
			rules: [
				{
					pattern: '^[A-Z][a-z]*',
					message: '请输入拼音首字母大写!',
				},
			],
		},
	},
};

// 阿里飞猪表单-文档链接:
// 表单联动:   https://xrender.fun/form-render/advanced-linkage
// 表单校验:   https://xrender.fun/form-render/advanced-validate
// 自定义组件: https://xrender.fun/form-render/advanced-widget#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6
function SmForm({ formProps = {}, schema = example }, ref) {
	// Form实例和常用方法
	const form = useForm();
	useImperativeHandle(ref, () => ({
		form: form,
		validateFields: () => form.validateFields(),
		setSchema: (value) => form.setSchema(value),
		resetFields: (value) => form.resetFields(value),
		setValues: (value) => form.setValues(value),
	}));

	return (
		<FormRender
			schema={schema}
			form={form}
			labelWidth={'100%'}
			footer={false}
			widgets={{
				CaptchaInput,
			}}
			maxWidth={600}
			{...formProps}
		/>
	);
}

export default forwardRef(SmForm);
