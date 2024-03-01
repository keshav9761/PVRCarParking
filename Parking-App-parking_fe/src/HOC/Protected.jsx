import React from 'react';
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

export function Protected({compo}) {

   const navigation = useNavigate();
   const [component, setComponent] = React.useState("");
   const token = sessionStorage.getItem('token');

   React.useEffect(() => {
    token ? setComponent(compo) : onUnauthorised();
   }, [])
   
   const onUnauthorised = () => {
     toast('Please Login First');
      navigation('/')
    }


    return component


}