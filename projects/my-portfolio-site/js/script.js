import projectsData from '../data/projects.json';
import {
	mobileNav,
	projectElSetup,
	outPutProjectData,
	technologiesListElSetup,
} from './utils.js';

const homePage = document.getElementById('home-container');
const projectsPage = document.getElementById('project-container');

fetch(projectsData)
	.then((res) => res.json())
	.then((data) => {
		// console.log(data);
		if (homePage) {
			const projectsContainerHtml = document.querySelector(
				'.projects-container'
			);
			const projectsData = data.projects;
			const bodyHtml = document.querySelector('body');
			const hamburgerMenuIcon = document.querySelector(
				'.hero-mobile-nav > span'
			);
			const mobileNavClsBtn = document.querySelector('.mobile-nav-close');
			const mobileNavMenu = document.querySelector('.mobile-nav-list');
			const mobileNavMenuLists = document.querySelectorAll(
				'.mobile-nav-list > ul > li'
			);

			AOS.init();

			mobileNav(
				mobileNavClsBtn,
				mobileNavMenu,
				hamburgerMenuIcon,
				mobileNavMenuLists,
				bodyHtml
			);

			projectsData.forEach((project) => {
				const projectContainerEl = projectElSetup(project);
				projectsContainerHtml.appendChild(projectContainerEl);
			});
		} else if (projectsPage) {
			const projectsData = data.projects;
			let currentProject = {};
			const urlSearchParams = new URLSearchParams(window.location.search);
			const articleSlug = urlSearchParams.get('slug');
			const titleEl = document.querySelector('.project-title-container > h2');
			const projectImgsContainerLoad = document.querySelector(
				'.project-images-container-loading'
			);
			const projectImgsContainer = document.querySelector(
				'.project-images-container'
			);
			const allProjectsImagesEl = [
				...document.querySelectorAll('.project-images-container img'),
			];
			const mainImageEl = document.querySelector('.main-image');
			const secondImageEl = document.querySelector('.secondary-image-one');
			const thirdImageEl = document.querySelector('.secondary-image-two');
			const technologiesEl = document.querySelector('.technologies-lists');
			const technologiesUlEl = document.querySelector(
				'.technologies-lists > ul'
			);
			const projectInfoEl = document.querySelector('.project-description-info');
			const codeLinkA = document.querySelector('.code-link > a');
			const websiteLinkA = document.querySelector('.website-link > a');
			projectsData.forEach((project) => {
				if (project.slug === articleSlug) {
					currentProject = project;
				}
			});

			if (!currentProject.slug) {
				console.log('no slug');
				projectsPage.style.display = 'none';
				window.location.href = '/';
			} else {
				outPutProjectData(
					{
						titleEl,
						mainImageEl,
						secondImageEl,
						thirdImageEl,
						allProjectsImagesEl,
						projectImgsContainerLoad,
						projectImgsContainer,
					},
					currentProject
				);

				technologiesEl.style.display = 'block';
				projectInfoEl.style.display = 'block';

				codeLinkA.href = currentProject.projectCode;
				currentProject.projectSite !== '#' ? websiteLinkA.href = currentProject.projectSite : websiteLinkA.classList.add('not-avaliable');

				currentProject.technologies.forEach((technology) => {
					const technologyListEl = technologiesListElSetup(technology);
					technologiesUlEl.appendChild(technologyListEl);
				});

				const pEl = document.createElement('p');
				pEl.classList.add('project-info-p');
				pEl.textContent = currentProject.description;
				projectInfoEl.appendChild(pEl);
			}
		}
	});

// function mobileNav(clsEl, containerEl, navEl, amlEl) {
// 	console.log(amlEl);
// 	amlEl.forEach((link) => {
// 		link.addEventListener('click', () => {
// 			containerEl.style.transform = 'translateX(-100%)';
// 		});
// 	});
// 	navEl.addEventListener('click', () => {
// 		containerEl.style.transform = 'translateX(0)';
// 	});
// 	clsEl.addEventListener('click', () => {
// 		containerEl.style.transform = 'translateX(-100%)';
// 	});
// }
