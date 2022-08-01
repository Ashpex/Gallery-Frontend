import React, { useEffect } from 'react'
import Tab from '../components/Tab/Tab'
import { apiUrlPost } from '../../utils/constant'
import SuccessAlert from '../components/Alerts/SuccessAlert'
import axios from 'axios'
import ErrorAlert from '../components/Alerts/ErrorAlert'
import Comment from '../components/Comment/Comment'
var user = {
  id : 1,
  name: 'test',
  email: 'test@gmail.com',
}
const Home = () => {
  useEffect(() => {
    (
      async () => {
        axios.get(apiUrlPost,{
          headers: {
            'Authorization': `${localStorage.getItem('token')}`
          }
        }).then(res => {
          //console.log(res)
        })
      }
    )();
  }
  , [])
  return (
    <>
    <Tab />
    </>
    
  )
}

export default Home