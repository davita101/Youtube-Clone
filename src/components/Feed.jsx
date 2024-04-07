import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import axios from 'axios'
import { fetchFromAPI } from '../utils/fetchFromAPI.js'
import {Sidebar, Video} from './index.js'

function Feed() {

  const [selectCategory, setSelectCategory] = useState('New')
  const [videos, setVideos] = useState([])
  
  useEffect(() =>{
    fetchFromAPI(`search?part=snippet&q=${selectCategory}`)
    .then((data) => setVideos(data.items))
  },[selectCategory])

  return (
    <Stack sx={{
      flexDirection: { sx: "column", md: 'row' }
    }}>
      <Box sx={{
        height: { sx: 'auto', md: '92vh' },
        borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 }
      }}>
        <Sidebar 
        selectCategory={selectCategory}
        setSelectCategory={setSelectCategory}/>
        <Typography className='copyright' variant='body2'
          sx={{ mt: 1.5, color: '#fff' }}>
          Copyright 2022 DG Meida
        </Typography>
      </Box>
      <Box>
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          p={2}
          sx={{
            overflowY: 'auto',
            height: '90vh',
            flex: 2,
            color: 'white'
          }}>
          {selectCategory}<span className=' text-[#f31503]'>
            Videos
          </span>
        </Typography>

        <Video videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed