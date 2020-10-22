import React from "react";
import { ListItem } from './ListItem';
import { observer } from 'mobx-react';
import PostObservable from '../../../stores/PostObservable';

export const List = observer(() => {
    return <ul className="list-group">
        {
            PostObservable.allPosts.map((e, i) => <ListItem {...e} key={i} />)
        }
    </ul>
});