import List from "./List";
import Alert from "./Alert";
import { useEffect, useState } from "react";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: " ",
  });

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    if (!name) {
      showAlert(true, "danger", "Please enter value");
    } else if (isEditing && name) {
      const edittedList = list.map((item) => {
        if (editID === item.id) {
          return { ...item, title: name };
        }
        return item;
      });
      setList(edittedList);
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "Item successfully editted");
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
      showAlert(true, "success", "Item succesfully added");
    }
  };

  const clearList = () => {
    setList([]);
    showAlert(true, "danger", "empty list");
  };

  const removeItem = (id) => {
    const updatedItems = list.filter((item) => item.id !== id);
    const removedItem = list.find((item) => item.id === id);
    setList(updatedItems);

    showAlert(true, "danger", `"${removedItem.title}" is successfully removed`);
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => id === item.id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form onSubmit={handleSubmit} className="grocery-store">
        {alert.show && <Alert {...alert} showAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            value={name}
            className="grocery"
            placeholder="e.g eggs"
            onChange={(e) => setName(e.target.value)}
          />
          <button className="submit-btn">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List items={list} removeItem={removeItem} editItem={editItem} />
        <button className="remove-btn" onClick={clearList}>
          clear items
        </button>
      </div>
    </section>
  );
};

export default App;
