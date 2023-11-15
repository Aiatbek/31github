import Header from "./components/header";
import Form from "./components/form";
import Table from "./components/table";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const extractData = (dataFromForm) => {
    setData(dataFromForm);
    console.log(dataFromForm);
  };
  return (
    <div>
      <Header></Header>;<Form extractionHandler={extractData}></Form>;
      <Table info={data}></Table>
    </div>
  );
}

export default App;
