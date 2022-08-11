export default function Statistic({ statistic, dopStat }) {
  const keys = Object.keys(statistic);
  const value = Object.values(statistic);

  return (
    <>
      <h3>Statistics</h3>
      <ul>
        {keys.map((elem, idx) => {
          const newValue = value[idx];
          return (
            <li key={elem}>
              {elem}: {newValue}
            </li>
          );
        })}
      </ul>
      <p>Total:{dopStat.total}</p>
      <p>Positive:{Math.round(dopStat.positive)}%</p>
    </>
  );
}
