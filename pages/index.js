import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import LayoutDash from "../components/layoutDashboard";
import RonSwanson from "../components/ronComponent";
import random from "../components/random";

export default () => (
  <LayoutDash>
    <section className="section">
      <div className="container">
            <RonSwanson />
        <random />
      </div>
    </section>
  </LayoutDash>
);
