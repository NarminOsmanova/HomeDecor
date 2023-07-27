import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Collections from './pages/Collections'
import Account from './pages/Account'
import AuthLayout from './Layout/AuthLayout'
import Master from './Layout/Master'
import Login from './pages/Login'
import Register from './pages/Register'
import Reset from './pages/Reset'
import Verify from './pages/Verify'
import NewPassword from './pages/NewPassword'
import Checkout from './pages/Checkout'
import NotFound from './pages/NotFound'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master />}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/collections' element={<Collections/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/cart/checkout' element={<Checkout/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="reset" element={<Reset/>} />
          <Route path="verify" element={<Verify/>} />
          <Route path="newpassword" element={<NewPassword/>} />
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
