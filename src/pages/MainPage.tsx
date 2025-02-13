import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const MainPage = () => {
  return (
    <div className="pt-10">
      <h1 className="text-center mb-10">TODO LIST</h1>
      <header>
        <div>
          <div className="flex align-center justify-center">
            <Input className="max-w-2xs mr-5" type="text" placeholder="Add todo" />
            <Button> Add </Button>
          </div>
        </div>
      </header>
    </div>
  )
}