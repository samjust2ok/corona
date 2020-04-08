import React, {useState, useEffect, useRef} from 'react';
import StyledTabView, { TabHeader, TabBody } from '../styled/StyledTabView';
import { useDrag } from 'react-use-gesture';
import { useSpring, animated } from 'react-spring';
import useMeasure from "use-measure";
import _ from 'lodash';



const TabView = ({children,tabs})=>{
    const [props,set] = useSpring(()=>({transform: 'translateX(0px)'}));
    
    const [index,setIndex] = useState(0);
    
    const [indicator,setInd] = useSpring(()=>({transform: 'translateX(0px)'}));
    const tabRef= useRef();

    useEffect(()=>{
        let overallWidth = window.innerWidth * 2;
        let oneWidth = overallWidth/2;
        let tabDim = tabRef.current.getBoundingClientRect();

        setInd({transform: `translateX(${(tabDim.width/3)*index}px)`})
        set({transform: `translateX(${index * -oneWidth}px)`}) 
    },[index])


    const setCurrentTab = (e)=>{
        let index = +e.target.dataset.index;
        setIndex(index);
    }

    
    const bind = useDrag(({offset: [mx,y], direction: [xDir], distance,down, cancel, swipe: [swipeX]})=>{
        if(swipeX === -1|swipeX===1){
            let currIndex = _.clamp(index + (-1*swipeX),0,2);
            setIndex(currIndex);
        }
    },{
        swipeDistance: [20,40],
        axis: 'x',
        filterTaps: true,
    })

    return(
        <StyledTabView>
            <TabHeader ref = {tabRef}>
                {
                    tabs.map((tab,i)=>{
                        return (
                            <div onClick = {setCurrentTab} data-index = {i} key = {i} className="Tab">
                                <p current = {`${index === i}`}>{tab.title}</p>
                            </div>
                        )
                    })
                }
                <animated.div style = {{...indicator}} className="Indicator">
                    <div>
                        
                    </div>
                </animated.div>
            </TabHeader>
            <TabBody  {...bind()} style = {{...props}}>
                {children}
            </TabBody>
        </StyledTabView>
    )
}

export default TabView;