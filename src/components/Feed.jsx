import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
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
    <Stack
     sx={{
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
      <Box
      p={1}
      >
        <Typography
          variant='h4'
          fontWeight='bold'
          
          sx={{
            overflowY: 'auto',
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