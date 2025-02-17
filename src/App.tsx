import FormView from "./components/FormView";
import Header from "./components/Header";

export default function App() {

  return (

      <div className="bg-gray-200 h-full flex flex-col space-y-10">
        
          <Header />

          <div>
              <FormView />
          </div>
          
          
      </div>
      
  )
}
