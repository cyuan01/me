import React from "react";
import '../App.css';
import { FaGithub } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import IdCard from './IdCard'
import { IoIosPaper } from 'react-icons/io'
import { GoHeart } from 'react-icons/go'
import ProjectItem from './ProjectItem'
import medium from '../assets/medium.png'
import Skills from './Skills'
import Pdf from '../assets/resume.pdf';

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            skills: {
                'React.js': {
                    active: false,
                    skill: 'React.js'
                },
                'React Native': {
                    active: false,
                    skill: 'React Native'
                },
                'Firebase': {
                    active: false,
                    skill: 'Firebase'
                },
                'Redux': {
                    active: false,
                    skill: 'Redux'
                },
                'JavaScript': {
                    active: false,
                    skill: 'JavaScript'
                },
                'Python': {
                    active: false,
                    skill: 'Python'
                },
                'C++': {
                    active: false,
                    skill: 'C++'
                },
                'C': {
                  active: false,
                  skill: 'C'
                },
                'HTML': {
                    active: false,
                    skill: 'HTML'
                },
                'CSS': {
                    active: false,
                    skill: 'CSS'
                }
            }
        };

        this.skillClick = this.skillClick.bind(this);

    };

    skillClick(skill) {
        this.setState({
            skills:
            {
                ...this.state.skills,
                [skill]:
                {
                    ...this.state.skills[skill],
                    active: !this.state.skills[skill].active
                }
            }
        })
    }
    render() {
        return (

            <div
                style={{
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: "#1f2236",
                }}
            >

                <div
                    style={{
                        marginLeft: '10%',
                        marginRight: '10%',
                        marginTop: '20%',
                        marginBottom: '20%',
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'column',
                        color: '#c3c8e8'
                    }}
                >

                    <p className="smallTitle CB FC Txt">Hello, world! My name is,</p>
                    <p className="bigTitle CB FB Txt">>_袁霄 Chadd Yuan</p>
                    <p className="subTitleBlurb CG Txt">I'm a full stack software developer looking for new opportunities to build cool stuff.</p>
                    <p className="smallTitle CB Txt"><GoLocation /> Boston, MA </p>
                    <div style={{dispaly: 'flex'}}>
                        <a href={'https://www.linkedin.com/in/cyuan01/'} target="_blank">
                            <p className="CA link">
                                <FaLinkedin />
                            </p>
                        </a>
                        <a href={'https://github.com/cyuan01'} target="_blank">
                            <p className="CA link">
                                <FaGithub />
                            </p>
                        </a>
                        <a href={'mailto:chaddyuan@gmail.com'} target="_blank">
                            <p className="CA link">
                                <MdEmail />
                            </p>
                        </a>
                    </div>
                    <br />
                    <p className="subTitleBlurb CG Txt">In a rush?</p>
                    <a href={Pdf} className="resume FC" target="_blank"><IoIosPaper /> My Resume</a>

                    {/* <IdCard /> */}


                    <div style={{ marginTop: '20%', }}>
                        <p className="sectionTitle CB Txt mgB20"> About</p>
                        <p className="content CB Txt">
                            I recently graduated Magna Cum Laude from Tufts     University with a B.S. in Computer Science and minor in Finance. In my free time I love working on old BMW's, hiking, and building passion projects.
                        </p>
                        <br />
                        <p className="content CB Txt">
                            I’m most interested in entrepreneurship through leveraging B2B opportunities within consumer technology. Currently, I’m expanding my mobile development skills, learning to build scalable software, and gaining experience starting a company by developing a sports engagement platform. I’m open to full time software development positions or just talking about my work so feel free to reach out!
                        </p>
                        <Skills
                            skills={this.state.skills}
                            handleClick={this.skillClick}
                        />
                    </div>
                    <div style={{ marginTop: '10%', }}>
                        <p className="sectionTitle CB Txt mgB20">Personal Projects</p>
                    </div>
                    <div style={{}}>
                        <ProjectItem
                            tags={[this.state.skills['React.js'], this.state.skills['React Native'], this.state.skills['Redux'], this.state.skills['Firebase']]}
                            title={"RealTime Sports"}
                            desc={
                                "RealTime allows you and your friends to actively engage alongside your favorite sport via contests based on simple questions that reflect live game flow. Unlike other apps that require high-level analytics, RealTime values a fair payout structure designed for the casual player."
                            }
                            links={[{ href: 'https://realtimesports.io', type: 'gen' }]}
                        />

                        <div className="centered">
                            <img
                                className="rtImg"
                                width='100%'
                                height='auto'
                                src={'https://realtimesports.io/static/media/appMockClear.49737975.png'}
                            />
                        </div>

                        <ProjectItem
                            tags={[this.state.skills['Python']]}
                            title={"Political Polarization on Twitter"}
                            desc={
                                "In this big data project, I Co-published a featured Medium article based on research into the intersection between Twitter and politics. By leveraging Twitter's API I developed a web-app that hosted a dynamic histogram of sentiment score for real-time tweets containing a specified keyword. Among various findings, we looked into Trump's impact on "
                            }
                            links={[
                                { href: 'https://medium.com/@AlexS19376448/political-polarization-on-twitter-8aaaf880dc52', type: 'gen' },
                                { href: 'https://github.com/cyuan01/birdnest', type: 'git' }

                            ]}
                        />
                        <div className="centered">
                            <img
                                width='100%'
                                height='auto'
                                src={medium}
                            />
                        </div>
                    </div>

                </div>

                <div className="footer" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <p className='footerTxt'>Made with</p>
                  <GoHeart style={{color: '#f54242', fontSize: 22, paddingLeft: 5, paddingRight: 5}}/>
                  <p className='footerTxt'>by Chadd Yuan | 2020</p>
                </div>             
            </div>
        )
    }
}

export default Home