import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);



//import 编译前加载
import Home from '../pages/Home';
// import Follow from '@/pages/Follow';//别名 @->src    ~ ->public
// import Column from '../pages/Column';
import Car from '../pages/Car';
import User from '../pages/User';
import Login from '../pages/Login';
import Reg from '../pages/Reg';
import Detail from '../pages/Detail';
import ErrorPage from '../pages/ErrorPage';
import Loading from '../components/Loading'

let routes=[
    {path:'/Home',component:Home},
    {path:'/User',component:User},
    {path:'/Loading',component:Loading},
    // {path:'/Column',component:Column},
    {path:'/Car',component:Car},
    {path:'/Login',component:Login},
    {path:'/Reg',component:Reg},
    { 
        path: '/detail/:id', 
        component: Detail, 
        props: (route)=>({id:route.params.id, dataName:route.query.dataName})//$route==route
      },
    {path:'/',redirect:'/home'},
    {path:'*',component:ErrorPage},
];

export default new VueRouter({
    mode:'hash',
    routes:routes
})
