const mobileMenuToggle = (NavMenu,bodyHtml) => {
    console.log(bodyHtml);
    const containsClsClass = NavMenu.classList.contains('close');
    if (containsClsClass) {
        NavMenu.classList.remove('close');
        NavMenu.classList.add('open');
        bodyHtml.classList.add('no-scroll');
    } else {
        NavMenu.classList.remove('open');
        bodyHtml.classList.remove('no-scroll');
        NavMenu.classList.add('close');
    }
};

const mobileNav = (
    menuClsBtnEl,
    mobileNavMenuEl,
    hamburgerMenuIconEl,
    mobileNavMenuListsEls,
    bodyHtml
) => {
    mobileNavMenuEl.classList.remove('hide');
    mobileNavMenuListsEls.forEach((listEl) => {
        listEl.addEventListener('click', () => {
            mobileMenuToggle(mobileNavMenuEl,bodyHtml);
        });
    });
    hamburgerMenuIconEl.addEventListener('click', () => {
        mobileMenuToggle(mobileNavMenuEl,bodyHtml);
    });
    menuClsBtnEl.addEventListener('click', () => {
        mobileMenuToggle(mobileNavMenuEl,bodyHtml);
    });
};

const projectElSetup = (project) => {
    const divProjectContainerEl = document.createElement('div');
    divProjectContainerEl.classList.add('project-container', project.slug);
    const aProjectEl = document.createElement('a');
    aProjectEl.href =
        project.slug !== 'coming-soon'
            ? `./project.html?slug=${project.slug}`
            : '#';
    aProjectEl.classList.add('project');
    const divProjectInfoEl = document.createElement('div');
    divProjectInfoEl.classList.add('project-info');
    const pTitleEl = document.createElement('p');
    pTitleEl.textContent = project.title;

    divProjectContainerEl.appendChild(aProjectEl);
    aProjectEl.appendChild(divProjectInfoEl);
    divProjectInfoEl.appendChild(pTitleEl);
    return divProjectContainerEl;
};

const outPutProjectData = (projectHtmlEl,currentProject) => {
    projectHtmlEl.titleEl.textContent = currentProject.title;
    projectHtmlEl.mainImageEl.src = require(`../assets/${currentProject.projectImages.mainImage}.png`);
    projectHtmlEl.secondImageEl.src = require(`../assets/${currentProject.projectImages.subImages[0]}.png`);
    projectHtmlEl.thirdImageEl.src = require(`../assets/${currentProject.projectImages.subImages[1]}.png`);

    projectHtmlEl.allProjectsImagesEl.forEach((eachProjectImg) =>
        eachProjectImg.addEventListener('load', () => {
            projectHtmlEl.projectImgsContainerLoad.style.display = 'none';
            projectHtmlEl.projectImgsContainer.style.display = 'flex';
            console.log('done');
        })
    );
}

const technologiesListElSetup = (technology) => {
    const divProjectContainerEl = document.createElement('li');
    let liClass = '';
    if (/\s/g.test(technology)) {
        liClass = technology.replace(/\s/g, '-').toLowerCase();
    } else {
        liClass = technology.toLowerCase();
    }
    divProjectContainerEl.classList.add(liClass);
    divProjectContainerEl.textContent = technology;
    return divProjectContainerEl;
};

export{
    mobileNav,
    projectElSetup,
    outPutProjectData,
    technologiesListElSetup
};