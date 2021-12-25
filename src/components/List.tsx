import React from 'react';
import { IState as IProps } from './../App'


const List: React.FC<IProps> = ({ player }) => {
    const renderList = (): JSX.Element[] => {
        return player.map((playerr) => {

            return (
                <li className='List'>
                    <div className='List-header'>
                        <img src={playerr.url} alt="" className="List-img" />
                        <h2>{playerr.name}</h2>
                    </div>
                    <p>{playerr.type}</p>
                    <p className="Lis-note">{playerr.club}</p>
                </li>
            )
        })
    }
    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List