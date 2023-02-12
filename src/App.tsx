import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './views/Root/Root'
import TodosRoot from './views/TodosRoot/TodosRoot'
import AllTodosView from './views/AllTodosView/AllTodosView'
import CreateTodoView from './views/CreateTodoView/CreateTodoView'
import FinishedTodosRoot from './views/FinishedTodosRoot/FinishedTodosRoot'
import AllFinishedTodosView from './views/AllFinishedView/AllFinishedTodosView'
import SingleFinishedTodoView from './views/SingleFinishedTodoView/SingleFinishedTodoView'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "todos",
          element: <TodosRoot />,
          children: [
            {
              index: true,
              element: <AllTodosView />
            },
            {
              path: "create",
              element: <CreateTodoView />
            }
          ]
        },
        {
          path: "finished",
          element: <FinishedTodosRoot />,
          children: [
            {
              index: true,
              element: <AllFinishedTodosView />
            },
            {
              path: ":finished_id",
              element: <SingleFinishedTodoView />
            }
          ]
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
