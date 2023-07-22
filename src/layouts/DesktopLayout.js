import React from 'react';

const DesktopLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <video
        style={{ width: '100%', height: 'auto' }}
        
        autoPlay
        muted
        controls={false}
        disablePictureInPicture
        src="https://cache.umusic.com/_sites/_halo/zrskt/nwff/dafms.mp4"
      />
      <img
        style={{ width: '100%', height: 'auto' }}
        
        src="https://cache.umusic.com/_sites/_halo/zrskt/nwff/SNTV-Collection_Desktop.jpg"
        alt="Desktop Image"
      />
      <video
        style={{ width: '100%', height: 'auto' }}
        autoPlay
        muted
        controls={false}
        disablePictureInPicture
        src="https://cache.umusic.com/_sites/_halo/zrskt/nwff/mdan.mp4"
      />
      <img
        style={{ width: '100%', height: 'auto' }}
        src="https://cache.umusic.com/_sites/_halo/zrskt/nwff/dban2.jpg"
        alt="Desktop Another Image"
      />
    </div>
  );
};

export default DesktopLayout;
