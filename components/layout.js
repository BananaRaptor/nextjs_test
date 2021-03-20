import Head from 'next/head'
import Link from 'next/link'

export default ({ children }) => {
  /*
   * Added this to toggle the is-active class. See:
   * 
   * https://bulma.io/documentation/components/navbar/#navbar-menu
   * https://github.com/jgthms/bulma/issues/856
   */
  const toggleStyles = (event) => {
    document.querySelector('#burger').classList.toggle('is-active')
    document.querySelector('#navbarmenu').classList.toggle('is-active')
  }

  return (
    <div>
      <Head>
        <title>testNextJS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
        <p className="menu-label is-hidden-touch">Navigation</p>
        <ul className="menu-list">
          <li>
            <a href="#" className="">
              <span className="icon"><i className="fa fa-home"></i></span> Home
            </a>
          </li>
          <li>
            <a href="#" className="is-active">
              <span className="icon"><i className="fa fa-table"></i></span> Links
            </a>

            <ul>
              <li>
                <a href="#">
                  <span className="icon is-small"><i className="fa fa-link"></i></span> Link1
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon is-small"><i className="fa fa-link"></i></span> Link2
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="">
              <span className="icon"><i className="fa fa-info"></i></span> About
            </a>
          </li>
        </ul>
      </aside>
      <div className="container column is-10">
        {children}
      </div>
      <footer classNameName="footer">
        <div classNameName="content has-text-centered">
          <span>I'm the footer</span>
        </div>
      </footer>
    </div>
  )
}