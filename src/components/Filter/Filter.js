export default function Filter({ filter, filterChange }) {
  return (
    <textarea
      value={filter}
      onChange={e => filterChange(e.target.value)}
    ></textarea>
  );
}
