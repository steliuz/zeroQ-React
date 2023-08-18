import { useOfficesFetch } from '../hooks/useOffice'
import { OfficeCard } from './OfficeCard'
import { OfficeItem } from '../interfaces/OfficeInterfaces'

const boxContainer = {
	height: 'calc(100vh - 127px)',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'start',
	padding: ' 10px clamp(10px, 200px, 5%)'
}

const flexCenter = {
	width: 'calc(100vw - 5%)',
	display: 'flex',
	justifyContent: 'center'
}

export const ContainerCards = () => {
	const { items, handleStatus } = useOfficesFetch()
	return (
		<section style={{ ...boxContainer }}>
			<div style={flexCenter}>
				<div className="container">
					{items.map((office: OfficeItem, index: number) => (
						<OfficeCard
							office={office}
							key={index}
							handleStatus={handleStatus}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
