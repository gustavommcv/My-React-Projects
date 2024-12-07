/* eslint-disable react/prop-types */
import './Log.css';

function Log({ log }) {
  return (
    <ol className="log">
      {log.map((entry, index) => (
        <li key={index}>
          Player {entry.player} played at row {entry.row}, col {entry.column}
        </li>
      ))}
    </ol>
  );
}

export default Log;
