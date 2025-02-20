import { AllTasks } from "@/components/AllTasks"
import { Sidebar } from "@/components/Sidebar"
import { Wrapper } from "@/components/Wrapper/Wrapper"

export const MainPage = () => {

  const sidebar = <>
    <Sidebar>
      <AllTasks />
    </Sidebar>
  </>



  return (
    <div>
      <Wrapper sidebar={sidebar}>
        <h1>Main Page</h1>
      </Wrapper>
    </div>
  )
}