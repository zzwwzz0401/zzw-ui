import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import BottonDemo from './components/BottonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Intro from './markdown/intro.md'
import Start from './markdown/start.md'
import Install from './markdown/install.md'
import Markdown from './components/Markdown.vue'
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
                { path: 'botton', component: BottonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo }
            ]
        }
    ]
})

