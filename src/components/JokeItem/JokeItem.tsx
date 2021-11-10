import React from 'react';
import { RiThumbUpLine, RiThumbUpFill } from 'react-icons/ri';
import './JokeItem.css';

interface Joke {
  id: number,
  type: string,
  setup: string,
  punchline: string,
  isLiked: boolean
}

interface Props {
  joke: Joke;
  isFavorite: (jokeId: number) => void;
}

const JokeItem = ({ joke, isFavorite }: Props) => (
  <>
    <li data-testid={`jokeItem-${joke.id}`} className="joke-item-container" key={joke.id}>
      <div className="joke-item-body">
        <div>{joke.setup}</div>
        <div>{joke.punchline}</div>
        <div>
          <button
            type="button"
            onClick={() => isFavorite(joke.id)}
          >
            { !joke.isLiked ? <RiThumbUpLine /> : <RiThumbUpFill /> }
          </button>
        </div>
      </div>

    </li>
  </>
);

export default JokeItem;
