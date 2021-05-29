import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SocialMedia, SocialParts, Icon, P, Span, Info2} from './style';
const Social = () => {

    const [Items, setItems] = useState([]);

    useEffect(()=>{
        axios.get('data/data.json').then(item => setItems(item.data.social))
    },[]);

    const SocialList = Items.map(item=>{
        return(
            <SocialParts key={item.id} item={item.id}>
                <Icon className={item.icon}></Icon>
                <P>
                    <Span>{item.title}</Span>
                    <Info2>{item.body}</Info2>
                </P>
            </SocialParts>
        );
    });

    return (
        <SocialMedia >
            {SocialList}
        </SocialMedia>
    );
};

export default Social;