/*
 * Code generated by Backengine
 *
 * https://backengine.dev
 */

"use client";

import { FormEventHandler, MouseEventHandler, useState } from "react";
import type { Row, UpdateEntry } from "../../hooks/useEntries";

const fields: Array<keyof UpdateEntry> = [
  "id",
  "user_id",
  "contest_id",
  "points",
  "submission_url",
];

export default function UpdateEntries({
  onUpdate,
  onFetch,
}: {
  onUpdate: (
    id: Row["id"],
    updatedRow: UpdateEntry,
  ) => Promise<Row | undefined>;
  onFetch: () => Promise<void>;
}) {
  const [message, setMessage] = useState<string>();

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const target = event.target as typeof event.target & UpdateEntry;
    const id = (target["id"] as any)?.value;
    const updatedRow = fields
      .map((field) => ({ field, value: (target[field] as any)?.value }))
      .reduce(
        (newRow, { field, value }) => {
          if (value.trim() !== "") {
            newRow[field] = value;
          }
          return newRow;
        },
        {} as Record<keyof UpdateEntry, any>,
      );
    onUpdate(id, updatedRow)
      .then((task) => {
        if (task) {
          setMessage("row with id " + task.id + " updated!");
          onFetch();
        } else {
          setMessage("failed to update row!");
        }
      })
      .catch((error) => {
        if (error.message) {
          setMessage(error.message);
        } else {
          setMessage("failed to update row!");
        }
      });
  };

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    setMessage(undefined);
  };

  if (message) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "98px",
          justifyContent: "end",
        }}
      >
        {message}
        <button
          style={{
            background: "#fff",
            color: "#000",
            marginTop: "20px",
            padding: "8px 10px",
            width: "200px",
            borderRadius: "0.375rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={handleClick}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        paddingTop: "20px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="flex items-center">
          <label
            htmlFor="id"
            style={{
              flexBasis: "200px",
              marginRight: "10px",
            }}
          >
            id
          </label>
          <label
            htmlFor="id"
            style={{
              flexBasis: "200px",
            }}
          >
            uuid
          </label>
          <input
            type="text"
            id="id"
            style={{
              background: "#000",
              color: "#fff",
              border: "1px solid #34383A",
              marginLeft: "10px",
              flex: "1",
              borderRadius: "0.375rem",
              padding: "4px 16px",
            }}
          />
        </div>

        <div className="flex items-center">
          <label
            htmlFor="user_id"
            style={{
              flexBasis: "200px",
              marginRight: "10px",
            }}
          >
            user_id
          </label>
          <label
            htmlFor="user_id"
            style={{
              flexBasis: "200px",
            }}
          >
            uuid
          </label>
          <input
            type="text"
            id="user_id"
            style={{
              marginTop: "10px",
              background: "#000",
              color: "#fff",
              border: "1px solid #34383A",
              marginLeft: "10px",
              flex: "1",
              borderRadius: "0.375rem",
              padding: "4px 16px",
            }}
          />
        </div>

        <div className="flex items-center">
          <label
            htmlFor="contest_id"
            style={{
              flexBasis: "200px",
              marginRight: "10px",
            }}
          >
            contest_id
          </label>
          <label
            htmlFor="contest_id"
            style={{
              flexBasis: "200px",
            }}
          >
            uuid
          </label>
          <input
            type="text"
            id="contest_id"
            style={{
              marginTop: "10px",
              background: "#000",
              color: "#fff",
              border: "1px solid #34383A",
              marginLeft: "10px",
              flex: "1",
              borderRadius: "0.375rem",
              padding: "4px 16px",
            }}
          />
        </div>

        <div className="flex items-center">
          <label
            htmlFor="points"
            style={{
              flexBasis: "200px",
              marginRight: "10px",
            }}
          >
            points
          </label>
          <label
            htmlFor="points"
            style={{
              flexBasis: "200px",
            }}
          >
            bigint
          </label>
          <input
            type="text"
            id="points"
            style={{
              marginTop: "10px",
              background: "#000",
              color: "#fff",
              border: "1px solid #34383A",
              marginLeft: "10px",
              flex: "1",
              borderRadius: "0.375rem",
              padding: "4px 16px",
            }}
          />
        </div>

        <div className="flex items-center">
          <label
            htmlFor="submission_url"
            style={{
              flexBasis: "200px",
              marginRight: "10px",
            }}
          >
            submission_url
          </label>
          <label
            htmlFor="submission_url"
            style={{
              flexBasis: "200px",
            }}
          >
            text
          </label>
          <input
            type="text"
            id="submission_url"
            style={{
              marginTop: "10px",
              background: "#000",
              color: "#fff",
              border: "1px solid #34383A",
              marginLeft: "10px",
              flex: "1",
              borderRadius: "0.375rem",
              padding: "4px 16px",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            background: "#fff",
            color: "#000",
            marginTop: "10px",
            padding: "8px 10px",
            width: "200px",
            borderRadius: "0.375rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ marginRight: "10px" }}>Run PUT</div>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={{
              height: "20px",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
