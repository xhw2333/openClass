import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout/Layout'
import HomePage from '@/views/HomePage/HomePage'
import ClassResources from '@/views/ClassResources/ClassResources'
import AboutUs from '@/views/AboutUs/AboutUs'
import TeacherGroup from '@/views/AboutUs/TeacherGroup/TeacherGroup'
import ReformAndResearch from '@/views/AboutUs/ReformAndResearch/ReformAndResearch'
import Awards from '@/views/AboutUs/Awards/Awards'
import StudentAwards from '@/views/AboutUs/Awards/StudentAwards'
import TeacherStyle from '@/views/AboutUs/TeacherStyle/TeacherStyle'
import ActivitySilhouette from '@/views/AboutUs/ActivitySilhouette/ActivitySilhouette'
import UniversityAlliance from '@/views/AboutUs/UniversityAlliance/UniversityAlliance'
import Login from '@/views/Login/Login'
import Notice from '@/views/ClassResources/Notice/Notice'
import ClassSum from '@/views/ClassResources/ClassSum/ClassSum'
import ClassLearn from '@/views/ClassResources/ClassLearn/ClassLearn'
import ResourceDownload from '@/views/ClassResources/ResourceDownload/ResourceDownload'
import ExtraStudy from '@/views/ClassResources/ExtraStudy/ExtraStudy'
import Discuss from '@/views/ClassResources/Discuss/Discuss'
import DiscussDetail from '@/views/ClassResources/Discuss/DiscussDetail/DiscussDetail'
import ClassAssess from '@/views/ClassResources/ClassAssess/ClassAssess'
import LearnStatistics from '@/views/ClassResources/LearnStatistics/LearnStatistics'
// import ExcellentClass from '@/views/ClassResources/ExcellentClass/ExcellentClass'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: 'HomePage',
      children: [
        {
          path: 'HomePage',
          name: 'HomePage',
          component: HomePage
        },
        {
          path: 'ClassResources',
          name: 'ClassResources',
          component: ClassResources,
          redirect: 'ClassResources/Notice',
          children: [
            {
              name: 'Notice',
              path: 'Notice',
              component: Notice
            },
            {
              name: 'ClassSum',
              path: 'ClassSum',
              component: ClassSum
            },
            {
              name: 'ClassLearn',
              path: 'ClassLearn',
              component: ClassLearn,
              // children:[
              //   {
              //     name: '',
              //     path: '',
              //     component: '',
              //   },
              //   {
              //     name: '',
              //     path: '',
              //     component: '',
              //   }
              // ]
            },
            {
              name: 'ResourceDownload',
              path: 'ResourceDownload',
              component: ResourceDownload
            },
            {
              name: 'ExtraStudy',
              path: 'ExtraStudy',
              component: ExtraStudy
            },
            {
              name: 'Discuss',
              path: 'Discuss',
              component: Discuss,
            },
            {
              name: 'DiscussDetail',
              path: 'DiscussDetail',
              component: DiscussDetail
            },
            {
              name: 'ClassAssess',
              path: 'ClassAssess',
              component: ClassAssess
            },
            {
              name: 'LearnStatistics',
              path: 'LearnStatistics',
              component: LearnStatistics
            },
            // {
            //   name: 'ExcellentClass',
            //   path: 'ExcellentClass',
            //   component: ExcellentClass
            // },
          ]
        },
        {
          path: 'AboutUs',
          name: 'AboutUs',
          component: AboutUs,
          redirect: '/UniversityAlliance',
          children: [
            {
              path: '/TeacherGroup',
              name: 'TeacherGroup',
              component: TeacherGroup
            },
            {
              path: '/ReformAndResearch',
              name: 'ReformAndResearch',
              component: ReformAndResearch
            },
            {
              path: '/Awards',
              name: 'Awards',
              component: Awards
            },
            {
              path: '/StudentAwards',
              name: 'StudentAwards',
              component: StudentAwards
            },
            {
              path: '/TeacherStyle',
              name: 'TeacherStyle',
              component: TeacherStyle
            },
            {
              path: '/ActivitySilhouette',
              name: 'ActivitySilhouette',
              component: ActivitySilhouette
            },
            {
              path: '/UniversityAlliance',
              name: 'UniversityAlliance',
              component: UniversityAlliance
            },
          ]
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 让页面回到顶部
  document.documentElement.scrollTop = 0
  // 调用 next()，一定要调用 next 方法，否则钩子就不会被销毁
  next()
})

export default router;