import axios from 'axios';
import { rapidapiHost, streamUrl } from './secrets';
import { useEffect, useState } from 'react';
import getYouTubeID from 'get-youtube-id';
import { rapidapiKey1,rapidapiKey2 } from './secrets';

const useStreamLink=(youtubeUrl)=>{
   
  var youtubeId = getYouTubeID(youtubeUrl);

    const[urlInfo,setUrlInfo]=useState(null);

    useEffect(()=>{
      getYoutubeUrlInfo();
    },[]);
  

    async function getYoutubeUrlInfo(){

    let options = {
        method: 'GET',
        url: streamUrl,
        params: {id: youtubeId},
        headers: {
          'X-RapidAPI-Key': rapidapiKey1,
          'X-RapidAPI-Host': rapidapiHost
        }
      };
      
      try{
          let response = await axios.request(options);
          setUrlInfo(response.data);

      } catch (error) {
         
           try{
                options.headers['X-RapidAPI-Key']=rapidapiKey2;
                response = await axios.request(options);
                setUrlInfo(response.data);
             } catch (error) {
               console.error(error);
             }
      }

   }

  return urlInfo;
}

export default useStreamLink;
