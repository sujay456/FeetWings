import gsap from 'gsap';
import React,{useEffect,useRef} from 'react';
import  './lines.scss';
const Lines=(props)=>{

    // const identifier=[];
    const lineRef=useRef(null);
    // identifier.push("Line");
    // identifier.push(props.name);

    useEffect(()=>{
        if(props.startFlag)
        {
            // if(props.name==='redline')
            // {
                const tl=gsap.timeline();
                tl
                .to('.Line',{x:'130vw',duration:2,ease:'Power4.easeInOut'})
                .to('.XLine',{x:'120vw',duration:2,ease:'Power4.easeInOut',stagger:0.03},'<0.1')

            // }
        }
    },[props.startFlag,props.name])

    return (
        <div ref={lineRef} className={props.name}>

        </div>
    );
}

export default Lines;