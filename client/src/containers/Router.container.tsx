import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from '../App'
import { Requests } from '../components/Requests.component'
import { Payments } from '../components/Payments.component'
import { AddPayment } from '../components/AddPayment.component'
import { Request } from '../components/Request.component'
export function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/requests" element={<Requests />} />
      <Route path="/:requestId" element={<Request />} />
      <Route path="/:requestId/payments" element={<Payments />} />
      <Route path="/:requestId/add-payment" element={<AddPayment />} />
    </Routes>
  </BrowserRouter>
  )
}
