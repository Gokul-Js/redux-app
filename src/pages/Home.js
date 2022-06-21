import React from 'react'

import Products from '../components/Products';

const Home = () => {
  return  <div> 
      <h2 className='heading'>Learn Redux Toolkit store</h2>

      <section>

          <h3>Products</h3>

          <Products />

      </section>
    </div>
}

export default Home