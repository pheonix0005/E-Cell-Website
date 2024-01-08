import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline=()=>{
    return(
        <>
        <div className="heading container ">
          <h1>OUR <span className="green">EVENTS</span></h1> 
        </div>
        <div className="Timeline">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#0F1035', color: '#fff',  marginLeft:'10px'}}
            contentArrowStyle={{ borderRight: '7px solid  #0F1035' }}
            date="Day 1"
            iconStyle={{background:'#5ce1e6' , height:'15px', width:'15px' ,borderRadius: '50%', marginLeft: '-8px', marginTop: '25px' ,border:'solid 0px'}}
            // icon={<WorkIcon />}
          >
            {/* <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <div className="eventNames">
            <h3>
              OPENING CEREMONY
            </h3>
            <h3>
              MILLION DOLLAR IDEA
            </h3>
            <h3>
              TRADE TANGO
            </h3> <h3>
              MYSTERY ROOM
            </h3> <h3>
              SPEAKER SESSION
            </h3> <h3>
              MONOPOLY
            </h3>  <h3>
              FIND X
            </h3> <h3>
              SILENT DJ
            </h3>
            <h3>
              GAMING NIGHT
            </h3>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#0F1035', color: '#fff',  marginLeft:'10px'}}
            contentArrowStyle={{ borderRight: '7px solid  #0F1035' }}
            date="Day 2"
            iconStyle={{background:'#5ce1e6' , height:'15px', width:'15px' ,borderRadius: '50%', marginLeft: '-8px', marginTop: '25px' ,border:'solid 0px'}}
            // icon={<WorkIcon />}
          >
            {/* <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <div className="eventNames">
            <h3>
              SPEAKER SESSION
            </h3>
            <h3>
              E-SHIP QUIZ
            </h3>
            <h3>
              MYSTERY ROOMS
            </h3> <h3>
              IPL AUCTION
            </h3> <h3>
              VENTURER
            </h3> <h3>
              GAMING NIGHT
            </h3>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#0F1035', color: '#fff',  marginLeft:'10px'}}
            contentArrowStyle={{ borderRight: '7px solid  #0F1035' }}
            date="Day 3"
            iconStyle={{background:'#5ce1e6' , height:'15px', width:'15px' ,borderRadius: '50%', marginLeft: '-8px', marginTop: '25px' ,border:'solid 0px'}}
            // icon={<WorkIcon />}
          >
            {/* <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <div className="eventNames">
            <h3>
              SPEAKER SESSION
            </h3>
            <h3>
              MONOPOLY
            </h3>
            <h3>
              RESULTS
            </h3> <h3>
              CLOSING CEREMONY
            </h3> 
            </div>
          </VerticalTimelineElement>
          
</VerticalTimeline>
</div>
        </>
    )
}

export default Timeline;