import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard } from './'

const Video = ({ videos }) => {
  console.log(videos)
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.kind === 'youtube#video' && <VideoCard video={item} />}
          {item.id.kind === 'youtube#channel' && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Video
