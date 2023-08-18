import { Card } from 'antd'
import user from '/user.svg'
import clock from '/clock.svg'
import { OfficeCardProps } from '../interfaces/OfficeInterfaces'
import {
	getCountWaitings,
	getTimeElapse,
	getTypeOfBody,
	getTypeOfFooter
} from '../utils/cardCalculations'

const styleCard = {
	backgroundColor: '#2d4f83',
	color: '#fff',
	width: '265px',
	height: '131px',
	borderRadius: '0',
	padding: '0px',
	margin: '0px',
	cursor: 'pointer'
}
const boxCard = {
	height: '131px',
	display: 'flex',
	flexDirection: 'column' as 'column',
	justifySelf: 'start'
}
const flexInfo = {
	display: 'flex',
	alignItems: 'center',
	gap: '8px'
}
const line = {
	lineHeight: 1.05,
	fontWeight: 'bold'
}

export const OfficeCard: React.FC<OfficeCardProps> = ({
	office,
	handleStatus
}) => {
	const handleOnline = () => {
		handleStatus(office)
	}
	return (
		<Card style={styleCard} bordered={false}>
			<div style={boxCard} onClick={handleOnline}>
				<div style={getTypeOfBody(office)}>
					<p>{office.name}</p>
				</div>
				<div style={getTypeOfFooter(office)}>
					<div style={flexInfo}>
						<img src={user} alt="icon" style={{ width: 18 }} />
						<span style={line}>{getCountWaitings(office)}</span>
					</div>
					<div style={flexInfo}>
						<img src={clock} alt="icon" style={{ width: 18 }} />

						<span style={line}>{getTimeElapse(office)}</span>
					</div>
				</div>
			</div>
		</Card>
	)
}
