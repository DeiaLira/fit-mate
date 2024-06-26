const routes = [
  {
    path: '/',
    component: () => import('pages/IndexPage.vue'),
  },

  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') }
    ]
  },

  {
    path: '/todayWorkout',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/TodayWorkoutPage.vue') }
    ]
  },

  {
    path: '/videoExecution',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/VideoExecutionPage.vue') }
    ]
  },

  {
    path: '/changeWeight',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/ChangeWeightPage.vue') }
    ]
  },

  {
    path: '/editWeight',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/EditWeightPage.vue') }
    ]
  },

  {
    path: '/newWeight',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/NewWeightPage.vue') }
    ]
  },

  {
    path: '/selectWorkout',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/SelectWorkoutPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
