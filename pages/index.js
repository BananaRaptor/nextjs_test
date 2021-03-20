import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import LayoutDash from '../components/layoutDashboard'
import RonSwanson from '../components/ronComponent'

export default () => (
  <LayoutDash>
    <section className="section">
      <div className="container">
        <h1 className="title">Hello World from <a href="https://nextjs.org/">Next.js</a> and <a href="https://bulma.io/">Bulma</a>!</h1>
        <RonSwanson />
      </div>
    </section>
  </LayoutDash>
);