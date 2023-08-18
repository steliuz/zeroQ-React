import { useOfficesFetch } from '../hooks/useOffice'
import { OfficeCard } from './OfficeCard'
import { Space } from 'antd'
import { OfficeItem } from '../interfaces/OfficeInterfaces'
import { useEffect, useState } from 'react'
import { sortOffices } from '../utils/sorfCards'

export const ContainerCards = () => {
	const { items, handleStatus } = useOfficesFetch()

	const [sortedItems, setSortedItems] = useState<OfficeItem[]>([])

	useEffect(() => {
		const sortedData = sortOffices(items)
		setSortedItems(sortedData)
	}, [items])

	const boxContainer = {
		padding: '20px 10%'
	}
	return (
		<section style={boxContainer}>
			<Space size={8} wrap>
				{sortedItems.map((office: OfficeItem, index: number) => (
					<OfficeCard office={office} key={index} handleStatus={handleStatus} />
				))}
			</Space>
		</section>
	)
}
