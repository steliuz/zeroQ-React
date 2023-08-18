import './App.css'
import { useState } from 'react'
import { HeaderFilter } from './components/HeaderFilter.tsx'
import { HeaderComponent } from './components/HeaderComponent.tsx'
import { ContainerCards } from './components/ContainerCards.tsx'
import { store } from './store'
import { Provider } from 'react-redux'

function App() {
	const [searchValue, setSearchValue] = useState('')

	const handleSearch = (value: string) => {
		setSearchValue(value)
	}
	return (
		<Provider store={store}>
			<section>
				<HeaderComponent />
				<HeaderFilter onSearch={handleSearch} />
				<ContainerCards searchValue={searchValue} />
			</section>
		</Provider>
	)
}

export default App

