"use client";
import { Container, Form } from "react-bootstrap";
import "./chips.css";
import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

const items = [
  {
    icon: <FaUserCircle />,
    name: "Anaina",
    email: "anaina@gmail.com",
  },
  {
    icon: <FaUserCircle />,
    name: "Betty",
    email: "betty@gmail.com",
  },
  {
    icon: <FaUserCircle />,
    name: "Noel",
    email: "noel@gmail.com",
  },
  {
    icon: <FaUserCircle />,
    name: "Edward",
    email: "edward@gmail.com",
  },
  {
    icon: <FaUserCircle />,
    name: "Ashly",
    email: "ashly@gmail.com",
  },
  {
    icon: <FaUserCircle />,
    name: "Lisa",
    email: "lisa@gmail.com",
  },
  {
    icon: <FaUserCircle />,
    name: "Lima",
    email: "lima@gmail.com",
  },
  {
    icon: <FaUserCircle />,
    name: "Philip",
    email: "philip@gmail.com",
  },
  {
    icon: <FaUserCircle />,
    name: "John",
    email: "john@gmail.com",
  },
  {
    icon: <FaUserCircle />,
    name: "Zach",
    email: "zach@gmail.com",
  },
  {
    icon: <FaUserCircle />,
    name: "Mark",
    email: "mark@gmail.com",
  },
];

export default function Chips() {
  const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);
  const [textInputClick, setTextInputClick] = useState(false);

  useEffect(() => {
    if (filteredItems == "") {
      const filteredItems = items.filter((item) => !chips.includes(item.name));
      setFilteredItems(filteredItems);
    }
  }, [filteredItems == ""]);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setInputValue(query);
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleAddChip = (item) => {
    setChips([...chips, item.name]);
    setInputValue("");
    setFilteredItems(filteredItems.filter((i) => i.name !== item.name));
  };

  const handleRemoveChip = (index) => {
    const removedChip = chips[index];
    setChips(chips.filter((_, i) => i !== index));
    setFilteredItems(
      [...filteredItems, items.find((item) => item.name === removedChip)].sort(
        (a, b) => a.name.localeCompare(b.name)
      )
    );
  };

  return (
    <Container className="chips-main">
      <div className="form-heading">
        <h2 className="text-primary">Pick Users</h2>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className="view-tags">
            {chips.map((chipName, index) => {
              const selectedChip = items.find((item) => item.name === chipName);
              return (
                <div className="selected-items">
                  <div key={index} className="chip">
                    {selectedChip && (
                      <>
                        <span className="icon-tag"> {selectedChip.icon}</span>{" "}
                        <span className="name-tag"> {selectedChip.name}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveChip(index)}
                        >
                          <IoIosClose />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
            <Form.Control
              type="text"
              placeholder="Add new user..."
              value={inputValue}
              onChange={handleInputChange}
              className=""
              onClick={() => {
                setTextInputClick(true);
              }}
            />
          </div>
        </Form.Group>
      </Form>

      {textInputClick && (
        <div className="list shadow">
          <ul>
            {filteredItems.map((item, index) => (
              <div className="list-item">
                {" "}
                <li key={index} onClick={() => handleAddChip(item)}>
                  <span className="profile-icon"> {item.icon} </span>{" "}
                  {item.name} <span className="email-class">{item.email}</span>
                </li>{" "}
              </div>
            ))}
          </ul>
        </div>
      )}
    </Container>
  );
}
