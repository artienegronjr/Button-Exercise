import React from 'react'
import './Button.css'
import image from '../../images/ripple-image.png'

export default function Button(props) {
  const [ripples, setRipples] = React.useState([]);

  const createRipple = (e) => {
    const rippleContainer = e.currentTarget.getBoundingClientRect();
    
    //Set size of ripple to the longest edge of the button
    const size = rippleContainer.width > rippleContainer.height ? rippleContainer.width : rippleContainer.height;

    //Get x and y coordinates of ripple based on the document
    const x = e.pageX - rippleContainer.x - rippleContainer.width / 2;
    const y = e.pageY - rippleContainer.y - rippleContainer.width / 2;

    const newRipple = {
      size,
      x,
      y
    };

    setRipples((prevState) => [...prevState, newRipple]);
  }

  return (
    <div className="button" style={{fontSize: props.fontSize}}>
      a pleasing button
      <div className="ripple-container" onMouseDown={createRipple} onClick={props.onClick}>
        {
          ripples.length > 0 &&
          ripples.map((ripple, index) => {
            return (
              <span 
              className="ripple"
              key={"ripple_" + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
                backgroundImage: `url(${image})`
              }}
              />
            );
          })
        }
      </div>
    </div>
  )
}
