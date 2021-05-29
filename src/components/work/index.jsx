import React, {Component} from 'react';
import { WorkSection, WorkTitle, Span, WorkPart, Icon, PartTitle, Line, PartDesc} from './style';
import axios from 'axios';

class Work extends Component {

    state = {
        works: []
    };
    componentDidMount(){
        axios.get('data/data.json').then(res => { this.setState({ works: res.data.works})});
        
        
    }
    

    render(){

        const {works} = this.state;

        const workList = works.map(work=>{
            return(
            <WorkPart first={work.id} key={work.id}>
                <Icon className={work.icon_name}></Icon>
                <PartTitle>{work.title}</PartTitle>
                <Line className="line" />
                <PartDesc>{work.body}</PartDesc>
            </WorkPart>);
        });
        
    return (
        <WorkSection>
            <div className="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                {workList}
            </div>
        </WorkSection>
    );
}
};

export default Work;