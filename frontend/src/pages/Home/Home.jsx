import React from 'react'
import Cards from '../../components/Cards/Cards'
import { Helmet } from 'react-helmet'
import Section1 from '../../components/Section1/Section1'
import Section2 from '../../components/Section2/Section2'

const Home = () => {
  return (
    <div>
        <Helmet>
            <title>home</title>
        </Helmet>
        <Section1/>
        <Section2/>
        <Cards/>
    </div>
  )
}

export default Home