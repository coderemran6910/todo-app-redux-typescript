import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAppDispatch } from "../../redux/hooks";
import { addTodo } from "../../redux/features/todoSlice";

export function AddTodoModal() {
  const [task, setTask] = useState('');
  const [description, setdescription] = useState('');
  const dispatch = useAppDispatch();


  const handleSubmit = (e: FormEvent) => {
    const uniqueString = Math.random().toString(36).substring(2, 7)

    e.preventDefault();
    dispatch(addTodo({ id : uniqueString  ,task, description}))
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient p-5 rounded-xl font-semibold  mb-5 text-white ">
          add todo{" "}
        </Button>
      </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white">
          <DialogHeader>
            <DialogTitle>Add a new todo</DialogTitle>
            <DialogDescription>
              Add todos to your list. You can add multiple todos at once.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                description
              </Label>
              <Input
                onBlur={(e) => setdescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit"> Add </Button>
            </DialogClose>
          </div>
          </form>
        </DialogContent>
     
    </Dialog>
  );
}
