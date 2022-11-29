import "./styles.css";
export default function App() {


  // let number = [];
  // let i = 1;
  // for (i = 0; i < 100; i++) {
  //   number.push(i);
  // }
  const number = Array(100).fill(1).map((n,i)=>n+i)


  const Call = () => {
    window.location.reload();
  };

  let list = [];
  let j = 1;
  for (j = 1; j < 10; j++) 
  {
    list.push(number[Math.floor(Math.random() * 100)]);
  }
  return (
    <div className="App">
      <table
        style={{
          alignItem: "center",
          margin: "2em",
          padding: "2em",
          justifyContent: "center"
        }}
      >
        <tr className="grididColumn">
          {list.map((value, i) => {
            return (
              <>
                <td>{value}</td>
              </>
            );
          })}
          </tr>
          <button className='refresh' onClick={Call}>Refresh</button>
      </table>
    </div>
  );
}