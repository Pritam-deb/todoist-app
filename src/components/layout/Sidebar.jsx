import { useState } from 'react';
import { FaChevronDown, FaInbox, FaRegCalendar, FaRegCalendarAlt } from 'react-icons/fa';
import { useSelectedProjectValue } from '../../context';
import { AddProject } from '../AddProject';
import { Projects } from '../Projects';


const Sidebar = () => {

    const { setSelectedProject } = useSelectedProjectValue;
    const [active, setActive] = useState('inbox');
    const [showProjects, setShowProjects] = useState(true);
    return(
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar_generic">
                <li><span> <FaInbox/> </span><span>Inbox</span></li>
                <li><span> <FaRegCalendar/> </span><span>Today</span></li>
                <li><span> <FaRegCalendarAlt/> </span><span>Next 7 Days</span></li>
            </ul>
            <div className="sidebar__middle">
                <span> <FaChevronDown/> </span>
                <h2>Projects</h2>
            </div>
            <ul className="sidebar__projects">{ showProjects && <Projects/> }</ul>
            {showProjects && <AddProject/>}
        </div>
    )
}

export default Sidebar;