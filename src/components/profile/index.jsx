import React ,{useState, useEffect} from 'react';
import axios from 'axios';
import { ProfileSkillsSection, ProfileSection, ProfileList, ProfileItem, ProfileItemSpan, SpanWeb, Skills, SkillsDesc, SkillsBar, BarTitle, BarPerc, BarParent, BarParentSpan, ProfileTitle, SkillsTitle, ProfileTitleSpan, SkillsTitleSpan} from './style';

const Profile = () => {

    const [Items, setItems] = useState([]);

    useEffect(()=>{
        axios.get('data/data.json').then(item => setItems(item.data.skills));
    },[]);

    const SkillsSectionInfo = Items.map(item=>{
        return(
            <SkillsBar key={item.id}>
                <BarTitle>{item.skill_name}</BarTitle>
                <BarPerc>{item.skill_percentage}</BarPerc>
                <BarParent>
                    <BarParentSpan par={item.par_percentage}></BarParentSpan>
                </BarParent>
            </SkillsBar>
        );
    });

    return (
        <ProfileSkillsSection>
            <div className="container">
                <ProfileSection>
                    <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <ProfileItemSpan>Name</ProfileItemSpan>
                            Hamza Nabil
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Birthday</ProfileItemSpan>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Address</ProfileItemSpan>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Phone</ProfileItemSpan>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Email</ProfileItemSpan>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Website</ProfileItemSpan>
                            <SpanWeb>www.google.com</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </ProfileSection>

                <Skills>
                    <SkillsTitle>
                        Some <SkillsTitleSpan>skills</SkillsTitleSpan>
                    </SkillsTitle>
                    <SkillsDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    {SkillsSectionInfo}
                </Skills>

            </div>
        </ProfileSkillsSection>
    );
};

export default Profile;