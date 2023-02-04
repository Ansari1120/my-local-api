import { updateTodo } from "./list";

export default function handler(req, res) {
  if (req.method === "POST") {
    let { id, isDone } = JSON.parse(req.body);
    updateTodo({ id, isDone: Boolean(isDone) });
    res.status(200).json({ msg: "todo id updated" });
  } else {
    res.status(400).json({ msg: "invalid request method" });
  }
}
