import {useEffect, useState} from 'react';

export default function App(){
  	const [mouseCoordinates, setMouseCoordinates] = useState({x:0, y:0});
	
  	const mouseMoveHandler = (e:any) => {
    	setMouseCoordinates({
      		x:e.clientX,
      		y:e.clientY
    	});
  	}
  		
  	useEffect(()=>{
    	window.addEventListener('mousemove', mouseMoveHandler);
    	return(()=>{
      		window.removeEventListener('mousemove', mouseMoveHandler);
    	})
  	}, [])  
	
  	return (
    	<>
      		Mouse Coordinates: x = {mouseCoordinates.x}, y={mouseCoordinates.y}
    	</>
  	)
}