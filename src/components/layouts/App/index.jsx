import { Fragment } from 'react'
import Header from '@/components/layouts/Header'

const App = ({ children }) => {
    return (
        <Fragment>
            <Header />
            <main className="container mx-auto">
                <div className=""></div>
            </main>
        </Fragment>
    )
}

export default App
