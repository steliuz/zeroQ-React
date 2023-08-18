import { Image, Col, Row } from 'antd'
import logo from '/logo.png'

export const HeaderComponent = () => {
	return (
		<Row>
			<Col className="navHeader" span={24}>
				<Image width={140} src={logo} />
			</Col>
		</Row>
	)
}
