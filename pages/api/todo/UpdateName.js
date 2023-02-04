import { updateTodoName } from "./list";

export default function handler(req, res) {
  if (req.method === "PUT") {
    let { id, name } = JSON.parse(req.body);
    updateTodoName({ id, name: name });
    res.status(200).json({ msg: "todo name updated" });
  } else {
    res.status(400).json({ msg: "invalid request method" });
  }
}
