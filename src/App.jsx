import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import Footer from './components/Footer'


function App() {

  return <main className='bg-gray-900 h-screen'>
    <div className='bg-gray-900 mx-auto p-10'>
      <div ><TaskForm /></div>
      <div><TaskList /></div>
      
    </div>
    <div id='footer' className='bg-slate-500'><Footer/></div>
  </main>
}

export default App