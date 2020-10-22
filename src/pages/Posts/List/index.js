import React from "react";
import { ListItem } from './ListItem';
import { observer } from 'mobx-react';
import PostObservable from '../../../stores/PostObservable';

export const List = () => {
    const ListItems = observer(() => PostObservable.allPosts.map((e, i) => <ListItem {...e} key={i} />));
    return <ul className="list-group">
        <ListItems />
    </ul>
};