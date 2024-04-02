"use client";
import { FormEvent } from "react";

export const BoardForm = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title");
    console.log(title);
    fetch("/api/boards", {
      method: "POST",
      body: JSON.stringify({ title }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input name="title"></input>
      </label>
      <button type="submit">Create</button>
    </form>
  );
};
