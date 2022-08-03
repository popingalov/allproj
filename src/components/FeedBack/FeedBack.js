export default function FeedBack({ statisticOpt, handlerFeedBack }) {
  return (
    <>
      {statisticOpt.map((e, idx) => (
        <button key={idx} onClick={() => handlerFeedBack(e)}>
          {e}
        </button>
      ))}
    </>
  );
}
