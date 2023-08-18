import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'

export const HeaderFilter = () => {
	const styleHeader = {
		backgroundColor: '#2d4f83',
		height: '42px',
		display: 'Flex',
    alignItems:'center',
    padding: '0 10%',
	}
	const boxInput = {
    width: '100%',
    maxWidth: '399px',
	}
	return (
		<section style={styleHeader}>
			<div style={boxInput}>
				<Input placeholder="Buscar Sucursal" prefix={<SearchOutlined />} />
			</div>
		</section>
	)
}
