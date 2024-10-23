import {useParams} from 'react-router-dom';
function Tab() {
  const params = useParams();
  console.log(params);
  return <div>{`Hello World mister ${params.id}`}</div>;
}

export default Tab;
