import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FetchFromAPI } from '../auths/FetchFromAPI';
import ChannelCard from './ChannelCard';
import { Box } from '@mui/material';
import Videos from './Videos';

const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState (null)
  const [videos, setVideos] = useState ([])
   
  const { id } = useParams();

  console.log(channelDetail, videos)

  useEffect (()=>{
    FetchFromAPI(`channels?.part=snippet&id=${id}`)
    .then((data)=> setChannelDetail(data?.items[0]));
   
    FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=> setVideos(data?.items));
  },[id])
   
  return (
    <Box minHeight="95vj">
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(237,44,210,1) 100%, rgba(2,0,36,1) 100%)',
          zIndex: 10,
          height: '300px'
        }}
        
        />
        <ChannelCard channelDetail={channelDetail} marginTop= "-93px" />
      </Box>
          <Box display="flex" p="2">
            <Box sx={{ mr: {sm:"100px" } }} >
              
            </Box>
            <Videos videos={videos}/>
          </Box>

    </Box>
  )
}

export default ChannelDetails