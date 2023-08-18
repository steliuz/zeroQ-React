import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { SearchProps } from '../interfaces/OfficeInterfaces'

import { useState } from 'react'

export const HeaderFilter = ({ onSearch }: SearchProps) => {
	const [searchText, setSearchText] = useState('')

	const handleSearchChange = (e: any) => {
		const value = e.target.value
		setSearchText(value)
		onSearch(value)
	}

	const styleHeader = {
		backgroundColor: '#2d4f83',
		height: '42px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '0px 10%'
	}
	const flexCenter = {
		width: '1200px',
		display: 'flex',
		justifyContent: 'center'
	}
	const boxInput = {
		width: '100%',
		maxWidth: '399px',
		borderRadius: '0'
	}

	return (
		<section style={styleHeader}>
			<div style={flexCenter}>
				<div className="container">
					<div style={boxInput}>
						<Input
							placeholder="Buscar Sucursal"
							prefix={<SearchOutlined />}
							value={searchText}
							onChange={handleSearchChange}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
