import React, {useState, useEffect, useRef} from 'react';
import StyledHome, { Information, Navigation, HeaderContent, Button, NavigationContent,Footer, CallCenter } from '../styled/StyledHome';
import MapSvg from '../components/MapSvg';
import gdg from '../images/gdg.png';
import google from '../images/google.png';
import ncdc from '../images/ncdc.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../constants/theme';
import { useTransition,animated } from 'react-spring';
import TabView from '../components/TabView';


const tabs = [
    {
        title: 'Survival Tips'
    },
    {
        title: 'Notification'
    },
    {
        title: 'Emergency'
    }
]

const bgs = ['white',theme.dscBGFull]

const Home  = ()=>{
    const [openMenu,setOpenMenu] = useState(false);
    const infoRef = useRef();
    const navRef = useRef();
    const headerRef = useRef();


    useEffect(()=>{
        const options = {
            rootMargin: '-70px 0px 0px 0px'
        }
        let observer = new IntersectionObserver((entries,observer)=>{
            entries.forEach(entry=>{
                if(!entry.isIntersecting){
                    console.log(entry.target.dataset.bg)
                    navRef.current.style.backgroundColor = bgs[entry.target.dataset.bg]
                }else{
                    navRef.current.style.backgroundColor = theme.dscBGFull
                }
            })
        },options);
        observer.observe(headerRef.current)
        observer.observe(infoRef.current)
    })

    

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
                     <AnimatedFontAwesomeIcon size = '2x' style = {props} onClick = {toggleOpenMenu} icon = 'bars'/>
                )
                }
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
                                <a href="">COVID-19 Info</a>
                                
                            </li>
                            <li>
                                <FontAwesomeIcon color = '#d2dde8' icon = 'share-alt'/>
                                <a href="">Share</a>
                                
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
                        <div className="OurPartners">
                            <p>Partners</p>
                            <div className="Partners">
                                <img src={google} alt=""/>
                                <img src={gdg} alt=""/>
                                <img src={ncdc} alt=""/>
                            </div>
                        </div>
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
            <Information bg = {1} ref = {infoRef}>
                <div className = "Header">
                    <h1>Let's help keep Nigeria safe</h1>
                    <p>Get the right information to keep yourself, family, and friends safe</p>
                </div>
                    <TabView tabs = {tabs}>
                        <div className="TabContent">

                        </div>
                        <div className="TabContent">
                            
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
                <div className="Image">
                    <img src={gdg} alt=""/>
                </div>
                </div>
            </Footer>
        </StyledHome>
    )
}


export default Home;