const projects = [

    {

        id: 1,

        name: 'Portfolio Website',

        description: 'This very site, built with vanilla HTML, CSS, and JS.',

        link: 'https://github.com',

        isFeatured: true

    },

    {

        id: 2,

        name: 'E-commerce App Mockup',

        description: 'A front-end mockup for an online store, focusing on layout and state.',

        link: 'https://github.com',

        isFeatured: true

    },

    {

        id: 3,

        name: 'Task Manager',

        description: 'A simple to-do list application to practice DOM manipulation.',

        link: 'https://github.com',

        isFeatured: false

    }

];



const skills = ['HTML5', 'CSS3 (Flexbox, Grid)', 'JavaScript (ES6+)', 'React', 'Python', 'Node.js'];




const projectList = document.getElementById('project-list');

const skillsList = document.getElementById('skills-list');

const avatar = document.getElementById('avatar-img');



const filterButtons = document.querySelectorAll('.filter-btn');





const renderProjects = (projectsToRender) => {



    projectList.innerHTML = '';



    projectsToRender.forEach(project => {



        const li = document.createElement('li');

        li.className = 'project-item';




        li.innerHTML = `

                ${project.isFeatured ? '<span class="project-badge">Featured</span>' : ''}

                <h3>${project.name}</h3>

                <p>${project.description}</p>

                <a href="${project.link}" class="project-link" target="_blank">View Project</a>

            `;



        projectList.appendChild(li);

    });

};



const renderSkills = () => {


    const skillItems = skills.map(skill => {

        const li = document.createElement('li');


        li.textContent = skill;

        return li;

    });



    skillItems.forEach(item => skillsList.appendChild(item));

};





filterButtons.forEach(button => {

    button.addEventListener('click', () => {


        filterButtons.forEach(btn => btn.classList.remove('active'));


        button.classList.add('active');


        const filterType = button.dataset.filter;



        if (filterType === 'featured') {


            const featuredProjects = projects.filter(project => project.isFeatured === true);

            renderProjects(featuredProjects);

        } else {

            renderProjects(projects);

        }

    });

});



avatar.addEventListener('mouseover', () => {


    avatar.style.transform = 'scale(1.05)';

    avatar.style.boxShadow = '0 5px 15px rgba(91, 30, 144, 0.4)';

});


avatar.addEventListener('mouseout', () => {

    avatar.style.transform = 'scale(1)';

    avatar.style.boxShadow = 'none';

});




renderSkills();

renderProjects(projects);
