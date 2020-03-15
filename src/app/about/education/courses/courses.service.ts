import{ Course} from './course.model';
export class CourseListService{
    private CompletedList: Course[] =[
        new Course('INTRO TO PHILOSOPHY',true),
        new Course('US HISTORY TO 1876',true),
        new Course('SPEECH COMMUNICATIONS',true),
        new Course('ENGLISH I',true),
        new Course(' CHEMISTRY I',true),
        new Course('UNIVERSITY SUCCESS',true),
        new Course('PSYCHOLOGY OF LEARNING',true),
        new Course('English II',true),
        new Course('College Level Writing',true),
        new Course('CRITICAL THINKING',true),
        new Course('DEVELOPING EFFECTIVE TEAMS',true),
        new Course('MANAGING CONFLICT',true),
        new Course('ECONOMICS AND FINANCES',true),
        new Course('FUNDAMENTALS OF IT',true),
        new Course('Cyber Domain',true),
        new Course('RHETORIC AND RESEARCH',true),
        new Course('Foundations of Security',true),
        new Course('Object-Oriented Scripting Language(Python)',true),
        new Course('WEB DESIGN',true),
        new Course('HTML5 WITH JAVASCRIPT',true),
    ];

    getCompleted(){
        return this.CompletedList.slice();
    }

    private UncompletedList: Course[] =[


        new Course('.NET I',false,'04/27/20'),
        new Course('.NET II',false,'06/01/20'),
        new Course('Infrastructure Administration',false,'07/06/20'),
        new Course('INTRODUCTION TO COLLEGE ALGEBRA',false,'08/10/20'),
        new Course('ALGORITHMS AND LOGIC FOR COMPUTER PROGRAMMING',false,'09/14/20'),
        new Course('COLLEGE ALGEBRA',false,'10/19/20'),
        new Course('C++PROGRAMMING I',false,'11/23/20'),
        new Course('JAVA PROGRAMMING I',false,'01/11/21'),
        new Course('JAVA PROGRAMMING II',false,'02/15/21'),
        new Course('Data Programming Languages',false,'03/22/21'),
        new Course('Data Structures for Problem Solving',false,'04/26/21'),
        new Course('NETWORK WEB SERVICES',false,'05/31/21'),
        new Course('SOFTWARE ENGINEERING',false,'07/05/21'),
        new Course('SOFTWARE ARCHITECTURE',false,'08/09/21'),
        new Course('FUNDAMENTALS OF NETWORKING',false,'09/13/21'),
        new Course('BUSINESS SYSTEMS DEVELOPMENT',false,'10/18/21'),
        new Course('Advanced Database Architecture',false,'11/22/21'),
        new Course('Database Integration',false,'01/10/22'),
        new Course('INFORMATION ASSURANCE & SECURITY',false,'02/14/22'),
        new Course('PROJECT PLANNING AND IMPLEMENTATION',false,'03/21/22'),
        new Course('BSIT CAPSTONE',false,'04/25/22'),
    ];
    getUncompleted(){
        return this.UncompletedList.slice();
    }
}













