export default function quote({ text }) {
  return (
    <tr>
      <td width="5%">
        <i className="fa fa-bell-o"></i>
      </td>
      <td>{text}</td>
      <td className="level-right">
        <a className="button is-small is-primary" href="#">
          Action
        </a>
      </td>
    </tr>
  );
}
