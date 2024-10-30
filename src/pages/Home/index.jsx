import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';
import ReactECharts from 'echarts-for-react';

const Home = () => {
	return (
		<div style={{ padding: '24px' }}>
			<Row gutter={[16, 16]}>
				<Col span={6}>
					<Card>
						<Statistic
							title='用户总数'
							value={112893}
						/>
					</Card>
				</Col>
				<Col span={6}>
					<Card>
						<Statistic
							title='订单总数'
							value={81234}
						/>
					</Card>
				</Col>
				<Col span={6}>
					<Card>
						<Statistic
							title='销售额'
							value={9280}
							prefix='¥'
						/>
					</Card>
				</Col>
				<Col span={6}>
					<Card>
						<Statistic
							title='新增用户'
							value={1234}
							suffix='/ 天'
						/>
					</Card>
				</Col>
			</Row>
			<Row
				gutter={[16, 16]}
				style={{ marginTop: '24px' }}
			>
				<Col span={12}>
					<Card>
						<ReactECharts
							option={{
								title: {
									text: '近7天用户增长趋势',
								},
								xAxis: {
									type: 'category',
									data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
								},
								yAxis: {
									type: 'value',
								},
								series: [
									{
										data: [820, 932, 901, 934, 1290, 1330, 1320],
										type: 'line',
									},
								],
							}}
							style={{ height: '300px' }}
						/>
					</Card>
				</Col>
				<Col span={12}>
					<Card>
						<ReactECharts
							option={{
								title: {
									text: '用户分布',
								},
								tooltip: {
									trigger: 'item',
								},
								legend: {
									orient: 'vertical',
									left: 'left',
									top: '15%',
								},
								series: [
									{
										name: '用户分布',
										type: 'pie',
										radius: '50%',
										data: [
											{ value: 1048, name: '北京' },
											{ value: 735, name: '上海' },
											{ value: 580, name: '广州' },
											{ value: 484, name: '深圳' },
											{ value: 300, name: '其他' },
										],
										emphasis: {
											itemStyle: {
												shadowBlur: 10,
												shadowOffsetX: 0,
												shadowColor: 'rgba(0, 0, 0, 0.5)',
											},
										},
									},
								],
							}}
							style={{ height: '300px' }}
						/>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default Home;
