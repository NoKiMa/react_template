import {useParams} from 'react-router-dom';
import useStore from '../store/testStore';

function Tab() {
  const {id} = useParams();
  const {bears, increasePopulation, updateBears, removeAllBears} = useStore();

  return (
    <div>
      <p
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>{`id ${id}`}</p>
      <p
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>{`bears ${bears}`}</p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <button
          className="btn"
          onClick={() => {
            increasePopulation();
          }}>
          increase population
        </button>
        <button
          className="btn"
          onClick={() => {
            updateBears(5);
          }}>
          update population
        </button>
        <button
          className="btn"
          onClick={() => {
            removeAllBears();
          }}>
          remove all bears
        </button>
      </div>
    </div>
  );
}

export default Tab;
