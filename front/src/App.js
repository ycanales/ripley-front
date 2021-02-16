import './App.css';
import Header from './table/Header'
import Row from './table/Row'

function App() {
  return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <Header />
                <tbody className="bg-white divide-y divide-gray-200">
                  <Row />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
