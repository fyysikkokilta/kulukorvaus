import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Reimbursement from './features/reimbursement/Reimbursement'
import Layout from './features/core/Layout'

import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Reimbursement/>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App