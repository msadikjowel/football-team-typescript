import React, { useState } from 'react';
import { IState as Props } from './../App'

interface IProps {
    player: Props['player']
    setPlayer: React.Dispatch<React.SetStateAction<Props['player']>>
}

const AddToList: React.FC<IProps> = ({ player, setPlayer }) => {
    const [input, setInput] = useState({
        name: '',
        url: '',
        type: '',
        club: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if (!input.name || !input.url || !input.type) {
            return
        }
        setPlayer([
            ...player, {
                name: input.name,
                url: input.url,
                type: input.type,
                club: input.club
            }
        ]);
        setInput({
            name: '',
            url: '',
            type: '',
            club: ''
        })
    }

    return (
        <div className='AddToList'>
            <input
                type='text'
                placeholder='Player Name' className='AddToList-input'
                value={input.name}
                onChange={handleChange}
                name='name'
            />
            <input
                type='text'
                placeholder='Player Image URL' className='AddToList-input'
                value={input.url}
                onChange={handleChange}
                name='url'
            />
            <input
                type='text'
                placeholder='Player Type (eg: Striker)' className='AddToList-input'
                value={input.type}
                onChange={handleChange}
                name='type'
            />
            <input
                type='text'
                placeholder='Player Current Club' className='AddToList-input'
                value={input.club}
                onChange={handleChange}
                name='club'
            />
            <button
                className='AddToList-btn'
                onClick={handleClick}
            >Add to List</button>
        </div>
    );
};

export default AddToList;