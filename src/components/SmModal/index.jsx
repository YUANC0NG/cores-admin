import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Tree, Input, Modal } from 'antd';
const basicList = [
	{ title: '项目名称：', value: '222' },
	{ title: '标段名称：', value: '222' },
];

// 统一弹窗:
function SmModal(
	{
		infoList = [],
		children,
		title = '标题',
		maxHeight = '70vh',
		modalProps = {},
		onCancel,
		onOk,
	},
	ref
) {
	const [modalShow, setModalShow] = useState(false);
	const [modalData, setModalData] = useState({});
	const [modalStatus, setModalStatus] = useState('新建');

	useImperativeHandle(ref, () => ({
		getModalStatus: () => modalStatus,
		open: (value) => {
			setModalData(value);
			setModalShow(true);
			setModalStatus(value ? '编辑' : '新建');
		},
		close: () => {
			setModalData({});
			setModalShow(false);
		},
	}));

	return (
		<Modal
			title={title}
			open={modalShow}
			onOk={() => {
				onOk?.(modalData, modalStatus);
			}}
			width={600}
			onCancel={() => {
				onCancel?.();
				setModalShow(false);
			}}
			{...modalProps}
		>
			<div style={{ maxHeight, overflowX: 'hidden', overflowY: 'auto' }}>
				{/* basicInfo */}
				{infoList?.length > 0 && (
					<div className='bg-[#F5F5F5] rounded-[4px] p-[16px] mb-5'>
						{infoList.map((i, index) => {
							const notLastItem = index + 1 !== infoList?.length;
							return (
								<div
									key={index}
									className={`text-[#525253] ${notLastItem && 'mb-2'}`}
								>
									<span>{i.title}</span>
									<span>{i.value}</span>
								</div>
							);
						})}
					</div>
				)}
				{/* slot */}
				{children}
			</div>
		</Modal>
	);
}

export default forwardRef(SmModal);
