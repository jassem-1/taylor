import React from 'react';

const MobileLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <video
        style={{ width: '100%', height: 'auto',marginTop: '50px' }}
        autoPlay
        muted
        controls={false}
        disablePictureInPicture
        src="https://cache.umusic.com/_sites/_halo/zrskt/nwff/mmafs.mp4"
      />
      <img
        style={{ width: '100%', height: 'auto' }}
        src="https://cache.umusic.com/_sites/_halo/zrskt/nwff/SNTV-Collection_Mobile.jpg"
        alt="Mobile Image"
      />
      <video
        style={{ width: '100%', height: 'auto' }}
        autoPlay
        muted
        controls={false}
        disablePictureInPicture
        src="https://cache.umusic.com/_sites/_halo/zrskt/nwff/mman.mp4"
      />
      <img
        style={{ width: '100%', height: 'auto' }}
        src="https://cache.umusic.com/_sites/_halo/zrskt/nwff/msabn.jpg"
        alt="Mobile Another Image"
      />
    </div>
  );
};

export default MobileLayout;
