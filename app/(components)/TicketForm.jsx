"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {
  const router = useRouter();

  const startingTicketData = {
    title: "",
    description: "",
    status: "Open",
    priority: "Medium",
    active: true,
    progress: 0,
  };

  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitted:", formData);
    // Handle form submission logic here, e.g., send the ticketData object to the server
    const res = await fetch("/api/Tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });

    if (!res.ok) {
      throw new Error("Failed to create ticket.");
    }

    router.refresh();
    router.push("/");
    console.log(res);
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 w-1/2"
        method="post"
      >
        <h3>Create Your Order</h3>
        <div className="flex flex-col">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            required={true}
            value={formData.title}
            onChange={handleChange}
          />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            required={true}
            value={formData.description}
            onChange={handleChange}
            rows={5}
          />
          <label htmlFor="priority">Priority</label>
          <div>
            <input
              type="radio"
              id="low"
              name="priority"
              value="Low"
              checked={formData.priority === "Low"}
              onChange={handleChange}
            />
            <label htmlFor="low">Low</label>
            <input
              type="radio"
              id="medium"
              name="priority"
              value="Medium"
              checked={formData.priority === "Medium"}
              onChange={handleChange}
            />
            <label htmlFor="medium">Medium</label>
            <input
              type="radio"
              id="urgent"
              name="priority"
              value="Urgent"
              checked={formData.priority === "Urgent"}
              onChange={handleChange}
            />
            <label htmlFor="urgent">Urgent</label>
          </div>
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            required={true}
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>
          <label htmlFor="progress">Progress</label>
          <input
            type="range"
            id="progress"
            name="progress"
            required={true}
            value={formData.progress}
            onChange={handleChange}
            min="0"
            max="100"
          />
        </div>
        <input type="submit" className="btn" value="Create Ticket" />
      </form>
    </div>
  );
};

export default TicketForm;
