import React, { useState } from 'react';
import { ImageViewer } from 'jeri';
import './App.css';

const configForImage = (imageName, spp, isHomogeneous) => {
  const gs = [0, 0.5, 0.9];
  return isHomogeneous
    ? {
        title: 'root',
        children: gs.map((g) => {
          return {
            title: `g=${g}`,
            children: [
              {
                title: 'Image',
                image: `${process.env.PUBLIC_URL}/img/${imageName}/PGv3_g=${g}_${spp}spp.exr`,
              },
              {
                title: 'Reference',
                image: `${process.env.PUBLIC_URL}/img/${imageName}/ref_g=${g}.exr`,
              },
            ],
          };
        }),
      }
    : {
        title: 'root',
        children: [
          {
            title: 'Image',
            image: `${process.env.PUBLIC_URL}/img/${imageName}/PGv3_${spp}spp.exr`,
          },
          {
            title: 'Reference',
            image: `${process.env.PUBLIC_URL}/img/${imageName}/ref.exr`,
          },
        ],
      };
};

const App = () => {
  // conditional rendering of the spps
  // const [spp, setSpp] = useState(10);
  return (
    <div className='App'>
      <div style={{ position: 'relative', height: '300px' }}>
        <ImageViewer data={configForImage('sphere', 10, true)} />
        {/* <img src={process.env.PUBLIC_URL + '/img/ra.png'} alt='ra' /> */}
      </div>
    </div>
  );
};

export default App;
