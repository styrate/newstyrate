/*
 * Code generated by Backengine
 *
 * https://backengine.dev
 */

"use client";

import useVotes from "../../hooks/useVotes";
import GetVotes from "./GetVotes";
import CreateVotes from "./CreateVotes";
import UpdateVotes from "./UpdateVotes";
import DeleteVotes from "./DeleteVotes";

export default function Votes() {
  const { votes, fetchVotes, createVote, updateVote, deleteVote } = useVotes();

  return (
    <div>
      <GetVotes votes={votes} onFetch={fetchVotes} />
      <CreateVotes onCreate={createVote} onFetch={fetchVotes} />
      <UpdateVotes onUpdate={updateVote} onFetch={fetchVotes} />
      <DeleteVotes onDelete={deleteVote} onFetch={fetchVotes} />
    </div>
  );
}
