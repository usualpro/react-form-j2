import React from "react";
import { TextArea } from './TextArea';
import { List } from './List';
import PostObservable from '../../stores/PostObservable';

export const Posts = () => {
    
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <TextArea />
                </div>
                <div className="col">
                    <List />
                </div>
            </div>
        </div>
    );
};
