"use client";
import { Container, Form } from "react-bootstrap";
import "./chips.css";
import { useState,useEffect } from "react";

export default function Chips({ initialItems }) {
  const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredItems, setFilteredItems] = useState(initialItems || []);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setInputValue(query);
    const filtered = initialItems.filter((item) =>
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
    setFilteredItems([...filteredItems, initialItems.find((item) => item.name === removedChip)].sort((a, b) =>
      a.name.localeCompare(b.name)
    ));
  };
  



  return (
    <Container className="chips-main">
      <div className="form-heading">
        <h2 className="text-primary">Pick Users</h2>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className="view-tags">
          <div className="selected-items">
          {chips.map((chipName, index) => {
    const selectedChip = initialItems.find((item) => item.name === chipName);
    return (
      <div key={index} className="chip">
        {selectedChip && (
          <>
            {selectedChip.icon} {selectedChip.name}
            <button type="button" onClick={() => handleRemoveChip(index)}>X</button>
          </>
        )}
      </div>
    );
  })}
        </div>
          <Form.Control
            type="text"
            placeholder="Add new user..."
            value={inputValue}
            onChange={handleInputChange}
            className=""
          />
          </div>
        </Form.Group>
      </Form>
      <ul>
        {(filteredItems || []).map((item, index) => (
          <li key={index} onClick={() => handleAddChip(item)}>
            {item.icon} {item.name} <span className="email-class">{item.email}</span> 
          </li>
        ))}
      </ul>
    </Container>
  );
}
