import React, {useState} from "react";

const Posts = () => {
  const [visible, setvisible] = useState(3);
  const [posts, setPosts] = useState([
    {
      title: "Game One",
      player1: "Naryo",
      player1_choice: "Rock",
      player2: "Enggi",
      player2_choice: "Paper",
    },
    {
      title: "Game Two",
      player1: "Edwin",
      player1_choice: "Paper",
      player2: "Enggi",
      player2_choice: "Paper",
    },
    {
      title: "Game Three",
      player1: "Burhan",
      player1_choice: "Scissor",
      player2: "Naryo",
      player2_choice: "Rock",
    },
    {
      title: "Game Four",
      player1: "Ediet",
      player1_choice: "Rock",
      player2: "John",
      player2_choice: "Rock",
    },
    {
      title: "Game Five",
      player1: "Homie",
      player1_choice: "Paper",
      player2: "Enggi",
      player2_choice: "Scissor",
    },
  ]);

  return (
    <div className="w-full flex justify-evenly items-center flex-wrap  bg-gray-800 h-full">
      {posts.slice(0, visible).map(post => {
        return (
          <div className="p-5 m-2 bg-gray-200 w-72 h-42 rounded-md">
            <span className="text-mandarin text-xl font-bold border-b-2 border-gray-600">
              {post.title}
            </span>
            <div>Player 1 : {post.player1}</div>
            <div>Player 1 Choice :{post.player1_choice}</div>
            <div>Player 2 : {post.player2}</div>
            <div>Player 2 Choice :{post.player2_choice}</div>
            <div></div>
          </div>
        );
      })}
      <div>
        <button
          onClick={() => setvisible(visible + 1)}
          className="bg-gray-200 p-2 rounded-md"
        >
          Show more
        </button>
        <button
          onClick={() => setvisible(visible - 1)}
          className="bg-gray-200 p-2 rounded-md"
        >
          Show less
        </button>
      </div>
    </div>
  );
};

export default Posts;
