import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Button } from '@material-ui/core';

const MySwal = withReactContent(Swal);

const ImageWithMessage = () => {
  const sweetAlerts = () => {
    MySwal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: '/images/dashboard/crypto/crypto2.jpg',
      imageWidth: 600,
      imageHeight: 400,
      imageAlt: 'Custom image',
    });
  };
  return (
    <Button variant="outlined" color="primary" onClick={sweetAlerts}>
      Click me
    </Button>
  );
};

export default ImageWithMessage;
