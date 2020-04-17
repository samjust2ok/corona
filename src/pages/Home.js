import React, {useState, useEffect, useRef} from 'react';
import StyledHome, { Information, Navigation, HeaderContent, Button, NavigationContent,Footer, CallCenter, ShareCard } from '../styled/StyledHome';
import MapSvg from '../components/MapSvg';
import imap from '../images/imap.png';
import gmap from '../images/gmap.png';
import h1 from '../images/h1.jpg';
import h2 from '../images/h2.jpg';
import h3 from '../images/h3.jpg';
import h4 from '../images/h4.jpg';
import h5 from '../images/h5.jpg';
import h6 from '../images/h6.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../constants/theme';
import { useTransition,animated } from 'react-spring';
import TabView from '../components/TabView';
import { TotalStatistics, World, SurvivalInfo } from '../components/InfoCards';

import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
    LinkedinIcon,
} from 'react-share';
import { useDispatch, useSelector } from 'react-redux';
import { getLiveCases } from '../actions/apiActions';

const imagesArr = [h1,h2,h3,h4,h5,h6];

const URL = 'report-covid.netlify.com';
const SHARE_QUOTE = 'Report suspected cases of COVID-19 to help the NCDC combat the spread. | Help flatten the curve';
const HASHTAG = '#ReportCovid';
const TITLE = 'REPORT COVID';

const tabs = [
    {
        title: 'Survival Tips'
    },
    {
        title: 'Notification'
    }
]

const bgs = ['white',theme.dscBGFull]


const Home  = ()=>{
    const [openMenu,setOpenMenu] = useState(false);
    const [showShare,setShowShare] = useState(false);
    const [showIphoneHelp,setShowIphoneHelp] = useState(false);
    const infoRef = useRef();
    const navRef = useRef();
    const headerRef = useRef();
    const casesSelector = useSelector(state=>state.liveCases);

    const handleShowSharePop = ()=>{
        setOpenMenu(false);
        setShowShare(!showShare)
    }

    const handleShowIphoneHelp = ()=>{
        setShowIphoneHelp(true);
    }

    const onSharePopClose = ()=>{
        setShowShare(false)
    }

    const dispatch = useDispatch()

    useEffect(()=>{
        // Set the options object for the observer
        const options = {
            rootMargin: '-70px 0px 0px 0px'
        }

        //Declare the observer to watch for navigation bacground color change
        let observer = new IntersectionObserver((entries,observer)=>{
            entries.forEach(entry=>{
                if(!entry.isIntersecting){
                    navRef.current.style.backgroundColor = bgs[entry.target.dataset.bg]
                }else{
                    navRef.current.style.backgroundColor = theme.dscBGFull
                }
            })
        },options);
        observer.observe(headerRef.current)
        observer.observe(infoRef.current)
        
        //Call to get the live statistics from ncdc
        dispatch(getLiveCases())
    },[])

    

    const transitions = useTransition(openMenu, null, {
        from: {position:'absolute', opacity: 0, transform: 'translateX(-20px)' },
        enter: { opacity: 1, transform: 'translateX(0px)' },
        leave: {  opacity: 0, transform: 'translateX(25px)' },
    })

    const transitions2 = useTransition(openMenu, null, {
        from: {left:'-90%', opacity:0 },
        enter: { left: '0%', opacity:1 },
        leave: {  left: '-90%',opacity:1},
    })


    const transitions3 = useTransition(showShare, null, {
        from: {transform: 'scale(0.5) translate(-50%,-50%)', display: 'block'},
        enter: { transform: 'scale(1) translate(-50%,-50%)'},
        leave: {  transform: 'scale(0) translate(-50%,-50%)', display: 'none'},
    })

    const transitions4 = useTransition(showIphoneHelp, null, {
        from: {transform: 'translate(-50%, -55%)', opacity: 0, boxShadow: '0px 0px 0px 0px rgba(0,0,0,0)'},
        enter: { transform: 'translate(-50%, -50%)', opacity: 1, boxShadow: '0px 0px 0px 10000px rgba(0,0,0,.4)'},
        leave: {  transform: 'translate(-50%, -55%)', opacity: 0, boxShadow: '0px 0px 0px 0px rgba(0,0,0,0)'},
    })

    const toggleOpenMenu = ()=> setOpenMenu(!openMenu);

    

    const AnimatedFontAwesomeIcon = animated(FontAwesomeIcon);
    const AnimatedNavigationContent = animated(NavigationContent);

    return (
        <StyledHome>
            <Navigation ref = {navRef}>
                <div className = 'Logo'>
                    
                </div>
                <div className="MenuIcon">
                {
                     transitions.map(({ item, key, props }) =>
                     item ? <AnimatedFontAwesomeIcon key = {key} size = '2x' style = {props} onClick = {toggleOpenMenu} icon = 'times'/>:
                     <AnimatedFontAwesomeIcon key = {key} size = '2x' style = {props} onClick = {toggleOpenMenu} icon = 'bars'/>
                )
                }
                </div>
                <div className="Links">
                    <ul>
                        <li className = "NavItem">
                            <div className = "NavTitle">
                                <p>Account</p>
                                <FontAwesomeIcon icon = 'caret-down'/>
                            </div>
                            <div className="Dropdown">
                                    <li className = "Dropdown-Item Account">
                                        <a href="/signup">Create an account</a>
                                        <p>Get started with an account within few seconds</p>
                                    </li>
                                    <li className = "Dropdown-Item Account">
                                        <a href="/login">
                                            Sign In
                                        </a>
                                    </li>
                            </div>
                        </li>
                        <li className = "NavItem">
                            <p className = "NavTitle">
                                <p>Share</p>
                                <FontAwesomeIcon icon = 'caret-down'/>
                            </p>
                            <div className="Dropdown">
                                <li className = "Dropdown-Item Share">
                                    <WhatsappShareButton separator = '|' url = {URL}>
                                        <WhatsappIcon round = {true} size = {30}/>
                                        <span>Whatsapp</span>
                                    </WhatsappShareButton>
                                </li>
                                <li className = "Dropdown-Item Share">
                                    <FacebookShareButton hashtag = {HASHTAG} quote = {SHARE_QUOTE} url = {URL}>
                                        <FacebookIcon round = {true} size = {30}/>
                                        <span>Facebook</span>
                                    </FacebookShareButton>
                                </li>
                                <li className = "Dropdown-Item Share">
                                    <TwitterShareButton hashtag = {[HASHTAG,'FLATTEN_THE_CURVE']} quote = {SHARE_QUOTE} url = {URL}>
                                        <TwitterIcon title = {TITLE} round = {true} size = {30}/>
                                        <span>Twitter</span>
                                    </TwitterShareButton>
                                </li>
                                <li className = "Dropdown-Item Share">
                                    <LinkedinShareButton title = {TITLE} description = {SHARE_QUOTE} url = {URL}>
                                        <LinkedinIcon round = {true} size = {30}/>
                                        <span>Linkedin</span>
                                    </LinkedinShareButton>
                                </li>
                                <li className = "Dropdown-Item Share">
                                    <TelegramShareButton title = {TITLE} url = {URL}>
                                        <TelegramIcon round = {true} size = {30}/>
                                        <span>Telegram</span>
                                    </TelegramShareButton>
                                </li>
                            </div>
                        </li>
                        <li className="NavItem">
                            <Button>
                               <a href="/login">
                                   Sign in
                               </a>
                            </Button>
                        </li>
                    </ul>
                </div>
            </Navigation>
            {
                transitions2.map(({item,key,props})=> item &&
                    <AnimatedNavigationContent className = {`${openMenu ? 'show-shadow':''}`} style = {props}>
                        <ul>
                            <li>
                                <FontAwesomeIcon color = '#d2dde8' icon = 'user-alt'/>
                                <a href="/signup">Create an account</a>
                            </li>
                            <li>
                                <FontAwesomeIcon color = '#d2dde8' icon = 'file-medical-alt'/>
                                <a href="/report">Report a case</a>
                            </li>
                            <li>
                                <FontAwesomeIcon color = '#d2dde8' icon = 'info-circle'/>
                                <a href="/info">COVID-19 Info</a>
                                
                            </li>
                            <li onClick = {handleShowSharePop}>
                                <FontAwesomeIcon color = '#d2dde8' icon = 'share-alt'/>
                                <span>Share</span>
                            </li>
                            {/* <li>
                                <FontAwesomeIcon color = '#d2dde8' icon = 'hands-helping'/>
                                <a href="">Support</a>
                                
                            </li> */}
                            <li>
                                <Button>
                                    <a href="/login">Sign In</a>
                                </Button>
                            </li>
                        </ul>
                    </AnimatedNavigationContent>
                )
            }
            
            {
                transitions3.map(({item,key,props})=> item && <Share onSharePopClose = {onSharePopClose} props = {props}/>)
            }

            {
                transitions4.map(({item,key,props})=> item && (
                    <animated.div style = {props} key = {key} className="Help">
                        <div className="Header">
                            <h4>How to</h4>
                            <FontAwesomeIcon onClick = {()=>setShowIphoneHelp(false)} icon = "times"/>
                        </div>
                        <ol className = "Content">
                            <li>Open the Settings app and tap on “Privacy.”</li>
                            <li>From here, select “Location Services.”</li>
                            <li>Scroll down in this screen and tap on “System Services.”</li>
                            <li>From the next screen, tap on “Significant Locations.”</li>
                            <li>Locate the History section, which collects and groups places based on how often you’ve visited
                                them.</li>
                            <li>When you tap on a location collection from the “History” section, it will show you a visual
                                breakdown in the next screen.</li>
                            <li>You’ll see the map of all locations at the top of the display.</li>
                        </ol>
                    </animated.div>
                ))
            }

                <HeaderContent data-bg = {0} ref = {headerRef}>
                    <MapSvg/>
                    <div className="FocusedContent">
                        <h1>Report suspected cases of <span>COVID-19</span> to NCDC</h1>
                        <p>Help the NCDC reach you by providing neccessary information on our <a href = '/report'>report</a> page</p>
                        <Button>
                            <a href="/report">Report a case now</a>
                        </Button>
                    </div>
                    <div className = "HeaderFooter">
                        <div className="MoreDetails">
                        <p>Three simple steps</p>
                        <div className="Steps ScrollbarHide">
                            <div className="Step">
                                <div className = 'Icon'>
                                    <FontAwesomeIcon color = {theme.dscLightBlue} size = '2x' icon = 'file-medical-alt'/>
                                </div>
                                <p>
                                    Submit a report to us using the report button
                                </p>
                            </div>
                            <div className="Step">
                                <div className = 'Icon'>
                                    <FontAwesomeIcon color = {theme.dscLightBlue} size = '2x' icon = 'phone-volume'/>
                                </div>
                                <p>Communicate with NCDC to help you get better</p>
                            </div>
                            <div className="Step">
                            <div className = 'Icon'>
                                    <FontAwesomeIcon color = {theme.dscLightBlue} size = '2x' icon = 'share-alt'/>
                                </div>
                                <p>
                                    Share with your friends and family
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                    
                </HeaderContent>
            <Information className = "TrackLocation" bg = {1} ref = {infoRef}>
                <div className = "Header">
                    <h1>Track where you've been recently</h1>
                    <p>Help the authorities know where to look</p>
                </div>
                 <div className="TrackButtons">
                    <button className="TButton">
                        <a href="https://www.google.com/maps/timeline">
                            <span>
                                <img src={gmap} alt=""/>
                            </span>
                            <span>Android</span>
                        </a>
                    </button>
                    <button onClick = {handleShowIphoneHelp} className="TButton">
                        <a href="#">
                            <span>
                                <img src={imap} alt=""/>
                            </span>
                            <span>Apple</span>
                        </a>
                    </button>
                 </div>
            </Information>
            <Information bg = {1} ref = {infoRef}>
                <div className = "Header">
                    <h1>Let's help keep Nigeria safe</h1>
                    <p>Get the right information to keep yourself, family, and friends safe</p>
                </div>
                    <TabView tabs = {tabs}>
                            <div className="TabContent">
                                <SurvivalInfo images = {imagesArr}/>
                                {/* <div className="ViewAll">
                                    <a href="/survival">
                                        <span>
                                            See All
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon = "arrow-right"/>
                                        </span>
                                    </a>
                                </div> */}
                            </div>
                        <div className="TabContent">
                            <div className="Statistics">
                                <TotalStatistics data = {casesSelector.nigeria}/>
                                <World data = {casesSelector.world}/>
                            </div>
                        </div>
                        <div className="TabContent">
                        
                        </div>
                    </TabView>
            </Information>
            <CallCenter>
                <div className="Container">
                    <div className="Content">
                        <h1>Reach NCDC</h1>
                        <p>Quickly find the contact of NCDC officials within your state</p>
                            <button>
                                <a href="/searchpage">
                                    <span>Find Now</span>
                                    <FontAwesomeIcon  icon = 'arrow-right'/>
                                </a>
                            </button>
                    </div>
                </div>
            </CallCenter>
            <Footer>
                <div className = 'ReportNow'>
                    <div className="Info">
                        <div>
                            <p>Report Covid</p>
                            <h1>Get help quickly, keep in touch with NCDC</h1>
                        </div>
                        <Button>
                            <a href="/report">
                                Report a case today
                            </a>
                        </Button>
                    </div>
                </div>
                <div className= "ContactContainer">
                <div className="Contact">
                    <p>Contact</p>
                    <div className="SocialMedia">
                        <p>dscui@gmail.com</p>
                        <div className="Icons">
                            <a href="">
                            <FontAwesomeIcon icon = {['fab','facebook-square']}/>
                            </a>
                            <a href="">
                            <FontAwesomeIcon icon = {['fab','twitter']}/>
                            </a>
                            <a href="">
                            <FontAwesomeIcon icon = {['fab','instagram']} />
                            </a>
                            <a href = "">
                            <FontAwesomeIcon icon = {['fab','linkedin']} />
                            </a>
                            <a href="">
                            <FontAwesomeIcon icon = {['fab','youtube']} />
                            </a>
                            
                        </div>
                    </div>
                </div>
                <div className="Location">
                    <p>Ibadan</p>
                    <p>University of Ibadan</p>
                    <p>Ibadan,</p>
                    <p>Oyo State, Nigeria</p>
                </div>
                </div>
            </Footer>
        </StyledHome>
    )
}

const Share = ({onSharePopClose,props})=>{
    return (
        <ShareCard style = {props}>
            <div className="Header">
                <h3>Select</h3>
                <FontAwesomeIcon onClick = {onSharePopClose} icon = 'times'/>
            </div>
            <div className="Dropdown">
                <li className = "Dropdown-Item Share">
                    <WhatsappShareButton onShareWindowClose = {onSharePopClose} separator = '|' url = {URL}>
                        <WhatsappIcon round = {true} size = {30}/>
                        <span>Whatsapp</span>
                    </WhatsappShareButton>
                </li>
                <li className = "Dropdown-Item Share">
                    <FacebookShareButton onShareWindowClose = {onSharePopClose} hashtag = {HASHTAG} quote = {SHARE_QUOTE} url = {URL}>
                        <FacebookIcon round = {true} size = {30}/>
                        <span>Facebook</span>
                    </FacebookShareButton>
                </li>
                <li className = "Dropdown-Item Share">
                    <TwitterShareButton onShareWindowClose = {onSharePopClose} hashtag = {[HASHTAG,'FLATTEN_THE_CURVE']} quote = {SHARE_QUOTE} url = {URL}>
                        <TwitterIcon title = {TITLE} round = {true} size = {30}/>
                        <span>Twitter</span>
                    </TwitterShareButton>
                </li>
                <li className = "Dropdown-Item Share">
                    <LinkedinShareButton onShareWindowClose = {onSharePopClose} title = {TITLE} description = {SHARE_QUOTE} url = {URL}>
                        <LinkedinIcon round = {true} size = {30}/>
                        <span>Linkedin</span>
                    </LinkedinShareButton>
                </li>
                <li className = "Dropdown-Item Share">
                    <TelegramShareButton onShareWindowClose = {onSharePopClose} title = {TITLE} url = {URL}>
                        <TelegramIcon round = {true} size = {30}/>
                        <span>Telegram</span>
                    </TelegramShareButton>
                </li>
        </div>
        </ShareCard>
    );
}
export default Home;