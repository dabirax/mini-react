import List from "./List";
import Alert from "./Alert";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
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
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
      showAlert(true, "success", "Item succesfully added");
    }
  };


  return (
    <section className="section-center">
      <form onSubmit={handleSubmit} className="grocery-store">
        {alert.show && <Alert {...alert} showAlert={showAlert} />}
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
        <List items={list} />
        <button className="remove-btn"> clear  items</button>
      </div>
    </section>
  );
};

export default App;
