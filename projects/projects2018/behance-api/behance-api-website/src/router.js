import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.use(Router)

import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Victor from './components/Photography-Victor/Photography-Victor'
import VictorPhotographerListPage from './components/Photography-Victor/Photographer-list-page-Victor'
import VictorPhotographerProfileDetailPage from './components/Photography-Victor/Photographer-profile-detail-page-Victor'
import VictorPhotographerProjectDetailPage from './components/Photography-Victor/Photographer-project-detail-page-Victor'

export default new Router({
  routes: [
    { path: '/projects/projects2018/behance-api/', component: Home },
    { path: '/projects/projects2018/behance-api/contact', component: Contact },
    { path: '/projects/projects2018/behance-api/photography', component: Victor },
    { path: '/projects/projects2018/behance-api/photographer-list-page', component: VictorPhotographerListPage },
    { path: '/projects/projects2018/behance-api/photographer-profile-detail-page/:individualPhotographerUsername', component: VictorPhotographerProfileDetailPage, props: true },
    { path: '/projects/projects2018/behance-api/photographer-project-detail-page/:individualPhotographerUserId/:individualPhotographerProject', component: VictorPhotographerProjectDetailPage, props: true },
  ],
  mode: 'history'
})
