import { useOfficesFetch } from '../hooks/useOffice'
import { OfficeCard } from './OfficeCard'
import { OfficeItem, search } from '../interfaces/OfficeInterfaces'
import { useEffect, useState } from 'react'
import { sortOffices } from '../utils/sorfCards'

const boxContainer = {
	height: 'calc(100vh - 127px)',
	backgroundColor: '#222',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'start',
	padding: '10px 10%'
}

const flexCenter = {
	width: '1200px',
	display: 'flex',
	justifyContent: 'center'
}

export const ContainerCards = ({ searchValue }: search) => {
	const { items, handleStatus } = useOfficesFetch()
	const [sortedItems, setSortedItems] = useState<OfficeItem[]>([])

	useEffect(() => {
		const filteredData = items.filter((office) =>
			office.name.toLowerCase().includes(searchValue.toLowerCase())
		)

		const sortedData = sortOffices(filteredData)
		setSortedItems(sortedData)
	}, [searchValue, items])
	return (
		<section style={{ ...boxContainer }}>
			<div style={flexCenter}>
				<div className="container">
					{sortedItems.map((office: OfficeItem, index: number) => (
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
