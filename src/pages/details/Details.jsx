import React from 'react'
import "./style.scss"
import DetailsBanner from './detailsBanner/DetailsBanner'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/UseFetch';
import Cast from './cast/Cast';
import VideosSection from './videosection/VideoSection';
import Similar from './carousel/Similar';
import Recommendation from './carousel/Recomendation';


function Details() {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data:credits, loading:creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);

  return (
    <div>
      <DetailsBanner videos={data?.results?.[0] } crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading}/>
      <VideosSection data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Details