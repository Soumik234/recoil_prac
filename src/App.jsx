
import { RecoilRoot,useRecoilState, useRecoilValue } from "recoil";
import countAtom, { evenSelector } from "./store/atoms/count";
function App() {
  return (
    <>
    <RecoilRoot>
      <Count />
      </RecoilRoot>
    </>
  );
}

function Count() {
  return (
    <div>
      <CountRender />
      <Button />
    </div>
  );
}

function CountRender() {
  const count = useRecoilValue(countAtom);
  return <div>{count}
  <EvenCountRenderer/>
  </div>

}
function EvenCountRenderer(){
  const isEven=useRecoilValue(evenSelector);
  return <div>
    {isEven?"It is even": null}
  </div>
}

function Button() {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
