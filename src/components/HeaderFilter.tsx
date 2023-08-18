import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { useDispatch } from 'react-redux'
import { setFilters } from '../store'

export const HeaderFilter = () => {
	const dispatch = useDispatch()

	const handleSearchChange = (e: any) => {
		const value = e.target.value
		dispatch(setFilters(value))
	}

	const styleHeader = {
		backgroundColor: '#2d4f83',
		height: '42px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: ' 0px clamp(10px, 200px, 5%)'
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
							onChange={handleSearchChange}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
