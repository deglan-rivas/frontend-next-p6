import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'

export default function Home({guitarras, posts, curso}) {

  return (
    <>
      <Layout 
        title={'Inicio'}
        description={'Blog de música, venta de guitarras y más'}
      >  
        Inicio

      </Layout>
    </>
  )
}