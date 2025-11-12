import './App.css'
import Card from './components/Card'
import Conditional from './components/Conditional'
import Rendering from './components/Rendering'
import Gallery from './views/Gellery'

function App() {

  return (
    <>
      <Card username="Mohamed" gender="Male">
        <span>Course trainer</span>
      </Card>
      <Card username="Gharam" gender="Female">
        <span>Course trainee</span>
        <section>This is test section</section>
      </Card>
      <Card username="Esraa" gender="Female">
        <span>Course trainee</span>
        <footer>This is footer</footer>
      </Card>
      <Gallery />
      <hr />
      <Conditional />
      <hr />
      <Rendering />
    </>
  )
}

export default App
