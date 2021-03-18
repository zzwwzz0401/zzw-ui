import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Intro from './markdown/intro.md'
import Start from './markdown/start.md'
import Install from './markdown/install.md'
import Markdown from './components/Markdown.vue'
import StarsDemo from './components/StarsDemo.vue'
import { h } from 'vue'
const md = string => h(Markdown, { content: string, key: string })
const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                { path: 'intro', component: md(Intro) },
                { path: 'start', component: md(Start) },
                { path: 'install', component: md(Install) },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo },
                { path: 'stars', component: StarsDemo },
            ]
        }
    ]
})

router.beforeEach((to, form, next) => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    next()
})
