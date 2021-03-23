import Head from "next/head";
import Link from "next/link";

export default ({ children }) => {
  /*
   * Added this to toggle the is-active . See:
   *
   * https://bulma.io/documentation/components/navbar/#navbar-menu
   * https://github.com/jgthms/bulma/issues/856
   */
  const toggleStyles = (event) => {
    document.querySelector("#burger").classList.toggle("is-active");
    document.querySelector("#navbarmenu").classList.toggle("is-active");
  };

  return (
    <>
      <Head>
        <title>Admin - Free Bulma template</title>
      </Head>
      <nav className="navbar is-primary">
        <div className="navbar-brand">
          <a className="navbar-item brand-text" href="../index.html">
            MFCA
          </a>
          <div className="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenu" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="admin.html"></a>
            <a className="navbar-item" href="admin.html">
              Orders
            </a>
            <a className="navbar-item" href="admin.˚html">
              Payments
            </a>
            <a className="navbar-item" href="admin.html">
              Exceptions
            </a>
            <a className="navbar-item" href="admin.html">
              Reports
            </a>
          </div>
        </div>
      </nav>
      <div className="columns">
        <div className="column is-2 is-sidebar-menu is-hidden-mobile">
          <aside className="menu">
            <p className="menu-label">General</p>
            <ul className="menu-list">
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Customers</a>
              </li>
              <li>
                <a>Other</a>
              </li>
            </ul>
            <p className="menu-label">Administration</p>
            <ul className="menu-list">
              <li>
                <a>Team Settings</a>
              </li>
              <li>
                <a>Manage Your Team</a>
                <ul>
                  <li>
                    <a>Members</a>
                  </li>
                  <li>
                    <a>Plugins</a>
                  </li>
                  <li>
                    <a>Add a member</a>
                  </li>
                  <li>
                    <a>Remove a member</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Invitations</a>
              </li>
              <li>
                <a>Cloud Storage Environment Settings</a>
              </li>
              <li>
                <a>Authentication</a>
              </li>
              <li>
                <a>Payments</a>
              </li>
            </ul>
            <p className="menu-label">Transactions</p>
            <ul className="menu-list">
              <li>
                <a>Payments</a>
              </li>
              <li>
                <a>Transfers</a>
              </li>
              <li>
                <a>Balance</a>
              </li>
              <li>
                <a>Reports</a>
              </li>
            </ul>
          </aside>
        </div>
        <div className="column is-10">
          {/* <nav className="breadcrumb" aria-label="breadcrumbs">
                        <ul>
                            <li><a href="../">Bulma</a></li>
                            <li><a href="../">Templates</a></li>
                            <li><a href="../">Examples</a></li>
                            <li className="is-active"><a href="#" aria-current="page">Admin</a></li>
                        </ul>
                    </nav> */}
          {children}
        </div>
      </div>
    </>
  );
};
