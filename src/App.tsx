import './App.css'
import { HeaderFilter } from './components/HeaderFilter.tsx'
import { HeaderComponent } from './components/HeaderComponent.tsx'
import { ContainerCards } from './components/ContainerCards.tsx'
import { store } from './store'
import { Provider } from 'react-redux'

function App() {
	return (
		<Provider store={store}>
			<>
				<HeaderComponent />
				<HeaderFilter />
				<ContainerCards />
			</>
		</Provider>
	)
}

export default App



