import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { SearchBar } from './index.js'
import { logo } from '../utils/constants.jsx'

const Navbar = () => (
  <Stack 
  direction='row'
  alignItems='center'
  p={2} className=' sticky bg-black top-0 justify-between'>
    <Link to='/' className='flex items-center' >
      <img src={logo} alt='logo' className='h-[45px]' />
    </Link>
    <SearchBar/>
  </Stack>
)

export default Navbar